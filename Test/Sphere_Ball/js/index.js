window.addEventListener("load", windowloadHandler, false);
var sphereRad = 280;
var radius_sp = 1;
var opt_display_dots = false;
var unicodeFlakes = ['一', '般', '来', '说', '，', '所', '谓', '林', '间', '小', '镇', '，', '关', '键', '是', '需', '要', '如', '何', '写', '。', '这','话','语','虽','然','很','短','，','但','令','我','浮','想','联','翩','。']
//tor debug messages 
var Debugger = function () { };
Debugger.log = function (message) {
    try {
        console.log(message);
    }
    catch (exception) {
        return;
    }
}
function windowloadHandler() {
    canvasApp();
}
function canvasSupport() {
    return Modernizr.canvas;
}
function canvasApp() {
    if (!canvasSupport()) {
        return;
    }

    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");
    var displayWidth;
    var displayHeight;
    var timer;
    var wait;
    var count;
    var nunToAddEachFrame;
    var particleList;
    var recycleBin;
    var particleAlpha;
    var r, g, b;
    var flen;
    var m;
    var projCenterX;
    var projCenterY;
    var zMax;
    var turnAngle;
    var turnSpeed;
    var sphereCenterX, sphereCenterY, sphereCenterZ;
    var particleRad;
    var zeroAlphaDepth;
    var randAccelX, randAccelY, randAccelZ;
    var gravity;
    var rgbString;
    // we are defining a lot of variables used in the screen update functions globally 30 that they don't have to be redefined every frame. 
    var p;
    var outsideTest;
    var nextParticle;
    var sinAngle;
    var cosAngle;
    var rotX, rotz;
    var depthAlphaFactor;
    var i;
    var theta, phi;
    var x0, y0, z0;

    init();

    //Initial
    function init() {
        wait = 1;
        count = wait - 1;
        nunToAddEachFrame = 4;

        //particle color init
        r = 70;
        g = 255;
        b = 140;

        //particle string forcolor which will be completed by appending alpha value.
        rgbString = "rgba(" + r + "," + g + "," + b + ",";
        particleAlpha = 1; //alpha max = 1

        displayWidth = theCanvas.width;
        displayHeight = theCanvas.height;

        //represents distance from viewer to z=0 depth
        flen = 900;

        //projection center coordinates
        projCenterX = displayWidth / 2;
        projCenterY = displayHeight / 2;

        //don't draw coords if too large as they are very dense to the observer
        zMax = flen - 2;

        particleList = {};
        recycleBin = {};

        //random acceleration factors to make random motion
        randAccelX = 0.1;
        randAccelY = 0.1;
        randAccelZ = 0.1;

        //tag changing to a positive number (not > 1 is best), negative if floating upwards.
        gravity = -0;

        particleRad = 2.5;

        sphereCenterX = 0;
        sphereCenterY = 0;
        sphereCenterZ = -3 - sphereRad;

        //alpha values will lessen as particles move further back, depth based darken
        zeroAlphaDepth = -750;

        //sphere rotate speed, 1 complete rotation requires 1600 frames
        turnSpeed = 2 * Math.PI / 1200;
        //initial angle 
        turnAngle = 0;

        timer = setInterval(onTimer, 10 / 24);
    }

    function onTimer() {
        //if enough time, add more particles to increase load.
        count++;
        if (count >= wait) {
            count = 0;
            for (i = 0; i < nunToAddEachFrame; i++) {
                theta = Math.random() * 2 * Math.PI;
                phi = Math.acos(Math.random() * 2 - 1);
                x0 = sphereRad * Math.sin(phi) * Math.cos(theta);
                y0 = sphereRad * Math.sin(phi) * Math.sin(theta);
                z0 = sphereRad * Math.cos(phi);

                /*
                We use addParticle function to add a new particle.
                The parameters set the position and velocity components.
                
                Note that the velocity parameters will cause the particle to initially fly outwards away fromthe sphere center (After it becomes unstuck).
                */
                var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002 * x0, 0.002 * y0, 0.002 * z0);

                //envelop parameters to control the evolving alpha of particles.
                p.attack = 50;
                p.hold = 50;
                p.decay = 100;
                p.initValue = 0;
                p.holdValue = particleAlpha;
                p.lastValue = 0;

                //the particle will stuck in one place, until time has elapsed.
                p.stuckTime = 90 + Math.random() * 20;

                p.accelX = 0;
                p.accelY = gravity;
                p.accelZ = 0;
            }
        }

        //update viewing angle
        turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);
        sinAngle = Math.sin(turnAngle);
        cosAngle = Math.cos(turnAngle);

        //background fill 
        context.fillStyle = "#000000";
        context.fillRect(0, 0, displayWidth, displayHeight);

        //update and draw particles 
        p = particleList.first;
        while (p != null) {
            //before list is altered record next particle please :D 
            nextParticle = p.next;

            //update age 
            p.age++;

            //if particle passes it's stuck time, it will start moving
            if (p.age > p.stuckTime) {
                p.velX += p.accelX + randAccelX * (Math.random() * 2 - 1);
                p.velY += p.accelY + randAccelY * (Math.random() * 2 - 1);
                p.velZ += p.accelZ + randAccelZ * (Math.random() * 2 - 1);

                p.x += p.velX;
                p.y += p.velY;
                p.z += p.velZ;
            }

            /*
            We are doing two things here to calculate display coordinates.
            Whole display is rotated around a vertical axis.
            We first calculate rotated coordinates for x and z (y coords never change).
            Then, we take new coordinates (rotX, y, rotZ) and project to 2D view plane.
            */
            rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ);
            rotZ = - sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ;
            m = radius_sp * flen / (flen - rotZ);
            p.projX = rotX * m + projCenterX;
            p.projY = p.y * m + projCenterY;

            //update alpha according to envelope parameters.
            if (p.age < p.attack + p.hold + p.decay) {
                if (p.age < p.attack) {
                    p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;
                }
                else if (p.age < p.attack + p.hold) {
                    p.alpha = p.holdValue;
                }
                else if (p.age < p.attack + p.hold + p.decay) {
                    p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue;
                }
            }
            else {
                p.dead = true;
            }

            //see if the particle is still within the viewable range
            if ((p.projX > displayWidth) || (p.projX < 0) || (p.projY < 0) || (p.projY > displayHeight) || (rotZ > zMax)) {
                outsideTest = true;
            }
            else outsideTest = false;

            if (outsideTest || p.dead) {
                recycle(p);
            }

            else {
                //depth-dependent darken
                depthAlphaFactor = (1 - rotZ / zeroAlphaDepth);
                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor < 0) ? 0 : depthAlphaFactor);
                context.fillStyle = rgbString + depthAlphaFactor * p.alpha + ")";
                // Add text function
                context.fillText(p.flake, p.projX, p.projY);

                //draw
                context.beginPath();
                if (opt_display_dots) {
                    context.arc(p.projX, p.projY, m * particleRad, 0, 2 * Math.PI, false);
                }
                context.closePath();
                context.fill();
            }

            p = nextParticle;
        }
    }

    function addParticle(x0, y0, z0, vx0, vy0, vz0) {
        var newParticle;
        var color;

        //check recycle bin for available drop
        if (recycleBin.first != null) {
            newParticle = recycleBin.first;
            //remove from bin
            if (newParticle.next != null) {
                recycleBin.first = newParticle.next;
                newParticle.next.prev = null;
            }
            else recycleBin.first = null;
        }
        //if recycle bin is null, create new particle 
        else {
            newParticle = {};
        }

        //add to beginning of particle list
        if (particleList.first == null) {
            particleList.first = newParticle;
            newParticle.prev = null;
            newParticle.next = null;
        }
        else {
            newParticle.next = particleList.first;
            particleList.first.prev = newParticle;
            particleList.first = newParticle;
            newParticle.prev = null;
        }

        //init
        newParticle.x = x0;
        newParticle.y = y0;
        newParticle.z = z0;
        newParticle.velX = vx0;
        newParticle.velY = vy0;
        newParticle.velZ = vz0;
        newParticle.age = 0;
        newParticle.dead = false;

        newParticle.flake = unicodeFlakes[Math.floor(Math.random() * unicodeFlakes.length)];
        if (Math.random() > 0.5) {
            newParticle.right = true;
        }
        else {
            newParticle.right = false;
        }
        return newParticle;
    }

    function recycle(p) {
        //remove from particlelist
        if (particleList.first == p) {
            if (p.next != null) {
                p.next.prev = null;
                particleList.first = p.next;
            }
            else {
                particleList.first = null;
            }
        }
        else {
            if (p.next == null) {
                p.prev.next = null;
            }
            else {
                p.prev.next = p.next;
                p.next.prev = p.prev;
            }
        }

        //add to recycle bin
        if (recycleBin.first == null) {
            recycleBin.first = p;
            p.prev = null;
            p.next = null;
        }
        else {
            p.next = recycleBin.first;
            recycleBin.first.prev = p;
            recycleBin.first = p;
            p.prev = null;
        }
    }
}
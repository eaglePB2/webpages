function generateCSS() {
    var discordID = document.getElementById("discord-id").value || "UserID";
    var normalImageURL = document.getElementById("normal-image-url").value || "ImageURL";
    var talkingImageURL = document.getElementById("talking-image-url").value || normalImageURL;
    var normalImageBrightness = document.getElementById("normal-image-brightness").value || 50;
    var talkingImageBrightness = document.getElementById("talking-image-brightness").value || 100;
    var talkingImageBounce = document.getElementById("talking-image-bounce").value || 10;

    if (document.getElementById("normal").checked) {
        var animate = `@keyframes speak-now {
            0% { transform: translateY(0);  }
          }
        `;
    } else if (document.getElementById("boing").checked) {
        animate = `@keyframes speak-now {
            0% { bottom:0px; }
            15% { bottom:${talkingImageBounce}px; }
            30% { bottom:0px; }
          }
        `;
    } else if (document.getElementById("inf_boing").checked) {
        animate = `
        @keyframes speak-now {
            0%,
            100% { transform: translateY(0); }
            25% { transform: translateY(-${talkingImageBounce}px); }
  	        75% { transform: translateY(${talkingImageBounce}px); }
            }`;
    } else if (document.getElementById("fuwa_boing").checked) {
        animate = `
        @keyframes speak-now {
            0% { transform:translateY(0) rotate(-5deg);}
            50% { transform:translateY(-${talkingImageBounce}px); ) rotate(0deg);}
            100% { transform:translate(0)rotate(5deg);}
        }`;
      }

    // You can customize the generated CSS by modifying the following template string.
    var cssString = `
  li.voice-state:not([data-reactid*="${discordID}"]) {display:none; }
  .avatar {
    content:url(${normalImageURL});
    height:auto !important;
    width:auto !important;
    border-radius:0% !important;
    filter: brightness(${normalImageBrightness}%); 
  }
  
  .speaking {
    content:url(${talkingImageURL});
    border-color:rgba(0,0,0,0) !important;
    position:relative;
    animation-name: speak-now;
    animation-duration: 1s;
    animation-fill-mode:forwards;
    filter: brightness(${talkingImageBrightness}%);
  }
  
  ${animate}
  
  li.voice-state{ position: static; }
  div.user{ position: absolute; left:40%; bottom:5%; }
  
  .name { display: none; }
  
  body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }
  `;

    // Remove whitespace at the beginning and end of the string.
    cssString = cssString.replace(/^\s*/, "").replace(/\s*$/, "");
    document.getElementById("css-output").value = cssString;
}

function copyCSS() {
    var textarea = document.getElementById("css-output");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

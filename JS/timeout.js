var title = document.title;
var blurMessage = [
  "|´・ω・)ノ 在你没看我的时候，我会悄悄的出来哦～", 
  "|´・ω・) 你看不见我…… 你看不见我…… 你看不见我……", 
  "ヾ(´･ ･｀｡)ノ 这十分不妙…… 我是说彩蛋消失啦！", 
  "∠( ᐛ 」∠)＿ 你知道吗？当你没在看这个网页的时候 我就会有机率性的出来啦！"
];

var intervalTimer = null;
var timeoutTimer = null;

window.addEventListener("blur", function () { 
   intervalTimer = setInterval(function() {
     var rand = Math.floor((Math.random() * blurMessage.length));
     document.title = blurMessage[rand];
     timeoutTimer = setTimeout(function() {
       document.title = title;
     },4000);
   },12000);
});

window.addEventListener("focus", function(){ 
  clearInterval(intervalTimer);
  clearTimeout(timeoutTimer);
  document.title = title; 
});

function appendImage(){

    var YTID = document.getElementById("youtube-id").value;

    var result = `
    <h1>影片缩略图截取结果：</h1>
    <img src='http://img.youtube.com/vi/${YTID}/default.jpg' alt="${YTID}/0">
    <img src='http://img.youtube.com/vi/${YTID}/sddefault.jpg' alt="${YTID}/0sd">
    <img src='http://img.youtube.com/vi/${YTID}/mqdefault.jpg' alt="${YTID}/0mq">
    <img src='http://img.youtube.com/vi/${YTID}/hqdefault.jpg' alt="${YTID}/0hq">
    <img src='http://img.youtube.com/vi/${YTID}/maxresdefault.jpg' alt="${YTID}/0maxres">
    <img src='http://img.youtube.com/vi/${YTID}/1.jpg' alt="${YTID}/1">
    <img src='http://img.youtube.com/vi/${YTID}/sd1.jpg' alt="${YTID}/1sd">
    <img src='http://img.youtube.com/vi/${YTID}/mq1.jpg' alt="${YTID}/1mq">
    <img src='http://img.youtube.com/vi/${YTID}/hq1.jpg' alt="${YTID}/1hq">
    <img src='http://img.youtube.com/vi/${YTID}/maxres1.jpg' alt="${YTID}/1maxres">
    <img src='http://img.youtube.com/vi/${YTID}/2.jpg' alt="${YTID}/2">
    <img src='http://img.youtube.com/vi/${YTID}/sd2.jpg' alt="${YTID}/2sd">
    <img src='http://img.youtube.com/vi/${YTID}/mq2.jpg' alt="${YTID}/2mq">
    <img src='http://img.youtube.com/vi/${YTID}/hq2.jpg' alt="${YTID}/2hq">
    <img src='http://img.youtube.com/vi/${YTID}/maxres2.jpg' alt="${YTID}/2maxres">
    <img src='http://img.youtube.com/vi/${YTID}/3.jpg' alt="${YTID}/3">
    <img src='http://img.youtube.com/vi/${YTID}/sd3.jpg' alt="${YTID}/3sd">
    <img src='http://img.youtube.com/vi/${YTID}/mq3.jpg' alt="${YTID}/3mq">
    <img src='http://img.youtube.com/vi/${YTID}/hq3.jpg' alt="${YTID}/3hq">
    <img src='http://img.youtube.com/vi/${YTID}/maxres3.jpg' alt="${YTID}/3maxres">
    `

   document.getElementById("img").innerHTML = result; //This will append image
}
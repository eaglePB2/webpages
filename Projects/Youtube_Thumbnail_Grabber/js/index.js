function appendImage() {

    var YTID = document.getElementById("youtube-id").value;

    // regular expression to match the video ID
    const regex = /(?:\/|%3D|v=)([\w-]{11})(?:[%#?&]|$)/;

    // extract the video ID from the URL
    const videoID = YTID.match(regex)[1];

    console.log(videoID); // prints "a7xo35y1RR0"


    var result = `
    <h1>影片缩略图截取结果：</h1>
    <img src='http://img.youtube.com/vi/${videoID}/default.jpg' alt="${videoID}/0">
    <img src='http://img.youtube.com/vi/${videoID}/sddefault.jpg' alt="${videoID}/0sd">
    <img src='http://img.youtube.com/vi/${videoID}/mqdefault.jpg' alt="${videoID}/0mq">
    <img src='http://img.youtube.com/vi/${videoID}/hqdefault.jpg' alt="${videoID}/0hq">
    <img src='http://img.youtube.com/vi/${videoID}/maxresdefault.jpg' alt="${videoID}/0maxres">
    <img src='http://img.youtube.com/vi/${videoID}/1.jpg' alt="${videoID}/1">
    <img src='http://img.youtube.com/vi/${videoID}/sd1.jpg' alt="${videoID}/1sd">
    <img src='http://img.youtube.com/vi/${videoID}/mq1.jpg' alt="${videoID}/1mq">
    <img src='http://img.youtube.com/vi/${videoID}/hq1.jpg' alt="${videoID}/1hq">
    <img src='http://img.youtube.com/vi/${videoID}/maxres1.jpg' alt="${videoID}/1maxres">
    <img src='http://img.youtube.com/vi/${videoID}/2.jpg' alt="${videoID}/2">
    <img src='http://img.youtube.com/vi/${videoID}/sd2.jpg' alt="${videoID}/2sd">
    <img src='http://img.youtube.com/vi/${videoID}/mq2.jpg' alt="${videoID}/2mq">
    <img src='http://img.youtube.com/vi/${videoID}/hq2.jpg' alt="${videoID}/2hq">
    <img src='http://img.youtube.com/vi/${videoID}/maxres2.jpg' alt="${videoID}/2maxres">
    <img src='http://img.youtube.com/vi/${videoID}/3.jpg' alt="${videoID}/3">
    <img src='http://img.youtube.com/vi/${videoID}/sd3.jpg' alt="${videoID}/3sd">
    <img src='http://img.youtube.com/vi/${videoID}/mq3.jpg' alt="${videoID}/3mq">
    <img src='http://img.youtube.com/vi/${videoID}/hq3.jpg' alt="${videoID}/3hq">
    <img src='http://img.youtube.com/vi/${videoID}/maxres3.jpg' alt="${videoID}/3maxres">
    `

    document.getElementById("img").innerHTML = result; //This will append image
}
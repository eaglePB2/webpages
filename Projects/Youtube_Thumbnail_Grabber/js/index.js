


function appendImage() {
    const input = document.getElementById("youtube-id");
    const videoID = input.value.match(/(?:\/|%3D|v=)([\w-]{11})(?:[%#?&]|$)/)[1];
    const imageTypes = ['default', 'sddefault', 'mqdefault', 'hqdefault', 'maxresdefault'];
    const imageTypealt = ['sd','mq','hq','maxres'];
    let images = '';

    imageTypes.forEach((type) => {
        images += `<img src="http://img.youtube.com/vi/${videoID}/${type}.jpg" alt="${videoID}/${type}">`;
    });

    for (let i = 0; i <= 3; i++) {
        imageTypealt.forEach((type) => {
            images += `<img src="http://img.youtube.com/vi/${videoID}/${type}${i}.jpg" alt="${videoID}/${type}${i}">`;
        });
    }



    const imgContainer = document.getElementById("img");
    imgContainer.innerHTML = `<h1>影片缩略图截取结果：</h1>${images}`;
}

function appendImage() {
    const input = document.getElementById("youtube-id");
    const videoID = input.value.match(/(?:\/|%3D|v=)([\w-]{11})(?:[%#?&]|$)/)[1];
    const imageTypes = ['default', 'sddefault', 'mqdefault', 'hqdefault', 'maxresdefault'];
    let images = '';

    for (let i = 0; i <= 3; i++) {
        imageTypes.forEach((type) => {
            images += `<img src="http://img.youtube.com/vi/${videoID}/${i}.${type}.jpg" alt="${videoID}/${i}${type}">`;
        });
    }

    const imgContainer = document.getElementById("img");
    imgContainer.innerHTML = `<h1>影片缩略图截取结果：</h1>${images}`;
}

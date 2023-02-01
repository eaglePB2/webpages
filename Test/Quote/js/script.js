let url = "quotes.json";
fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let nextthought = document.getElementById("nextthought");
        nextthought.addEventListener("click", function () {
            let countnum = document.getElementById("countnum");
            let a = Math.floor(Math.random() * (520 + 1));
            countnum.value = a;
            displaythought(countnum.value, data);
        });
    });

function displaythought(index, data) {
    let thought = document.getElementById("thought");

    let htmlthought = `<div class="alert alert-outline-primary">
			${data[index].text}<br>
		</div>`;
    thought.innerHTML = htmlthought;
}
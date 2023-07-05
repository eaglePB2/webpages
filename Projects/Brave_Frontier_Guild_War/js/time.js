function updateDateTime() {
    var now = new Date();
    var hourElement = document.getElementById("hour");
    var dateElement = document.getElementById("date");

    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var formattedHour = (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes);

    var day = now.getDate();
    var month = now.getMonth() + 1; // Months are zero-based
    var year = now.getFullYear();
    var formattedDate = (day < 10 ? "0" + day : day) + "/" + (month < 10 ? "0" + month : month) + "/" + year;

    hourElement.textContent = formattedHour;
    dateElement.textContent = formattedDate;
}

// Update the time and date immediately
updateDateTime();

// Update the time and date every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
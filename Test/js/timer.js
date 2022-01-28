
var countDownDate = new Date("Feb, 2022 00:30:00").getTime();
var countDownFunction = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =  days + ' Д ' + hours + ' Ч ' + minutes + ' М ' + seconds + ' С';
        
        if (distance < 0) {
            clearInterval(countDownFunction);
            document.getElementById("timer").innerHTML = "Время истекло";
        }
    }, 1000)

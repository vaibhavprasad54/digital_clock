setInterval(displayTime, 1000);

function displayTime(){
    let date = new Date();
    let n = date.toDateString();
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    AMPM = 'AM';

    if(hr > 12){
        hr -=12;
        AMPM = 'PM';
    }
    if(hr == 0){
        hr = 12;
        AMPM = 'AM';
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =  hr + ":" + min + ":" + sec + " " + AMPM;
    let currentDate = n;

    document.getElementById('digital_clock').innerHTML = currentTime;
    document.getElementById('display_date').innerHTML = currentDate;

}
displayTime();

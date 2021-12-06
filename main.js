const mainBairthday = "28 September 2022";
const daysDiv = document.getElementById('days');
const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');

function countDown() {
    const birthDay = new Date(mainBairthday);
    const currentDate = new Date();


    const totalTime = (birthDay - currentDate) / 1000;
    const days = Math.floor(totalTime / 3600 / 24);
    const hours = Math.floor((totalTime / 3600) % 24);
    const minutes = Math.floor((totalTime / 60) % 60);
    const seconds = Math.floor(totalTime) % 60;

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;


    // console.log(days, hours, minutes, seconds);
}
countDown();
setInterval(countDown, 1000);
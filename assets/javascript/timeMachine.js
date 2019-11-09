//alert("Hello");
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');
function setDate() {
    //console.log("Hi");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    console.log(seconds);
}
 setInterval(setDate,1000);
//setDate();
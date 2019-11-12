//alert("Hello");
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const secondHand1 = document.querySelector('.secondhand1');
const minuteHand1 = document.querySelector('.minutehand1');
const hourHand1 = document.querySelector('.hourhand1');


function setDate() {
    //console.log("Hi");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360)-90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand1.style.transform = `rotate(${secondsDegrees}deg)`;


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360)-90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    minuteHand1.style.transform = `rotate(${minutesDegrees}deg)`;


    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360)-90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    hourHand1.style.transform = `rotate(${hoursDegrees}deg)`;



    //console.log(seconds);
    //console.log(secondsDegrees);

}
 setInterval(setDate,1000);
//setDate();
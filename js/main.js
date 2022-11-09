const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);

// console.log(breatheTime, holdTime);

breathAnimation();

function breathAnimation() {
    // console.log('Breathe In!');

    // setTimeout(() => {
    //     console.log("Hold");

    //     setTimeout(() => {
    //         console.log("Breathe Out!");
    //     }, holdTime);
    // }, breatheTime);

    text.innerText = "Breathe In!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerText = "Hold!";

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.className= "container shrink";
            
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);
const timeElement = document.querySelector('.timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');


let elapsedTime = 0;
let intervalId = null;
let startTime = null;


// スタート
start.addEventListener("click", function() {

    startTime = new Date();

    intervalId = setInterval(function () {
        let now = new Date();
        elapsedTime = now - startTime;
        updateTimer();
    }, 10);

    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
});


//ストップ
stop.addEventListener("click", function() {
    clearInterval(intervalId);
    updateTimer();

    start.disabled = false
    stop.disabled = true;
    reset.disabled = false;
})


//リセット
reset.addEventListener("click", function() {
    clearInterval(intervalId);
    elapsedTime = 0;
    updateTimer();

    reset.disabled = true;
    start.disabled = false;
});

//時間表示
function updateTimer() {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); 
    const milliseconds = Math.floor(elapsedTime % 1000); 
    
    timeElement.textContent = 
    `${hours.toString()} 
    : ${minutes.toString()} 
    : ${seconds.toString()} 
    : ${milliseconds.toString()}`;
}

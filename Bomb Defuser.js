let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let countdown = 10;

let intervalId = setInterval(function() {
    countdown -= 1;
    timerEl.textContent = countdown;

    if (countdown === 0) {
        timerEl.textContent = "BOOM !";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let defuserText = defuserEl.value;

    if (event.key === "Enter" && defuserText === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
    }
});
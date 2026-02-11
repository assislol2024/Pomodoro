let domTimer = document.querySelector(".timer");

let tempo = 0;

let setSeconds = (seconds) => {
  let second = new Date(seconds * 1000);
  second = second.toLocaleTimeString("pt-br", {
    timeZone: "UTC",
    minute: "2-digit",
    second: "2-digit",
  });
  return second;
};

let setMinuts = (min) => {
  let minuts = 60 * min;
  return minuts;
};
document.addEventListener("click", (e) => {
  let el = e.target.id;
  tempo = setMinuts(25);

  if (el === "start") {
    console.log(el);
    domTimer = setInterval(() => {
      tempo--;
      domTimer.innerHTML = setSeconds(tempo);
    }, 1000);
  }
  if (el === "stop") {
    clearInterval(domTimer);
    domTimer.classList.add("stoped");
  }
  if (el === "reset") {
    clearInterval(domTimer);
    tempo = 0;
    domTimer.innerHTML = "00:00";
  }
});

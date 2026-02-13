const domTimer = document.querySelector(".timer");
let count = 0;

let getSeconds = (seconds) => {
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
  let tempo = setMinuts(25);

  if (el === "start") {
    count = setInterval(() => {
      tempo--;
      domTimer.innerHTML = getSeconds(tempo);
      if (tempo === 0) {
        domTimer.classList.add("stoped");
        alert("Acabou o tempo!!!")
        clearInterval(count);
      }
    }, 1000);
    domTimer.classList.remove("stoped");
  }
  if (el === "stop") {
    clearInterval(count);
    domTimer.classList.add("stoped");
  }
  if (el === "reset") {
    clearInterval(count);
    domTimer.classList.remove("stoped");
    tempo = setMinuts(25);
    domTimer.innerHTML = "25:00";
  }
});

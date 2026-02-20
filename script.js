const domTimer = document.querySelector(".timer");

let timerId = 0;
let state = "stopped";

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
let tempo = setMinuts(25);


document.addEventListener("click", (e) => {
  let el = e.target.id;

  function setState(e) {
    state = e;
  }

  switch (el) {
    case "start":
      if (state === "stopped") {
        timerId = setInterval(() => {
          tempo--;
          if (tempo === 0) {
            domTimer.classList.add("stoped");
            alert("Acabou o tempo!!!");
            clearInterval(timerId);
          }
          domTimer.textContent = getSeconds(tempo);
        }, 1000);

        domTimer.classList.remove("stoped");
        setState("running");
      }
      break;
    case "stop":
      if (state === "running") {
        clearInterval(timerId);
        domTimer.classList.add("stoped");
        setState("stopped");
      }
      console.log(state);
      break;
    case "reset":
      if (state === "running" || state === "stopped") {
        clearInterval(timerId);
        domTimer.classList.remove("stoped");
        tempo = setMinuts(25);
        domTimer.innerHTML = "25:00";
        setState("stopped");
      }
      console.log(state);
      break;
  }
});

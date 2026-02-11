let domTimer = document.querySelector(".timer");
let count, tempo;;


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


let startCount = () => { 
  
  console.log("aqui")
  count = setInterval(() => {
    tempo--;
    domTimer.innerHTML = getSeconds(tempo);
  }, 1000);
  clearInterval(count);
};

document.addEventListener("click", (e) => {
  let el = e.target.id;

  if (el === "start") {
    startCount();
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

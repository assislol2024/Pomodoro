const timer = document.querySelector(".timer");
let min25 = 60*25
let tempo = 0

let setSeconds = (seconds) => {
  let second = new Date(seconds * 1000);
  second = second.toLocaleTimeString("pt-br", {
    timeZone: "UTC",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });
  return second;
};

document.addEventListener("click", (e) => {
  let el = e.target.id;

  if (el === "start") {
    timer.innerHTML = setSeconds(min25);
    close
  } else if (el == "stop") {
  } else if (el == "reset") {
  }
});

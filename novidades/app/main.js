let carros = [];
const endpointDaAPI = '';
getBuscarCarrosDaAPI()

async function getBuscarCarrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    carros = await res.json();
    carros = aplicarDesconto(carros)
    exibirOsCarrosNaTela(carrosComDesconto);
}

var video = document.getElementById("meuVideo");
var button = document.getElementById("playPauseButton");
var overlay = document.querySelector(".overlay");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    button.textContent = "Pause";
    button.classList.add("hide");
  } else {
    video.pause();
    button.textContent = "Play";
    button.classList.remove("hide");
  }
}

button.addEventListener("click", togglePlayPause);
overlay.addEventListener("click", togglePlayPause);

video.addEventListener("play", function() {
  button.classList.add("hide");
});

video.addEventListener("pause", function() {
  button.classList.remove("hide");
});

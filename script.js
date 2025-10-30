const music = document.getElementById("lagu");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

// Untuk HP, autoplay kadang diblok, jadi mulai saat pertama user tap
document.addEventListener("click", () => {
  if (music.paused) music.play();
});

playBtn.addEventListener("click", () => music.play());
pauseBtn.addEventListener("click", () => music.pause());
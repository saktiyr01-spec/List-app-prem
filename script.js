document.getElementById("year").innerText = new Date().getFullYear();

const music = document.getElementById("lagu");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

// Autoplay biasanya diblok di HP, jadi play saat user interaksi
document.addEventListener("click", () => {
  if (music.paused) music.play();
});

playBtn.addEventListener("click", () => music.play());
pauseBtn.addEventListener("click", () => music.pause());

// Testimoni LocalStorage
const form = document.getElementById("testiForm");
const list = document.getElementById("testiList");

const loadTesti = () => {
  const data = JSON.parse(localStorage.getItem("testi") || "[]");
  list.innerHTML = data.map(t => `
    <div class="bubble">
      <div class="rate">${"⭐".repeat(t.rating)}</div>
      <div>"${t.pesan}"</div>
      <small>— ${t.nama}</small>
    </div>
  `).join("");
};

form.addEventListener("submit", e => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const rating = document.getElementById("rating").value;
  const pesan = document.getElementById("pesan").value.trim();
  if(!nama || !pesan || !rating) return;

  const data = JSON.parse(localStorage.getItem("testi") || "[]");
  data.unshift({nama, rating, pesan});
  localStorage.setItem("testi", JSON.stringify(data));
  form.reset();
  loadTesti();
});

loadTesti();

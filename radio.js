const song = document.getElementById("song");
const dj = document.getElementById("dj");
const player = document.getElementById("player");

// Set your live radio URL here
player.src = "https://your-live-radio-url/stream";

// Load metadata from localStorage or defaults
function loadMetadata() {
  const data = JSON.parse(localStorage.getItem("radioData")) || {
    now_playing: "Test Transmission",
    dj: "Emily"
  };
  song.textContent = data.now_playing;
  dj.textContent = `DJ: ${data.dj}`;
}

loadMetadata();

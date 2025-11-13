function login() {
  const input = prompt("Enter admin password:");
  if (input !== "GLaDOS_Override") {
    alert("Access Denied");
    return;
  }
  document.getElementById("admin").classList.remove("hidden");

  // Load existing data
  const data = JSON.parse(localStorage.getItem("radioData")) || {
    now_playing: "Test Transmission",
    dj: "Emily"
  };
  document.getElementById("editor").value = JSON.stringify(data, null, 2);
}

function saveMetadata() {
  try {
    const data = JSON.parse(document.getElementById("editor").value);
    localStorage.setItem("radioData", JSON.stringify(data));
    alert("Saved!");
    // Immediately update player display
    document.getElementById("song").textContent = data.now_playing;
    document.getElementById("dj").textContent = `DJ: ${data.dj}`;
  } catch (e) {
    alert("Invalid JSON");
  }
}

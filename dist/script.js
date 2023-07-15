// Setze das Ablaufdatum des Countdowns
var expirationDate = new Date("2021-04-30T00:00:00");

// Funktion, die den Countdown aktualisiert
function updateCountdown() {
  var now = new Date();
  var remainingTime = expirationDate - now;
  
  // Überprüfe, ob der Countdown abgelaufen ist
  if (remainingTime <= 0) {
    document.getElementById("timer").textContent = "Countdown abgelaufen";
    return;
  }
  
  // Berechne die verbleibenden Minuten und Sekunden
  var minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  var seconds = Math.floor((remainingTime / 1000) % 60);
  
  // Aktualisiere den Timer im HTML
  document.getElementById("timer").textContent = minutes + " Minuten " + seconds + " Sekunden";
  
  // Aktualisiere den Countdown alle 1 Sekunde
  setTimeout(updateCountdown, 1000);
}

// Starte den Countdown
updateCountdown();

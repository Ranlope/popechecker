// Czekaj, aż dokument HTML zostanie w pełni załadowany przed wykonaniem kodu
window.onload = function() {
    // Pobierz bieżącą datę
    var currentDate = new Date();
  
    // Ustaw datę, przed którą papież był żywy (2 kwietnia 2005 roku)
    var popeAliveDate = new Date('2005-04-02');
  
    // Sprawdź, czy bieżąca data jest przed 2 kwietnia 2005 roku
    if (currentDate < popeAliveDate) {
      document.getElementById("message").innerHTML = "Papież żyje!";
    } else {
      document.getElementById("message").innerHTML = "Papież nie żyje.";
    }
  };
  
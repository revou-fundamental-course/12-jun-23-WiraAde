function konversi() {
    try {
      var celsius = parseFloat(document.getElementById('inputCelsius').value);
      if (isNaN(celsius)) {
        throw new Error("Masukkan suhu dalam angka");
      }
      
      var fahrenheit = (celsius * 9/5) + 32;
      var rumus = "(" + celsius + " °C × 9/5) + 32 = ";
      rumus = rumus.replaceAll("Â", "");
      document.getElementById('hasil').innerHTML = "<b>Hasil Fahrenheit:</b> <br>" + fahrenheit + " °F <br><br> <b>Rumus:</b> <br>" + rumus + celsius + " °C";
      document.getElementById('error').innerHTML = '';
    } catch (error) {
      document.getElementById('hasil').innerHTML = '';
      document.getElementById('error').innerHTML = error.message;
    }
  }

  function reset() {
    document.getElementById('inputCelsius').value = '';
    document.getElementById('hasil').innerHTML = '';
    document.getElementById('error').innerHTML = '';
  }
  
  
  function reverse() {
    try {
      var fahrenheit = parseFloat(document.getElementById('inputCelsius').value);
      if (isNaN(fahrenheit)) {
        throw new Error("Masukkan suhu dalam angka");
      }
  
      var celsius = (fahrenheit - 32) * 5/9;
      var rumus = "(" + fahrenheit + " °F - 32) × 5/9 = ";
      rumus = rumus.replaceAll("Â", "");
      document.getElementById('hasil').innerHTML = "<b>Hasil Celsius:</b> <br>" + celsius + " °C <br><br> <b>Rumus:</b> <br>" + rumus + celsius + " °C";
      document.getElementById('error').innerHTML = '';
    } catch (error) {
      document.getElementById('hasil').innerHTML = '';
      document.getElementById('error').innerHTML = error.message;
    }
  }
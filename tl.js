let redLight = document.querySelector('.red-light');
let yellowLight = document.querySelector('.yellow-light');
let greenLight = document.querySelector('.green-light');

function switchLights() {
  redLight.style.backgroundColor = 'red';
  yellowLight.style.backgroundColor = 'black';
  greenLight.style.backgroundColor = 'black';

  setTimeout(function() {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'yellow';
    greenLight.style.backgroundColor = 'black';

    setTimeout(function() {
      redLight.style.backgroundColor = 'black';
      yellowLight.style.backgroundColor = 'black';
      greenLight.style.backgroundColor = 'green';

      setTimeout(function() {
        redLight.style.backgroundColor = 'black';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = 'black';

        switchLights();
      }, 2000);
    }, 5000);
  }, 5000);
}

switchLights();

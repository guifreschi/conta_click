window.onload = function() {
  var counterElement = document.getElementById('counter');
  var resetButton = document.getElementById('reset');
  var clickCount = 0;

  counterElement.onclick = function() {
    clickCount = clickCount + 1;
    counterElement.innerText = clickCount;
  };

  resetButton.onclick = function(event) {
    event.stopPropagation(); 
    clickCount = 0;
    counterElement.innerText = clickCount;
  };
};

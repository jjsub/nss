var targetDiv = document.getElementById("mousey");
var hiddenDiv = document.getElementById("hidden");

// Change the class when the mouse enters

// targetDiv.onmouseover = function(){
//   targetDiv.classList.remove('red');
//   targetDiv.classList.add('blue');

// }; 

// This one take the color off

// targetDiv.onmouseover = function(){
//   targetDiv.classList.toggle('red');

// };

// Turn the red off when the mouse enter

// targetDiv.onmouseover = function(){
//   targetDiv.classList.remove('red');

// };
// // Turn the mouse back on when the mouse leaves
// targetDiv.onmouseover = function(){
//   targetDiv.classList.add('red');

// };

//Why use js insted of css?

var peopleToDisplay = [];
    peopleToDisplay.push("Sergio Vargas");
    peopleToDisplay.push("El Maginve");
    peopleToDisplay.push("Rica Rena");
    peopleToDisplay.push("Aventura");
    peopleToDisplay.push("El torito");
    peopleToDisplay.push("Tonio");


    targetDiv.onmouseover = function(){
      hiddenDiv.classList.toggle('hide');
      hiddenDiv.innerHTML = peopleToDisplay.join("<br>");

    };

    targetDiv.onmouseover = function(){
      hiddenDiv.classList.add('hide');
    };






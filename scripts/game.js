// alert(state.history[0].variables.my_var)
// if (state.history[0].variables.my_var == 0){
//  alert("test")
// }
// alert(state.history[0].variables.my_var);
// state.history[0].variables.my_var = 1;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback){
        window.setTimeout(callback, 1000/60);
      };
})();

var width = document.getElementById("gameCanvas").width;
var height = document.getElementById("gameCanvas").height;


var gameContext = document.getElementById("gameCanvas").getContext("2d");

var keys = [];

var player = null;

var key = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  space: 32,
  w: 87,
  a: 65,
  s: 83,
  d: 68,
}

$(document).keydown(function(e){
  e.preventDefault();
  keys[e.keyCode ? e.keyCode : e.which] = true;
});

$(document).keyup(function(e){
  e.preventDefault();
  delete keys[e.keyCode ? e.keyCode : e.which];
});

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
var canvas = document.getElementById('gameCanvas');


function init(){
  loop();
  // DON'T PUT ANYTHING AFTER THE GAME LOOP STARTS!
}

function update(){

}

function render(){

}


function loop(){
  requestAnimFrame(function(){
    loop();
  });
  update();
  render();
}


var currentBrush = "red";
var mouseDown = false;

var figuresNames = ["circle", "square", "triangle-right", "triangle-down"];
var figures;
var currentFigure;

ApplyFigures();
var figuresIndex = 0;
var paintFigure = figures[0];

window.onload = function () {
  document.getElementById("main").style =
    "height:" + (window.innerHeight - 175) + "px; width:100%;";

  var mainField = document.getElementById("main");
  mainField.onmousedown = function () {
    mouseDown = true;
  };
  mainField.onmouseup = function () {
    mouseDown = false;
  };

  mainField.onmousemove = function (x) {
    if (mouseDown) {
      var brush = paintFigure.replace(/clx/i, x.clientX - 5);
      brush = brush.replace(/cly/i, x.clientY - 175);
      mainField.innerHTML += brush;
    }
  };
};

function ChangeFigure(index) {
  paintFigure = figures[index];
  figuresIndex = index;
  document.getElementById("currentFigure").innerHTML =
    currentFigure[figuresIndex];
}

function ChangeColor(element) {
  currentBrush = window.getComputedStyle(element, null).backgroundColor;
  console.log(currentBrush);
  ApplyFigures();
  paintFigure = figures[figuresIndex];
  document.getElementById("currentFigure").innerHTML =
    currentFigure[figuresIndex];
}

function ApplyFigures() {
  figures = [
    "<div style='margin-left:clxpx; margin-top:clypx; position: absolute; display: block;width: 10px;height: 10px;background-color:" +
      currentBrush +
      ";border-radius: 50%;'></div>",
    "<div style='margin-left:clxpx; margin-top:clypx; position: absolute; display: block;width: 10px;height: 10px;background-color:" +
      currentBrush +
      ";'></div>",
    "<div style='margin-left:clxpx; margin-top:clypx; position: absolute; display: block;width: 0;height: 0;border-top: 5px solid transparent;border-left: 10px solid " +
      currentBrush +
      ";border-bottom: 5px solid transparent;'></div>",
    "<div style='margin-left:clxpx; margin-top:clypx; position: absolute; display: block;width: 0;height: 0; border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 10px solid " +
      currentBrush +
      ";'></div>",
  ];
  currentFigure = [
    "<div style='width: 70px;height: 70px;background-color:" +
      currentBrush +
      ";border-radius: 50%;'></div>",
    "<div style='width: 70px;height: 70px;background-color:" +
      currentBrush +
      ";'></div>",
    "<div style='width: 0;height: 0;border-top: 35px solid transparent;border-left: 75px solid " +
      currentBrush +
      ";border-bottom: 35px solid transparent;'></div>",
    "<div style='width: 0;height: 0; border-left: 35px solid transparent;border-right: 35px solid transparent;border-top: 75px solid " +
      currentBrush +
      ";'></div>",
  ];
}

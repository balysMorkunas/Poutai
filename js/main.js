var circle = document.getElementsByClassName('animation')[0];
var verticalContainer1 = document.getElementsByClassName('vertical-container1')[0];
var verticalContainer2 = document.getElementsByClassName('vertical-container2')[0];
var rectangles = document.getElementsByTagName('rect')
var strokeColors = ['#071122', '#b8b8ff', '#823329', '#b6f1b5']
circle.style.cursor = 'pointer';
circle.onclick = function () {
  for (i=0; i<rectangles.length; i++) {
    rectangles[i].style.stroke = strokeColors[Math.floor(Math.random() * strokeColors.length)];
    console.log(rectangles[i].style.stroke)
  }
  verticalContainer1.style.visibility = 'visible'
  verticalContainer2.style.visibility = 'visible'
}

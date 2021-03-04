
// ==================== PORTFOLIO ========================
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

//const myApp = {};


//Document ready: 
//$(function () {
//  myApp.init();
//});

let font
let points

function preload() {
  font = loadFont("./fonts/inconsolata-bold.ttf")
}

function setup() {
  createCanvas(1800, 600)

  points = font.textToPoints("Kristen Scheel", 380, 200, 140, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })
}

function draw() {
  const nl = 0.01

  background("#e0fddf")

  fill("#050748")
  noStroke()

  points.forEach(point => {

    const distance = createVector(point.x - mouseX, point.y - mouseY)
    const distortion = distance.mult(60 / distance.mag())

    circle(point.x + distortion.x, point.y + distortion.y, 5)
  })

  noFill()
  stroke("#050748")

  beginShape()
  points.forEach(point => {
    const distance = createVector(point.x - mouseX, point.y - mouseY)
    const distortion = distance.mult(60 / distance.mag())

    const nx = 40 * noise(nl * point.x, nl * point.y, nl * frameCount) - 20
    const ny = 40 * noise(nl * point.x, nl * point.y, nl * frameCount) - 20

    vertex(point.x + distortion.x + nx, point.y + distortion.y + ny)
  })
  endShape()
}
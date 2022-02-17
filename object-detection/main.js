function setup() {
  canvas = createCanvas(640, 420);
  canvas.center()
  objectDetector = ml5.objectDetector("cocossd", modelloded)
  document.getElementById("status").innerHTML = "status - detecting objects"
}
img = ""
status = ""
object = []
function preload() {
  img = loadImage('cskvsmi.jpg')
}
function draw() {
  image(img, 0, 0, 640, 420)
  if (status != "") {
    for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML = "Status : object detected"

      fill("red")
      persent = floor(object[i].confidence * 100)
      text(object[i].label + " " + persent + "%", object[i].x +15, object[i].y +15)
      noFill()
      stroke("black")
      rect(object[i].x, object[i].y, object[i].width, object[i].height)
    }
  }
}
function modelloded() {
  console.log("modelloded")
  status = true
  objectDetector.detect(img, gotresult)
}

function gotresult(error, result) {
  if (error) {
    console.log(error)
  } else {
    console.log(result)
    object = result
  }
}
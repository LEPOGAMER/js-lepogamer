function setup() {
  createCanvas(669, 518);
  background("#2273C5");
}

function draw() {
 stroke("#4DB0FF");
 fill("yellow");
 
  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 50, 75);
  }
}

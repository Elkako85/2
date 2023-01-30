var seed = Math.random() * 643.864;
var t;
var num, vNum;
var radius, mySize, margin;
var sizes = [];

let colors = [];
let colors0 = "fff800-0048d8-202020-242e30".split("-").map((a) => "#" + a);
let colors2 = "ff8b00-179b00-12177d-9bb5e9-7486af".split("-").map((a) => "#" + a);
let colors3 = "82d362-5c5190-6c6dd1-3d6966-0048d8".split("-").map((a) => "#" + a);
let colors4 = "8c75ff-c553d2-2dfd60-ff8b00-179b00".split("-").map((a) => "#" + a);
let colors5 = "f21252-8834f1-c4dd92-184fd3-f9fee2".split("-").map((a) => "#" + a);
let colors6 = "2E294E-0048d8-fff800-FFD400-D90368".split("-").map((a) => "#" + a);
let colors7 = "fefefe-fffffb-fafdff-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-179b00-2dfd60-ff8b00-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
let colors11 = "025159-0048d8-7AB8BF-C4EEF2-A67458".split("-").map((a) => "#" + a);
let colors12 = "fff800-506266-ff8b00-A3AB78-BDE038".split("-").map((a) => "#" + a);
let colors13 = "D96690-F28DB2-179b00-0048d8-fff800".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
  randomSeed(seed);
  // frameRate(50);
  // pixelDensity(5);
  mySize = min(windowWidth, windowHeight);
  margin = mySize / 100;
  createCanvas(mySize, mySize, WEBGL);
  color_setup1 = colors7;
  color_setup2 = random([colors4, colors5, colors6, colors8, colors11, colors2, colors12, colors3, colors13]);
  color_bg = "#202020";
  background(color_bg);
  // num = 50;
  num = int(random(40, 20));
  radius = mySize * 0.95;
  for (let a = 0; a < TAU; a += TAU / num) {
    sizes.push(random(0.2, 0.3))
  }
  t = 0;
}

function draw() {
  randomSeed(seed);
  background(color_bg);

  for (let i = 0; i < num; i++) {
    let a = (TAU / num) * i;
    let x = radius * sin(a + t) / random(5, 2) / 1.0;
    let y = radius * cos(a + t) / random(2, 5) / 1.0;
    v_planet[i] = createVector(x, y);
  }
  push();
  // translate(width / 2, height / 2);

  for (let q = 0; q < 1 / 5; q += random(0.01, 0.02)) {
    for (let j = 0; j < 1; j++) {
      
      rotateX(sin(-t) / 100 + q / random(75, 100) / 10);
      rotateY(sin(t) / 100 + q / random(75, 100) / 10);
      rotateZ(sin(-t) / 100 + q / random(75, 100) / 10);
      noFill();
      strokeWeight(2 * random(0.2, 0.6));
      stroke(random(color_setup2));

      beginShape();
      // curveVertex(v_planet[0].x, v_planet[0].y);
      for (let i = 0; i < num; i++) {
        let d = random(radius / 2, radius / 8);
        let x_plus = 0.005 * random(-d, d) / 1;
        let y_plus = 0.005 * random(-d, d) / 1;
        let z_plus = 0.005 * random(-d, d) / 1;
        curveVertex(v_planet[i].x + x_plus, v_planet[i].y + y_plus, random(-100, 100) + z_plus);
      }
      // curveVertex(v_planet[num - 1].x, v_planet[num - 1].y);
      endShape(CLOSE);

      for (let i = 0; i < num; i += 2) {
        let d = (1.5 + sin(t)) * random(radius / 2, radius / 4);
        let x_plus = 0.25 * random(-d, d) / 1;
        let y_plus = 0.25 * random(-d, d) / 1;
        let z_plus = 2 * random(-d, d) / 1;
        noStroke();
        // strokeWeight(random(0.1));
        fill(random(color_setup2));
        push();
        translate(v_planet[i].x + x_plus, v_planet[i].y + y_plus, z_plus);
        rotateX(t);
        rotateY(t);
        rotateZ(t);
        sphere(random(3));
        pop();
      }
    }
  }
  pop();

  t += 2 * random(0.001, 0.005);
}


function keyTyped() {
  if (key === "s" || key === "S") {
    saveCanvas("0701_Emotional lines_01_2022", "png");
  }
}

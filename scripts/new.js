import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import "../style.css";

const whiteborder = "./images/white border.jpg";
const fontstyle = "./Open Sans Condensed_Bold.json"
//INITIALIZATION...
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  powerPreference:"high-performance",
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
window.renderer = renderer;

//CAMERA...
camera.position.set(0, 5, 20);

//LIGHT...
const light = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);

//TEXT...
const loader = new FontLoader();
//main text : pratham shah \n developer
loader.load(fontstyle, function (font) {
  const color = 0xffffff;

  const matDark = new THREE.LineBasicMaterial({
    color: color,
  });

  const message = "PRATHAM SHAH\n     DEVELOPER";

  const shapes = font.generateShapes(message, 10);

  const geometryS = new THREE.ShapeGeometry(shapes);

  geometryS.computeBoundingBox();

  const xMid =
    -0.5 * (geometryS.boundingBox.max.x - geometryS.boundingBox.min.x);

  geometryS.translate(xMid, 0, 0);

  const text = new THREE.Mesh(geometryS, matDark);
  text.position.z = -60;
  text.position.y = 28;
  scene.add(text);
});
loader.load(fontstyle, function (font) {
  const color = 0xffffff;

  const matDark = new THREE.LineBasicMaterial({
    color: color,
  });

  const message = "SKILLS AND TOOLS";

  const shapes = font.generateShapes(message, 10);

  const geometryS = new THREE.ShapeGeometry(shapes);

  geometryS.computeBoundingBox();

  const xMid =
    -0.5 * (geometryS.boundingBox.max.x - geometryS.boundingBox.min.x);

  geometryS.translate(xMid, 0, 0);

  const text = new THREE.Mesh(geometryS, matDark);
  text.position.set(6.5, -188, -25);
  text.rotateX(Math.PI);
  text.rotateY(-Math.PI/30)
  text.rotateZ(Math.PI);

  scene.add(text);
});

//projects section
loader.load(fontstyle, function (font) {
  const color = 0xffffff;

  const matDark = new THREE.LineBasicMaterial({
    color: color,
  });

  const message = "PROJECTS";

  const shapes = font.generateShapes(message, 10);

  const geometryS = new THREE.ShapeGeometry(shapes);

  geometryS.computeBoundingBox();

  const xMid =
    -0.5 * (geometryS.boundingBox.max.x - geometryS.boundingBox.min.x);

  geometryS.translate(xMid, 0, 0);

  const text = new THREE.Mesh(geometryS, matDark);
  text.position.set(-180, -170, -340);

  text.rotateY(Math.PI / 1.6);
  scene.add(text);
});

//contact section
loader.load(fontstyle, function (font) {
  const color = 0xffffff;

  const matDark = new THREE.LineBasicMaterial({
    color: color,
  });

  const message = "CONTACT";

  const shapes = font.generateShapes(message, 10);

  const geometryS = new THREE.ShapeGeometry(shapes);

  geometryS.computeBoundingBox();

  const xMid =
    -0.5 * (geometryS.boundingBox.max.x - geometryS.boundingBox.min.x);

  geometryS.translate(xMid, 0, 0);

  const text = new THREE.Mesh(geometryS, matDark);
  
  text.position.set(-30, -170, -1080);
  text.rotateX(Math.PI);
  text.rotateZ(Math.PI);  
  scene.add(text);
});

//WAVY PLANES...
const textureP = new THREE.TextureLoader().load(whiteborder);
textureP.wrapS = THREE.RepeatWrapping;
textureP.wrapT = THREE.RepeatWrapping;
textureP.repeat.x = 10;
textureP.repeat.y = 10;

const geometryP = new THREE.PlaneGeometry(60, 30, 20, 20);
const materialP = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: textureP,
  opacity: 0,
});
const plane = new THREE.Mesh(geometryP, materialP);
const left = new THREE.Mesh(geometryP, materialP);
const right = new THREE.Mesh(geometryP, materialP);

plane.position.set(0, 2, -60);
left.position.set(-60, 2, -60);
right.position.set(60, 2, -60);
plane.name = left.name = right.name = "plane";

plane.rotateX(-Math.PI / 2);
left.rotateX(-Math.PI / 2);
right.rotateX(-Math.PI / 2);

scene.add(plane, left, right);

//BASE PLANE...
const texture = new THREE.TextureLoader().load(whiteborder);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 45;
texture.repeat.y = 45;
const geometry = new THREE.PlaneGeometry(300, 140);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: texture,
});
const base = new THREE.Mesh(geometry, material);
base.position.set(0, -0.09, 0);
base.rotateX(-Math.PI / 2);
scene.add(base);

//CUBES...
var cubes = [];
const texture_cube = new THREE.TextureLoader().load(whiteborder);
const geometry_cube = new THREE.BoxGeometry(30, 30, 30);
const material_cube = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: texture_cube,
});
function addCubes() {
  const cube = new THREE.Mesh(geometry_cube, material_cube);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(360));
  cube.position.set(x * 4, y * 3, z - 150);
  scene.add(cube);
  cubes.push(cube);
}
Array(55).fill().forEach(addCubes);

//STARS...
const stars = [];
const geometry_star = new THREE.SphereGeometry(0.65, 24, 24);
const material_star = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
function addStar() {
  const star = new THREE.Mesh(geometry_star, material_star);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(1200));
  star.position.set(x, y, z);
  scene.add(star);
  stars.push(star);
}
Array(13000).fill().forEach(addStar);

//CLOCK...
var clock = new THREE.Clock();

const curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 5, 10),
    new THREE.Vector3(0, 5, 130),
    new THREE.Vector3(0, -170, 130),
    new THREE.Vector3(0, -170, -160),
    new THREE.Vector3(-150, -170, -290),
    new THREE.Vector3(-120, -170, -360),
    new THREE.Vector3(-30, -170, -400),
    new THREE.Vector3(-30, -170, -490),
    new THREE.Vector3(-30, -170, -590),
    new THREE.Vector3(-30, -170, -1200),

  ],
  false,
  "centripetal"
);

const points = curve.getPoints(1000);
const Dgeometry = new THREE.BufferGeometry().setFromPoints(points);

const Dmaterial = new THREE.LineBasicMaterial({
  color: 0xff0000,
  visible: false,
});

const curveObject = new THREE.Line(Dgeometry, Dmaterial);
curveObject.position.set(0, 40, 60);
scene.add(curveObject);
//MOVING CAMERA ON SCROLL...

function updateCamera() {
  const time = Math.abs(document.body.getBoundingClientRect().top);
  const looptime = 50 * 150;
  const t = (time % looptime) / looptime;
  const t2 = ((time + 0.2) % looptime) / looptime;

  const temp = curve.getPointAt(t);
  const temp2 = curve.getPointAt(t2);
  // console.log(temp2);

  camera.position.copy(temp);
  camera.lookAt(temp2);

  camera.rotateY(-Math.PI);
}
document.body.onscroll = updateCamera;
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
}
document.body.onresize = onWindowResize;

//ANIMATING...
function animate() {
  requestAnimationFrame(animate);
  render();
}
animate();

function render() {
  //rotating cubes...
  cubes.forEach((cube) => {
    cube.rotation.x += 0.008;
    cube.rotation.y += 0.004;
    cube.rotation.z += 0.004;
  });

  //waves in the back...
  let time = clock.getElapsedTime();
  const vertices = plane.geometry.getAttribute("position").array;
  for (let i = 2; i < vertices.length; i += 3) {
    const multipler = (vertices[i - 2] + 2.5) / 5;

    const wave1 = 0.8 * Math.sin(0.5 * vertices[i - 2] + time * 2);
    const wave2 = 0.2 * Math.sin(2 * vertices[i - 2] + time * 3);

    vertices[i] = (wave1 + wave2) * multipler;
  }
  plane.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}



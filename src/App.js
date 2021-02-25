import "./styles.css";
import * as THREE from "three";
import { Scene } from "three";
import "./geometry.js";

const scene = new Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export default function App() {
  return (
    <div className="App">
      <h1>Three js</h1>
      <div> geometry </div>
    </div>
  );
}

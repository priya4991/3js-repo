// Option 1: Import the entire three.js core library.
import { BasicCube } from "./samples/basiccube";
import { SimpleLine } from "./samples/simpeline"; 

let basicCube = new BasicCube();
basicCube.initialize();
basicCube.animate();

let simpleLine = new SimpleLine();
simpleLine.initialize();
simpleLine.animate();
import * as THREE from 'three';

export class SimpleLine {
    scene: any;
    camera: any;
    renderer: any;
    line: any;

    initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
        

        const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
this.line = new THREE.Line(geometry, material);

this.scene.add(this.line);
        this.camera.position.set(0,0,100);
        this.camera.lookAt(0,0,0);
    }


    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

}
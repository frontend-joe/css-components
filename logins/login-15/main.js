const vert = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const frag = `
precision highp float;

vec4 abyssColor = vec4(0.0, 0.0, 0.0, 1.0);
vec4 tunnelColor = vec4(1.0, 1, 1, 1.0);

uniform float time;
uniform vec2 resolution;

void main() {

    vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y * 0.6;
    
    float r = length(uv);
    float y = fract(r / 0.005 / (r - 0.01) + time);
    y = smoothstep(0.01, 4.0, y);
   
    float x = length(uv);
    x = smoothstep(0.5, 0.01, x);

    gl_FragColor = mix(tunnelColor, abyssColor, x) * y;
}
`;

let scene, camera, renderer;
let uniforms, geometry, material, mesh;
let startTime = Date.now();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  geometry = new THREE.PlaneGeometry(2, 2);

  uniforms = {
    time: { value: 0.0 },
    resolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
  };

  material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vert,
    fragmentShader: frag,
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  const bg = document.querySelector(".bg");

  renderer.setSize(bg.clientWidth, bg.clientHeight);

  uniforms.resolution.value.set(bg.clientWidth, bg.clientHeight);

  bg.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  let elapsedMilliseconds = Date.now() - startTime;
  material.uniforms.time.value = elapsedMilliseconds / 1000;
  renderer.render(scene, camera);
}

function resize() {
  const bg = document.querySelector(".bg");

  camera.aspect = bg.clientWidth / bg.clientHeight;
  camera.updateProjectionMatrix();

  material.uniforms.resolution.value.set(bg.clientWidth, bg.clientHeight);

  renderer.setSize(bg.clientWidth, bg.clientHeight);
}

window.addEventListener("resize", resize);

init();
animate();

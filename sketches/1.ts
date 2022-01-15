import { P5Instance } from 'react-p5-wrapper';

export function sketch(p5: P5Instance) {
  p5.setup = () => {
    p5.createCanvas(600, 400, p5.WEBGL);
    p5.noStroke();
  };

  p5.draw = () => {
    p5.background(3);
    p5.lights();
    p5.ambientMaterial(200, 200, 200);
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.02);
    p5.rotateY(p5.frameCount * 0.05);
    p5.plane(200);
    p5.pop();
  };
}

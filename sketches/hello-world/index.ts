import { P5Instance } from 'react-p5-wrapper';

export const sketch = (p: P5Instance) => {
  const [W, H] = [window.innerWidth - 20, window.innerHeight - 20];

  p.setup = () => {
    p.createCanvas(W, H);
    p.angleMode(p.RADIANS);
  };

  p.draw = () => {
    p.background(220);

    const c1 = p.map(p.constrain(p.mouseX, 0, W), 0, W, 0, 255);
    const c2 = p.map(p.constrain(p.mouseY, 0, H), 0, H, 0, 255);
    p.fill(c1, c2, 255);
    p.strokeWeight(4);
    if (p.mouseIsPressed) {
      p.stroke(255);
    } else {
      p.stroke(0);
    }

    p.textSize(H / 3);
    p.textAlign(p.CENTER, p.CENTER);
    p.text('Hello', p.mouseX, p.mouseY);
  };
};

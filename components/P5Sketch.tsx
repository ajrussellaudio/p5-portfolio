import { ReactP5Wrapper } from 'react-p5-wrapper';

export type P5SketchProps = {
  id: string;
};

export function P5Sketch({ id }: P5SketchProps) {
  if (!id) {
    return null;
  }

  const { sketch } = require(`../sketches/${id}`);

  return <ReactP5Wrapper sketch={sketch} />;
}

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { P5SketchProps } from '../../components/P5Sketch';

const P5Sketch = dynamic<P5SketchProps>(
  import('../../components/P5Sketch').then(mod => mod.P5Sketch),
  { ssr: false },
);

function SketchPage() {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <P5Sketch id={id as string} />
    </>
  );
}

export default SketchPage;

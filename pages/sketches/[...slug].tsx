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
    query: { slug },
  } = useRouter();

  const path = Array.isArray(slug) ? slug.join('/') : slug;

  return <P5Sketch id={path} />;
}

export default SketchPage;

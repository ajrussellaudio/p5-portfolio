import { globby } from 'globby';
import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

function prettySketchName(path: string) {
  return path.replace('sketches/', '').replace(/(\/index)?.ts/, '');
}

export default function IndexPage({ paths }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Hello 👋</h1>
      <ul>
        {paths.map(path => (
          <li key={path}>
            <Link href={`/${path}`}>
              <a>{prettySketchName(path)}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p></p>
    </>
  );
}

export const getServerSideProps = async () => {
  const paths = await globby(['sketches/**/index.ts', 'sketches/*.ts']);

  return { props: { paths } };
};

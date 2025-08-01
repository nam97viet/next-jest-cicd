import { use } from 'react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params);
  return <>
  <h1>Slug: {slug}</h1>
  <p>HoleText</p>
  <p>Welcome to Houston</p>
  </>;
}

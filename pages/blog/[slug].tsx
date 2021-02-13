import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import unified from 'unified';
import markdownParser from 'remark-parse';
import emojiTransform from 'remark-emoji';

import Navigation from '@/components/Navigation';
import TreeToJSX from '@/components/TreeToJSX';
import SaveOrEditIcon from '@/components/SaveOrEditIcon';
import { getPostBySlug, getAllPosts } from '@/lib/api';

type Props = {
  post: {
    title: string;
    date: string;
    content: string;
    slug: string;
  }
};

export default function BlogPost({ post }: Props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      {process.env.NODE_ENV === 'development' && router.pathname.split('/')[2] !== 'edit' && (
        <SaveOrEditIcon
          icon="edit"
          onClick={() => router.push(`/blog/edit/${router.query.slug}`)}
        />
      )}
      <Navigation postSlug={post.slug} />
      <main>
        <article>
          <h1 style={{textAlign: 'center', margin: '2em', marginBottom: '0.2em'}}>{post.title}</h1>
          <h3 style={{fontSize: '0.7em', margin: 0, textAlign: 'center'}}>{formatDate(post.date)}</h3>
          <BlogContent content={post.content} />
        </article>
      </main>
    </div>
  );
}

// TODO Verify this is only run once for this static page
const BlogContent = ({ content }: { content: string; }) => {
  let tree = unified().use(markdownParser).parse(content);
  tree = unified().use(emojiTransform).runSync(tree);

  return (
    <BlogContentContainer>
      <TreeToJSX tree={tree} />
    </BlogContentContainer>
  );
};

const BlogContentContainer = styled.div`
  font-size: 1.2em;
  line-height: 1.4em;
  letter-spacing: 0.01em;
  overflow-wrap: break-word;
  padding: 1.1em;
  margin: 0 auto;
  & > *:not(pre) {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
  & > pre {
    width: 93vw;
    max-width: 1100px;
  }
`;

type Params = { slug: string; };

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'content', 'slug']);

  return {
    props: {
      post: {
        ...post,
      }
    }
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: false,
  }
};

function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return `${date.toLocaleString('default', {month:'long'})} ${date.getDate()}, ${date.getFullYear()}`;
}

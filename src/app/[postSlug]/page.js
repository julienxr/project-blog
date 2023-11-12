import React from 'react';

import BlogHero from '@/components/BlogHero';
import CustomMDX from '@/components/CustomMDX';

import COMPONENT_MAP from '@/helpers/mdx-components';
import { BLOG_TITLE } from '@/constants';

import { loadBlogPost } from '@/helpers/file-helpers';
import styles from './postSlug.module.css';


export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug)

  return {
    title: `${frontmatter.title} · ${BLOG_TITLE}`,
    description: frontmatter.abstract
  }
}

const BlogPost = async ({ params }) => {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <CustomMDX
        source={content}
        components={COMPONENT_MAP}
      />
    </article>
  );
}

export default BlogPost;

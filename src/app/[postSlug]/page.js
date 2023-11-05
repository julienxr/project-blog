import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

import { loadBlogPost } from '@/helpers/file-helpers';

import CustomMDX from '@/components/CustomMDX';

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug)

  return {
    title: frontmatter.title,
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
      <CustomMDX source={content} />
    </article>
  );
}

export default BlogPost;

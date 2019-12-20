import React from 'react';
import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/Insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <Insta />
        {posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </Layout>
    </>
  );
};

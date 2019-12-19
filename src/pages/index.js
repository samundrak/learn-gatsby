import React from 'react';
import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <div>Hello Frontend Masterssssssssssssssss!</div>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Layout>
  );
};

import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import ReadLink from '../components/read-link';

const PostTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <h1
        css={css`
          font-size: 0.75rem;
        `}
      >
        Post title
      </h1>
      <pre>{JSON.stringify(pageContext)}</pre>
      <p>Posted by (author)</p>
      <p>Post body goes here</p>
      <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
  );
};
export default PostTemplate;

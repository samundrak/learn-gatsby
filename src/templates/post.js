import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1
        css={css`
          font-size: 0.75rem;
        `}
      >
        {post.frontmatter.title}{' '}
      </h1>
      <p>Posted by (author)</p>
      <p>Post body goes here</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
  );
};
export default PostTemplate;

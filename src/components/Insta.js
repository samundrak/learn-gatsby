import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <React.Fragment>
      <h2>Insta posts</h2>
      <div>
        {instaPhotos.map(photo => {
          return (
            <a
              key={photo.id}
              href={`https://instagram.com/p/${photo.id}`}
              css={css`
          box-shadow:0;
          display: block;
          margin: 0.5rem; 
          max-width: calc(33% - 1rem)
          width: 120px;
          transition: 200ms box-shadow linearGradient;
          :focus,
          :hover {
              box-shadow: 0 2px 14px #22222244;
              z-index: 10;
          }
          `}
            >
              <Image fluid={photo.fluid} />
            </a>
          );
        })}
      </div>
      <a href={`https://instagram.com/${username}`}>See more on Instagram</a>
    </React.Fragment>
  );
};
export default Insta;

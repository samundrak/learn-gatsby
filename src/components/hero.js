import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url(images/nicole-geri-ohK_uJJm2G8-unsplash.jpg);
  background-position: top 20% center;
  background-size: cover;
`;
const Hero = () => {
  return (
    <ImageBackground>
      <h1>Samundra</h1>
      <p>O hello</p>
    </ImageBackground>
  );
};
export default Hero;

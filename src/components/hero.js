import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
`;
const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "nicole-geri-ohK_uJJm2G8-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  console.log(image);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <h1>Samundra</h1>
      <p>O hello</p>
    </ImageBackground>
  );
};
export default Hero;

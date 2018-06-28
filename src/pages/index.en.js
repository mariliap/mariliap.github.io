import React from 'react';
import Index from '../components/IndexPage';
import graphql from 'graphql';

export default (props) => <Index {...props} />;

export const pageQuery = graphql`
  query IndexEnQuery {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } },
        fields: { langKey: { regex: "/(en|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date
          },
          fields{
            slug,
            langKey
          },
          excerpt
        }
      }
    }
    site{
      siteMetadata{
        resume{
          pinnedTechnologies{
            name,
            tags,
            level,
            years,
            img
          }
          games{
            name,
            link,
            img
          }
        }
      }
    }
  }
`;

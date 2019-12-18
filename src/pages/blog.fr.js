import React from 'react';
//import Blog from './_blog';
import Blog from '../components/BlogPage';
import graphql from 'graphql';

export default (props) => <Blog {...props} />;

export const pageQuery = graphql`
  query BlogFrQuery {
   allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } },
        fields: { langKey: { regex: "/(fr|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            tags,
            date
          },
          fields{
            slug,
            langKey,
            tagSlugs{
              tag,
              link
            }
          },
          excerpt
        }
      }
    }
  }
`;

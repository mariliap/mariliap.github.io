import React from 'react';
//import Blog from './_blog';
import Blog from '../components/BlogPage';
import {graphql} from 'gatsby';
import Layout from '../layouts/_layout';
import messages from '../data/messages/en';

export default (props) => (
  <Layout {...props} i18nMessages={messages}>
    <Blog {...props} />
  </Layout>);

export const pageQuery = graphql`
  query BlogEnQuery {
   allMarkdownRemark(
      limit: 2000
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
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
        author {
          name
          homeCity
          homeCityLink
          email
          defaultLink
        }
        sourceCodeLink
        menu {
          label
          link
          slug
          items{
            label
            slug
          }
        }
        resume{
          pinnedTechnologies{
            name,
            tags,
            level,
            years,
            img
          }
          projects{
            name,
            link,
            img
          }
        }
      }
    }
  }
`;

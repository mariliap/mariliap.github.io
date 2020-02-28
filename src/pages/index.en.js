import React from 'react';
import Index from '../components/IndexPage';
import {graphql} from 'gatsby';
import Layout from '../layouts/_layout';
import messages from '../data/messages/en';
import theme from '../themes/theme';

export default (props) => (
  <Layout {...props} i18nMessages={messages}>
    <Index {...props} />
  </Layout>);

export const pageQuery = graphql`
  query IndexEnQuery {
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

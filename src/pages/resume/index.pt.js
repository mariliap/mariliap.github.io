import React from 'react';
import TechnologiesPage from '../../components/resume/TechnologiesPage';
import {graphql} from 'gatsby';

export default (props) =>
  <TechnologiesPage
    {...props}
  />;

export const pageQuery = graphql`
  query ResumeTechnologiesPt {
    site {
      siteMetadata {
        resume {
          menu {
            label
            link
          }
          technologies {
            name
            tags
            level
            years
            img
            needWhiteBg
            link
          }
        }
      }
    }
  }
`;

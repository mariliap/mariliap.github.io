import React from 'react';
import LanguagesPage from '../../../components/resume/LanguagesPage';
import graphql from 'graphql';

export default (props) =>
  <LanguagesPage
    {...props}
  />;

export const pageQuery = graphql`
  query ResumeLanguagesPt {
    site {
      siteMetadata {
        resume {
          menu {
            label
            link
          }
          languages{
            name {
              pt
            }
            level
            key
          }
        }
      }
    }
  }
`;

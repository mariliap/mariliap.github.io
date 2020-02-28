import React from 'react';
import EducationsPage from '../../../components/resume/EducationsPage';
import {graphql} from 'gatsby';

export default (props) =>
  <EducationsPage
    {...props}
  />;

export const pageQuery = graphql`
  query ResumeEducationEn {
    site {
      siteMetadata {
        resume {
          menu {
            label
            link
          }
          educations {
            name
            subject {
              en
            }
            needWhiteBg
            link
            fullName
            years
            img
          }
        }
      }
    }
  }
`;

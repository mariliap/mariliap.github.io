import React from 'react';
import JobsAndClientsPage from '../../../components/resume/JobsAndClientsPage';
import {graphql} from 'gatsby';

export default (props) =>
  <JobsAndClientsPage
    {...props}
  />;

export const pageQuery = graphql`
  query ResumeJobsAndClientsFr {
    site {
      siteMetadata {
        resume {
          menu {
            label
            link
          }
          jobsAndClients{
            name
            slug
            date {
              start
              end
            },
            img,
            link,
            description{
              pt
              en
              fr
            },
            projects {
              name
              description
              link
            },
            technologies {
              name
              level
              img
              link
              needWhiteBg
            },
            needWhiteBg
          }
        }
      }
    }
  }
`;

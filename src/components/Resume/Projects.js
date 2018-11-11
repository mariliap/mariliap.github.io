import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Link from '../Link';
import {getJobUrl} from '../../data/resume/getJobUrl';

const Header = styled.header`
  padding-bottom: ${({ theme }) => theme.scale(1)};
`;

const Li = styled.li`  
  padding-top: ${props => props.theme.resume.projetos.li.paddingTop};
  padding-bottom: ${props => props.theme.resume.projetos.li.paddingBottom};
  display: ${props => props.theme.resume.projetos.li.display};
  text-align: ${props => props.theme.resume.projetos.li.textAlign};
`;

const H1 = styled.h1`
  font-size: ${props =>  props.theme.resume.projetos.h1.fontSize};
  margin: ${props =>  props.theme.resume.projetos.h1.margin};
  padding: ${props =>  props.theme.resume.projetos.h1.padding};
  text-align: ${props =>  props.theme.resume.projetos.h1.textAlign};
  color: ${props =>  props.theme.resume.projetos.h1.color};
`;


const Projects = ({ projects, job, langKey }) => {
  return (
    <section>
      <Header>
        <FormattedMessage id="resume.jobsAndClients.projects">
          {(txt) => (
            <H1>
              {txt}
            </H1>
          )}
        </FormattedMessage>
      </Header>
      <ul>
        {projects.map(project => (
          <Li>
            <Link to={getJobUrl(langKey, job.slug, project.slug)}>
              {project.name}
            </Link>
          </Li>
        ))}
      </ul>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  job: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired,
  langKey: PropTypes.string.isRequired
};

export default Projects;

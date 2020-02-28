import React from 'react';
import PropTypes from 'prop-types';
import H2 from '../commons/H2';
import H1 from '../commons/H1';
import { injectIntl, FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import JobDates from './JobDates';
import styled from 'styled-components';
import Technologies from './Technologies';
import Projects from './Projects';
import ResumeContainer from './ResumeContainer';
import SectionBlock from '../SectionBlock';
import SectionContent from '../SectionContent';
import Texture from '../layout/Texture.js'

const Header = styled.header`
  padding-bottom: ${({ theme }) => theme.scale(1)};
`;

const getBreadCrumb = (langKey) => [
  {
    link: `/${langKey}/resume/jobs-and-clients/`,
    label: 'resume.jobsAndClients'
  }
];

const Job = (props) => {
  const {job} = props.pageContext;
  const {menu} = props.data.site.siteMetadata.resume;

  const description = job.description;
  const langKey = props.intl.locale;

  return (
	  <div>
		  <SectionBlock className="posts" backgroundColor={({ theme }) => theme.colors.blueishGreyPaletteSand} >
			  <Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={3}/>
			  <SectionContent>
          <ResumeContainer menu={menu} selectedPage="/resume/jobs-and-clients/" breadCrumb={getBreadCrumb(langKey)}>
            <FormattedMessage id="resume">
              {(resume) => (
                <Helmet
                  title={`${resume} - ${job.name} - ${job.description}`}
                  meta={[{ name: 'description', content: description }]}
                />
              )}
            </FormattedMessage>
            <Header>
              <H2>{job.name}</H2>
            </Header>
            <JobDates {...job.date} />
	          <H1>{description[langKey]} aa</H1>
            <Projects
              projects={job.projects}
              langKey={langKey}
              job={job}
            />
            <Technologies technologies={job.technologies} />
          </ResumeContainer>
			  </SectionContent>
		  </SectionBlock>
	  </div>
  );
};

Job.propTypes = {  
  intl: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    job: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired,
  data: PropTypes.object.isRequired
};

export default injectIntl(Job);

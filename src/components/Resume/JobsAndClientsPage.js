import React from 'react';
import PropTypes from 'prop-types';
import ResumeContainer from './ResumeContainer';
import { FormattedMessage } from 'react-intl';
import H2 from '../commons/H2';
import JobsAndClient from './JobsAndClient';
import SectionBlock from '../SectionBlock';
import SectionContent from '../SectionContent';
import Texture from '../layout/Texture.js'
import Helmet from 'react-helmet';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const JobsAndClientsPage = (props) => {
  const { menu, jobsAndClients } = props.data.site.siteMetadata.resume;
  
  return (
	  <div>
		  <SectionBlock className="posts" backgroundColor={({ theme }) => theme.colors.blueishGreyPaletteSand} >
			  <Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={3}/>
			  <SectionContent>
          <ResumeContainer  menu={menu} selectedPage="/resume/jobs-and-clients/">
            <FormattedMessage id="resume.jobsAndClients">
              {(txt) => (
                <header>
                  <Helmet
                    title={txt}
                    meta={[{ name: 'description', content: txt }]}
                  />
                  <H2>
                    {txt}
                  </H2>
                </header>
              )}
            </FormattedMessage>
            <VerticalTimeline>
              {
                jobsAndClients.map(job => (
                  <JobsAndClient {...job} />
                ))
              }
            </VerticalTimeline>
          </ResumeContainer>
		    </SectionContent>
	    </SectionBlock>
	  </div>
  );
};

JobsAndClientsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default JobsAndClientsPage;

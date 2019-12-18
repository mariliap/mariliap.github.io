import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { getJobUrl } from '../../data/resume/getJobUrl';
import Link from '../commons/Link';
import JobDates from './JobDates';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FaGithub from 'react-icons/lib/fa/github';

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.scale(3)};
  padding-top: ${({ theme }) => theme.scale(-4)};
`;

const Li = styled.li`
  margin-top: ${({ theme }) => theme.scale(0)};
  margin-bottom: ${({ theme }) => theme.scale(0)};

  padding-top: ${({ theme }) => theme.scale(0)};
  padding-bottom: ${({ theme }) => theme.scale(0)};
`;

const WorkIcon = styled(FaGithub)`
  font-size: ${({ theme }) => theme.scale(4)};
  display: inline-block;
  vertical-align: middle;
`;

const JobsAndClients = (props) => {
  const url = getJobUrl(props.intl.locale, props.slug);
  console.log(props.date)
  return (

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={<JobDates {...props.date} />}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <Link to={url}>
        <section>
          <header>
            <JobDates {...props.date} />
            <H3>{props.name}</H3>
          </header>
        </section>
      </Link>
    </VerticalTimelineElement>
    
  );
};

JobsAndClients.propTypes = {
  date: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(JobsAndClients);

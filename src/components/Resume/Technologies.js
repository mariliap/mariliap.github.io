import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../commons/Link';
import H2 from '../commons/H2';
import Technology from './Technology';
import Error from '../Error';
import { FormattedMessage } from 'react-intl';
import H1 from "../commons/H1";

const SectionTop = styled.div`
    margin-bottom: ${props => props.theme.blog.list.ul.margin};
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 1rem 0 0 0;
  padding: 0;
`;

const H0 = styled(H1)`
  color: ${props => props.theme.blog.post.header.time.color};
`;

const Technologies = (props) => {
  const noTechnologies = props.technologies && props.technologies.length > 0
    ? null
    : (
      <FormattedMessage id="resume.technologies.noTechnologies">
        {(txt) => (
          <Error>
            {txt}
          </Error>
        )}
      </FormattedMessage>
    );

  return (
    <section>
      <SectionTop>
        <Link to={`/${props.langKey}/resume/`}>
          <FormattedMessage id="resume.bio">
            {(txt) => (
              <H2>{txt}</H2>
            )}
          </FormattedMessage>
          <FormattedMessage id="resume.bio.more">
            {(txt) => (
              <H0>{txt}</H0>
            )}
          </FormattedMessage>
        </Link>
      </SectionTop>
      <Ul>
        {
          props.technologies.map((technology, i) =>
            <Technology
              key={i}
              {...technology}
            />
          )
        }
      </Ul>
      {noTechnologies}
    </section>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.array.isRequired
};

export default Technologies;

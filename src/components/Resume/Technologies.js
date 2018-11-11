import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from '../H2';
import Technology from './Technology';
import Error from '../Error';
import { FormattedMessage } from 'react-intl';
import H1 from "../H1";

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

const Technologies = ({ technologies }) => {
  const noTechnologies = technologies && technologies.length > 0
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
      <header>
        <FormattedMessage id="resume.technologies">
          {(txt) => (
            <H0>
              {txt}
            </H0>
          )}
        </FormattedMessage>
      </header>
      <Ul>
        {
          technologies.map((technology, i) =>
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

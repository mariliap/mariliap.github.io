import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from '../H2';
import Code from './Code';
import { FormattedMessage } from 'react-intl';

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 1rem 0 0 0;
  padding: 0;
`;

const Codes = ({ projects }) => {
  return (
    <section>
      <header>
        <FormattedMessage id="resume.projects">
          {(txt) => (
            <H2>
              {txt}
            </H2>
          )}
        </FormattedMessage>
      </header>
      <Ul>
        {
	        projects.map((game, i) =>
            <Code
              key={i}
              {...game}
            />
          )
        }
      </Ul>
    </section>
  );
};

Codes.propTypes = {
  games: PropTypes.array.isRequired
};

export default Codes;

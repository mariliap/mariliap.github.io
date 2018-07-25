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

const Codes = ({ games }) => {
  return (
    <section>
      <header>
        <FormattedMessage id="resume.games">
          {(txt) => (
            <H2>
              {txt}
            </H2>
          )}
        </FormattedMessage>
      </header>
      <Ul>
        {
          games.map((game, i) =>
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

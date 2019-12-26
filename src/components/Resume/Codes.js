import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../commons/Link';
import H2 from '../commons/H2';
import Code from './Code';
import { FormattedMessage } from 'react-intl';

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

const Codes = (props) => {
  return (
    <section>
      <SectionTop>
        <Link to={`/${props.langKey}/projects/`}>
          <FormattedMessage id="resume.projects">
            {(txt) => (
              <H2>{txt}</H2>
            )}
          </FormattedMessage>
        </Link>
      </SectionTop>
      <Ul>
        {
	        props.projects.map((game, i) =>
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

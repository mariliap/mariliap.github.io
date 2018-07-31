import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/Link';
import kebabCase from 'lodash/kebabCase';
import H1 from '../../components/H1';
import styled, {css} from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Texture from '../../components/Texture.js';
import { Scrollbars } from 'react-custom-scrollbars';

const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`;
const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${ css(...args) }
  }
`;
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`;

const SectionBlock = styled.section`
  background-color:  ${props => props.backgroundColor};
  
  ${small`
    padding: 10px 10px 10px 10px;
  `};
  ${medium`
    padding: 20px 80px 20px 80px;
    min-height: 100vh;
  `};
  ${large`
    padding: 40px 120px 40px 120px;
    min-height: 100vh;
  `};
   flex: 1;
   display: flex;
   align-items: center;
   position: relative;
`;

const SectionContent = styled.div`
  ${small`
    padding: ${props => props.theme.spacing.half} ${props => props.theme.spacing.half};
  `}
  ${medium`
    padding: ${props => props.theme.spacing.single} ${props => props.theme.spacing.double};
  `}
  ${large`
    padding: ${props => props.theme.spacing.single} ${props => props.theme.spacing.double};
  `}
  position: relative;
  z-index: 10;
  background-color: ${props => props.theme.colors.blueishGrey};
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  border-left: 40px solid #eeeeee;
  width: 100%;  
`;


const Nav = styled.nav`
  margin-top: ${({ theme }) => theme.scale(-1)};
  margin-bottom: ${({ theme }) => theme.scale(6)};
  column-count: 2;

  @media (min-width: 450px) {
    column-count: 3;
  }

  @media (min-width: 650px) {
    column-count: 4;
  }
`;

const Li = styled.li`
  font-size: ${({ theme }) => theme.scale(1)};
  padding: ${({ theme }) => theme.scale(-1)} 0;
`;

const TagsPageRoute = (props) => {
  const allTags = props.data.allMarkdownRemark.group;
	const backgroundColor = ({ theme }) => theme.colors.blueishGrey;

  return (
	  <div>
      <SectionBlock  backgroundColor={({ theme }) => theme.colors.blueishGreyPaletteGreen} >
        <Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={3}/>
	      <SectionContent>
		      <FormattedMessage id="tags">
			      {(txt) => (
				      <header>
					      <Helmet
						      title={txt}
						      meta={[{ name: 'description', content: txt }]}
					      />
					      <H1>
						      {txt}
					      </H1>
				      </header>
			      )}
		      </FormattedMessage>
		      <Scrollbars style={{ height: '50vh' }} >
			      <Nav>
				      <ul>
					      {allTags.map(tag =>
						      <Li key={tag.fieldValue}>
							      <Link
								      style={{
									      textDecoration: 'none',
								      }}
								      to={`${props.pathContext.langKey}/tags/${kebabCase(tag.fieldValue)}/`}
							      >
								      {tag.fieldValue} ({tag.totalCount})
							      </Link>
						      </Li>
					      )}
				      </ul>
			      </Nav>
		      </Scrollbars>
	      </SectionContent>
      </SectionBlock>
    </div>
  );
};

TagsPageRoute.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object
};

export default TagsPageRoute;

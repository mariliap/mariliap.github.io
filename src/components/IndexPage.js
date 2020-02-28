import React from 'react';
import PropTypes from 'prop-types';
import Posts from './blog/Posts';
import SocialLinks from './SocialLinks';
import Welcome from './Welcome';
import BtnLink from './commons/BtnLink';
import SectionBlock from './SectionBlock';
import SectionContent from './SectionContent';
import Technologies from './resume/Technologies';
import Codes from './resume/Codes';
import { FormattedMessage } from 'react-intl';
import styled, {css}  from 'styled-components';

import Texture from './layout/Texture.js';



const spacing = {
  quarter: '10px',
  half: '20px',
  single: '40px',
  double: '80px'
};

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



const SectionContents = styled.div`
  ${small`
    padding: ${spacing.half} ${spacing.half};
  `}
  ${medium`
    padding: ${spacing.single} ${spacing.double};
  `}
  ${large`
    padding: ${spacing.single} ${spacing.double};
  `}
  position: relative;
  z-index: 10;
  background-color: ${props => props.theme.colors.blueishGrey};
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  border-left: 40px solid #eeeeee;
  width: 100%;
  ${large`
    > div {
      width: calc( ( 100% - ${spacing.double} ) / 2 );
    }
    
  `}
  &.section-intro-contents{
    border: none;
    ${small`
      padding: ${spacing.double} ${spacing.half} ${spacing.half} ${spacing.half};
    `}
    ${medium`
      padding: ${spacing.double} ${spacing.single} ${spacing.single} ${spacing.single};
    `}
    ${large`
      padding: ${spacing.double} ${spacing.double};
    `}
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${large`
    > div {
      width: calc( ( 100% - ${spacing.double} ) / 2 );
    }
    > div:nth-child(2n) {
      margin-left: ${spacing.double};
    }
  `}
`;



const Index = (props) => {
  console.log(props);
  const posts = props.data.allMarkdownRemark.edges.map(p => p.node);
  const { langKey } = props.pageContext;
  const { pinnedTechnologies, projects } = props.data.site.siteMetadata.resume;

  return (
    <div>
      <SectionBlock style={{backgroundColor: '#266ABB'}} >
        <Texture className="svg-background" width="100%" height="100%" data={{}} index={3} />
        <SectionContent>
          <SocialLinks />
          <Welcome currentLangKey={langKey} />
        </SectionContent>
      </SectionBlock>

      <SectionBlock style={{backgroundColor: '#48A6A7'}} >
        <Texture className="svg-background" width="100%" height="100%" data={{}} index={1} />
        <SectionContent>
          <Technologies technologies={pinnedTechnologies} langKey={langKey} />
          <FormattedMessage id="resume.technologies.seeMore">
            {(txt) => (
              <BtnLink to={`/${langKey}/resume/`}>
                {txt}
              </BtnLink>
            )}
          </FormattedMessage>
        </SectionContent>
      </SectionBlock>

      <SectionBlock style={{backgroundColor: '#423575'}}>
        <Texture className="svg-background" width="100%" height="100%" data={{}} index={2} />
        <SectionContent>
          <Codes projects={projects} langKey={langKey} />
        </SectionContent>
      </SectionBlock>

      <SectionBlock style={{backgroundColor: '#C5C3A0'}}>
        <Texture className="svg-background" width="100%" height="100%" data={{}} index={0} />
        <SectionContent>
          <Posts
            posts={posts}
            langKey={langKey}
            showBtnMorePosts
          />
        </SectionContent>
      </SectionBlock>
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default Index;

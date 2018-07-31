import React from 'react';
import PropTypes from 'prop-types';
import Posts from './Posts';
import SocialLinks from './SocialLinks';
import Welcome from './Welcome';
import BtnLink from './BtnLink';
import Technologies from './Resume/Technologies';
import Codes from './Resume/Codes';
import Link from './Link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { injectGlobal, css, keyframes } from 'styled-components';
import Texture from './Texture.js'
import Helmet from 'react-helmet';



const spacing = {
  quarter: "10px",
  half: "20px",
  single: "40px",
  double: "80px"
}

const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`
const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${ css(...args) }
  }
`
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`

const SectionBlock = styled.section`
  ${small`
    padding: 10px 10px 10px 10px;
  `}
  ${medium`
    padding: 20px 80px 20px 80px;
    min-height: 100vh;
  `}
  ${large`
    padding: 40px 120px 40px 120px;
    min-height: 100vh;
  `}
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  &:last-of-type{
    .section-icon{
      &:after{
        display: none;
      }
    }
  }
  &.section-intro{
    perspective: 1000px;
    ${small`
      padding-top: 80px;
    `}
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
  const posts = props.data.allMarkdownRemark.edges.map(p => p.node);
  const { langKey } = props.pathContext;
  const { pinnedTechnologies, projects } = props.data.site.siteMetadata.resume;

  return (
    <div>
	    <SectionBlock  style={{backgroundColor: '#266ABB'}}  >
				<Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={3}/>
				<SectionContents>
					<SocialLinks />
					<Welcome currentLangKey={langKey} />
				</SectionContents>
	    </SectionBlock>
      
		  <SectionBlock  style={{backgroundColor: '#48A6A7'}}  >
				<Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={1}/>
				<SectionContents>
					<Technologies technologies={pinnedTechnologies} />
					<FormattedMessage id="resume.technologies.seeMore">
						{(txt) => (
						  <BtnLink to={`/${langKey}/resume/`}>
							{txt}
						  </BtnLink>
						)}
					</FormattedMessage>
				</SectionContents>
		  </SectionBlock>
	  
		  <SectionBlock  style={{backgroundColor: '#423575'}}  >
				<Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={2}/>
				<SectionContents>
					http://graphicdesignjunction.com/2013/10/free-fonts-for-creative-designers/

					http://www.heropatterns.com/
				  <Codes projects={projects}>
				  </Codes>
				</SectionContents>
		  </SectionBlock>
	  	  
		  <SectionBlock  style={{backgroundColor: '#C5C3A0'}}  >
				<Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={0}/>
					<SectionContents>
						<Posts
							posts={posts}
							langKey={langKey}
							showBtnMorePosts
						/>
					</SectionContents>
		  </SectionBlock>
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

export default Index;

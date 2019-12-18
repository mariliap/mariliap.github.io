import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/blog/PostList';
import Posts from './blog/Posts';
import H1 from './commons/H1';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled, {css} from 'styled-components';
import SectionBlock from '../components/SectionBlock';
import SectionContent from '../components/SectionContent';
import Texture from '../components/layout/Texture.js';

// const small = (...args) => css`
//   @media screen and (max-width: 600px) {
//     ${ css(...args) }
//   }
// `;
// const medium = (...args) => css`
//   @media screen and (min-width: 601px) and (max-width: 1200px) {
//     ${ css(...args) }
//   }
// `;
// const large = (...args) => css`
//   @media screen and (min-width: 1201px) {
//     ${ css(...args) }
//   }
// `;
//
// const SectionBlock = styled.section`
//   background-color:  ${props => props.backgroundColor};
//
//   ${small`
//     padding: 10px 10px 10px 10px;
//   `};
//   ${medium`
//     padding: 20px 80px 20px 80px;
//     min-height: 100vh;
//   `};
//   ${large`
//     padding: 40px 120px 40px 120px;
//     min-height: 100vh;
//   `};
//    flex: 1;
//    display: flex;
//    align-items: center;
//    position: relative;
// `;

// const SectionContent = styled.div`
//   ${props => props.theme.small`
//     padding: ${props => props.theme.spacing.half} ${props => props.theme.spacing.half};
//   `}
//   ${props => props.theme.medium`
//     padding: ${props => props.theme.spacing.single} ${props => props.theme.spacing.double};
//   `}
//   ${props => props.theme.large`
//     padding: ${props => props.theme.spacing.single} ${props => props.theme.spacing.double};
//   `}
//   position: relative;
//   z-index: 10;
//   background-color: ${props => props.theme.colors.blueishGrey};
//   box-shadow: 8px 8px rgba(0,0,0,0.15);
//   border-left: 40px solid #eeeeee;
//   width: 100%;
// `;

const Blog = (props) => {
  const posts = props.data.allMarkdownRemark.edges.map(p => p.node);
  const { langKey } = props.pathContext;
  return (
	  <div>
		  <SectionBlock className="posts" backgroundColor={({ theme }) => theme.colors.blueishGreyPaletteSand} >
			  <Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={3}/>
			  <SectionContent>
                  <Posts
						posts={posts}
						langKey={langKey}
						showBtnMorePosts
				   />
                  {/*  
				  <FormattedMessage id="posts">
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
				  <PostList
					  posts={props.data.allMarkdownRemark.edges.map(p => p.node)}
				  />
                  */}
			  </SectionContent>
		  </SectionBlock>
	  </div>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired
};

export default Blog;

import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import styled, {css} from 'styled-components';
import EditBtn from '../components/blog/EditBtn';
import Tags from '../components/Tags';
import { getStructuredData } from '../structuredData';
import CleanTime from '../components/Time';
import Comments from '../components/Comments';
import Posts from '../components/blog/Posts';
import AnchorJS from 'anchor-js';
import Texture from '../components/layout/Texture';



const Time = styled(CleanTime)`
  text-align: center;
  font-size: ${props => props.theme.blog.post.header.time.fontSize};
  font-weight: bold;
  color: ${props => props.theme.blog.post.header.time.color};
  width: 100%;
  display: block;
  padding-top: 1rem;
`;

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

const SectionSeparator = styled.section`
  height: 45px;
  background-size: 35px 35px;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' 
                         xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' 
                         fill='%23c5c3a0' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;


const PostBlock = styled.article`
  //margin: ${props => props.theme.blog.post.margin};
  // padding: ${props => props.theme.blog.post.padding};
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
   background-color: ${props => props.theme.colors.blueishGreyPaletteSand};
   
`;

const Post = styled.div`
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

const H1 = styled.h1`
  padding-bottom: 0;
  text-align: center;
  font-size: ${props => props.theme.blog.post.header.fontSize};
`;

const Content = styled.section`
  margin: 0 0 ${({ theme }) => theme.scale(6)} 0;  
  
  p > code {
    color: ${props => props.theme.blog.post.content.code.color};
    font-size: ${props => props.theme.blog.post.content.code.fontSize};
    margin: ${props => props.theme.blog.post.content.code.margin};
    padding: ${props => props.theme.blog.post.content.code.padding};
    background-color: ${props => props.theme.blog.post.content.code.backgroundColor};
    border-radius: ${props => props.theme.blog.post.content.code.borderRadius};
  }

  .gatsby-highlight{
    margin:${props => props.theme.blog.post.content.highlight.margin};
    padding:${props => props.theme.blog.post.content.highlight.padding};
    background-color: ${props => props.theme.blog.post.content.highlight.backgroundColor};
    display: flex;
    border-radius: ${props => props.theme.blog.post.content.highlight.borderRadius};
    overflow: auto;

    code {
      color: ${props => props.theme.blog.post.content.highlight.code.color};
    }

    pre{
      width: 100%;
      border: 2px solid ${props => props.theme.colors.white};
    }
  }

  a{
    color: ${props => props.theme.blog.post.content.a.color};
  }

  h1{
    margin:${props => props.theme.blog.post.content.h1.margin};
    padding:${props => props.theme.blog.post.content.h1.padding};
    font-size:${props => props.theme.blog.post.content.h1.fontSize};
  }

  h2{
    margin:${props => props.theme.blog.post.content.h2.margin};
    padding:${props => props.theme.blog.post.content.h2.padding};
    font-size:${props => props.theme.blog.post.content.h2.fontSize};
  }

  h3{
    margin:${props => props.theme.blog.post.content.h3.margin};
    padding:${props => props.theme.blog.post.content.h3.padding};
    font-size:${props => props.theme.blog.post.content.h3.fontSize};
  }

  h4{
    margin:${props => props.theme.blog.post.content.h4.margin};
    padding:${props => props.theme.blog.post.content.h4.padding};
    font-size:${props => props.theme.blog.post.content.h4.fontSize};
  }

  h5{
    margin:${props => props.theme.blog.post.content.h5.margin};
    padding:${props => props.theme.blog.post.content.h5.padding};
    font-size:${props => props.theme.blog.post.content.h5.fontSize};
  }

  h6{
    margin:${props => props.theme.blog.post.content.h6.margin};
    padding:${props => props.theme.blog.post.content.h6.padding};
    font-size:${props => props.theme.blog.post.content.h6.fontSize};
  }

  p{
    margin:${props => props.theme.blog.post.content.p.margin};
    padding:${props => props.theme.blog.post.content.p.padding};
    font-size: ${props => props.theme.p.fontSize};
    line-height: ${props => props.theme.p.lineHeight};
  }

  & > p:first-of-type::first-letter {
      font-size: ${props => props.theme.p.firstLetter.fontSize};
      color: ${props => props.theme.p.firstLetter.color};
      float: left;
      line-height: ${props => props.theme.p.firstLetter.lineHeight};
      padding: ${props => props.theme.p.firstLetter.padding};
      margin: ${props => props.theme.p.firstLetter.margin};
  }

  strong{
    font-weight: bold;
  }

  ul, ol {
    margin:${props => props.theme.blog.post.content.ul.margin};
    padding:${props => props.theme.blog.post.content.ul.padding};
    font-size:${props => props.theme.blog.post.content.ul.fontSize};    
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    padding-top: 1rem;
  }

  blockquote {
    font-style: italic;
    margin: 0;
    padding: ${({ theme }) => theme.scale(3)};    
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  blockquote:before {
    line-height: 1.45;
    display: block;
    content: "\\201C";
    position: absolute;
    top: -${({ theme }) => theme.scale(-4)};
    left: -${({ theme }) => theme.scale(1)};
    font-size: ${({ theme }) => theme.scale(10)};
    color: ${({ theme }) => theme.colors.white};
  }

  blockquote:after {
    display: block;
    content: "\\201D";
    position: absolute;
    bottom: -${({ theme }) => theme.scale(6)};
    right: ${({ theme }) => theme.scale(1)};
    font-size: ${({ theme }) => theme.scale(10)};
    color: ${({ theme }) => theme.colors.white};
  }

  blockquote cite {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.scale(-1)};
    display: block;
  }
     
  blockquote cite:before {
    content: "\\2014 \\2009";
  }

  img {
    max-width: 100%;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  max-width: 40rem;
  height: 20rem;
  margin: auto;
  display: block;
`;

const getYoutube = (markdownRemark) => {
  const youtubeId = markdownRemark.frontmatter.youtubeId;
  return youtubeId
    ? (
      <Iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/' + youtubeId}
        frameBorder="0"
        allowFullScreen
      />
    )
    : null;
};

class BlogPostRoute extends React.PureComponent {

  componentDidMount(){
    const anchors = new AnchorJS();
    anchors.add('h1, h2');
  }

  render(){
    const { markdownRemark } = this.props.data;
    const { langKey } = this.props.pageContext;
    const youtube = getYoutube(markdownRemark);
    const structuredData = getStructuredData(markdownRemark);
    const url = `https://mariliaportela.com${markdownRemark.fields.slug}`;
  
    const tags = (
      <Tags tags={markdownRemark.fields.tagSlugs} />
    );
  
    return (
      <PostBlock>
        <Texture className="svg-background" width="100%" height="100%" data={{}} index={0} />
        <Post>
          <Helmet
            title={`${markdownRemark.frontmatter.title}`}
            meta={[{ name: 'description', content: markdownRemark.excerpt }]}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: structuredData }}
          />
          <header>
            <H1>
              {markdownRemark.frontmatter.title}
            </H1>
            <Time
              pubdate
              date={markdownRemark.frontmatter.date}
              langKey={langKey}
            />
          </header>
          <EditBtn
            fileAbsolutePath={markdownRemark.fileAbsolutePath}
            currentLangKey={langKey}
          />
          {tags}
          {youtube}
          <Content dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          {/*<SectionSeparator/>*/}
          {/*<Comments*/}
          {/*shortname="angeloocana-com"*/}
          {/*identifier={markdownRemark.fields.slug}*/}
          {/*title={markdownRemark.frontmatter.title}*/}
          {/*url={url}*/}
          {/*/>*/}
          <SectionSeparator />
          {tags}
          <Posts
            posts={markdownRemark.fields.readNextPosts}
            langKey={langKey}
            showBtnMorePosts
            title="posts.readNext"
          />
        </Post>
      </PostBlock>
    );
  }
}

BlogPostRoute.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
};

export default BlogPostRoute;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      fileAbsolutePath
      html
      excerpt
      fields {
        tagSlugs {
          tag
          link
        }
        slug        
        readNextPosts {
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
            langKey
          }
        }
      }      
      frontmatter {
        youtubeId
        title
        tags
        date
        structuredData {
          alternativeHeadline
          type
          dependencies
          proficiencyLevel
          articleSection
          pageEnd
          pageStart
          pagination
          about {
            name
            alternateName
            description
            identifier
            image
            sameAs
          }
          accessMode
          accessModeSufficient
          accessibilityAPI
          accessibilityControl
          accessibilitySummary
          aggregateRating
          audience
          author
          comment
          commentCount
          contentLocation
          dateCreated
          dateModified
          datePublished
          discussionUrl
          educationalUse
          isAccessibleForFree
          isFamilyFriendly
          keywords
          locationCreated
          thumbnailUrl
          version
          video
        }
      }
    }
  }
`;

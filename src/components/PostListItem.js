import React from 'react';
import PropTypes from 'prop-types';
import Link from '../components/Link';
import styled from 'styled-components';
import CleanTime from '../components/Time';

const Li = styled.li`
  padding: ${props => props.theme.blog.list.item.padding};
  margin: ${props => props.theme.blog.list.item.margin};
  transition: 0.3s;
  &:hover{
    > a {
      > * {
		color: ${props => props.theme.blog.list.item.p.hover.color};
		&:last-child::after {
					transform: scaleX(1);
					transition-delay: 0s;
		}
	  }
    }
  }
`;

const Header = styled.header`
  padding: 0;
  font-size: ${props => props.theme.blog.list.item.header.fontSize};
  line-height: ${props => props.theme.blog.list.item.header.lineHeight};
`;

const Time = styled(CleanTime)`
  font-size: ${props => props.theme.blog.list.item.header.time.fontSize};
  font-weight: bold;
  color: ${props => props.theme.blog.list.item.header.time.color};
  width: 100%;
  display: block;
  line-height: 1.2;
`;

const Title = styled.p`
   padding: 0;
   margin: ${props => props.theme.blog.list.item.p.margin};
   font-size: ${props => props.theme.blog.list.item.header.fontSize};
   line-height: ${props => props.theme.blog.list.item.header.lineHeight};
   font-weight: ${props => props.theme.blog.list.item.header.fontWeight};
   color: ${props => props.theme.blog.list.item.p.color};
   
   position: relative;
   
`;

const P = styled.p`
  font-size: ${props => props.theme.blog.list.item.p.fontSize};
  margin: ${props => props.theme.blog.list.item.p.margin};
  padding: ${props => props.theme.blog.list.item.p.padding};
  line-height: ${props => props.theme.blog.list.item.p.lineHeight};
  font-weight: ${props => props.theme.blog.list.item.p.fontWeight};
  color: ${props => props.theme.blog.list.item.p.color};
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &::after {
    color: ${props => props.theme.blog.list.item.p.hover.color};
	  content: '';
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  height: 2px;
	  background-color: ${props => props.theme.blog.list.item.p.after.backgroundColor};
	  transform: scaleX(0);
	  transform-origin: left;
	  transition: transform 0.4s ease-in-out;
	  transition-delay: 0.1s;
  }
`;

const PostListItem = ({ post }) => {
  return (
    <Li key={post.fields.slug}>
      <Link to={post.fields.slug}>
        <Header>
          <Time
            pubdate
            langKey={post.fields.langKey}
            date={post.frontmatter.date}
          />
        </Header>
		<Title>{post.frontmatter.title}</Title>
        <P>{post.excerpt}</P>
		
      </Link>
    </Li>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      langKey: PropTypes.string.isRequired
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }),
    excerpt: PropTypes.string.isRequired
  })
};

export default PostListItem;

import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';
import styled from 'styled-components';
import {css} from 'styled-components';

const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`;

const Ul = styled.ul`
  //list-style: none;
  //margin: ${props => props.theme.blog.list.ul.margin};
  padding-bottom: ${props => props.theme.blog.list.ul.padding};
  display: flex;
  flex-wrap: wrap;
  > * {
    width: calc( ( 100% - ${props => props.theme.blog.list.ul.width} ) / 2 );

    &:nth-child(2n) {
      margin-left: ${props => props.theme.blog.list.ul.margin};
    }
  }
`;

const ScrollableDiv = styled.div`
    height: 50vh;
    overflow-y: scroll;
    // ::-webkit-scrollbar{
    //     color: blue;
    // };
`;

const PostList = (props) => {
  return (
      //style={{height: '50vh', overflowY: 'scroll'}}
      <ScrollableDiv>
        <nav>
          <Ul>
            {props.posts.map(post =>
              <PostListItem post={post} />
            )}
          </Ul>
        </nav>
      </ScrollableDiv>
  );
};

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;

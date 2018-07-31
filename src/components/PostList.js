import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';
import styled from 'styled-components';
import {css} from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import CleanTime from "./Time";

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
    // height: 50vh;
    // overflow-y: auto;
    backgroundColor: tomato;
    // &::-webkit-scrollbar{
    //   width: 20px;
    // };
    // &::-webkit-scrollbar-track{
    //   background: tomato;
    //   border-left: 9px solid white;
    //   border-right: 9px solid white;
    // };
    // &::-webkit-scrollbar-thumb{
    //   background: black;
    //   border-left: 7px solid white;
    //   border-right: 7px solid white;
    // };
`;




const PostList = (props) => {
  return (
      //style={{height: '50vh', overflowY: 'scroll'}}
      <Scrollbars style={{ height: '50vh' }} >
        <nav>
          <Ul>
            {props.posts.map(post =>
              <PostListItem post={post} />
            )}
          </Ul>
        </nav>
      </Scrollbars>
  );
};

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList;

import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import PostList from './PostList';
import BtnLink from './BtnLink';
import H2 from './H2';
import H1 from './H1';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const SectionTop = styled.div`

`

const Posts = (props) => {
  const btnMorePosts = props.showBtnMorePosts
    ? (
      <FormattedMessage id="posts.seeMore">
        {(txt) => (
          <BtnLink to={`/${props.langKey}/blog/`}>
            {txt}
          </BtnLink>
        )}
      </FormattedMessage>
    )
    : null;

  return (
    <section className="post-list">
      <SectionTop>
        <Link to={`/${props.langKey}/blog/`}>
          <FormattedMessage id={props.title || 'posts'}>
            {(txt) => (
              <H2>{txt}</H2>
            )}
          </FormattedMessage>
        </Link>
      </SectionTop>
      <PostList {...props} />
      {btnMorePosts}
    </section>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  langKey: PropTypes.string.isRequired,
  showBtnMorePosts: PropTypes.bool,
  title: PropTypes.string
};

export default Posts;

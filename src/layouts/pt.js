import React from 'react';
import {graphql} from 'gatsby';
import Layout from './_layout';
import { addLocaleData } from 'react-intl';

import messages from '../data/messages/pt';
import pt from 'react-intl/locale-data/pt';
import 'intl/locale-data/jsonp/pt';
import {ThemeProvider} from 'styled-components';

addLocaleData(pt);


export default (props) => {
  console.log('pt.js');
  return (
    <div>
      {console.log('pt.js')}
      <h1>pt.js</h1>
      <Layout
        {...props}
        i18nMessages={messages}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query LayoutPt {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
        author {
          name
          homeCity
          homeCityLink
          email
          defaultLink
        }
        sourceCodeLink
        menu {
          label
          link
          slug
          items{
            label
            slug
          }
        }
      }
    }
  }
`;

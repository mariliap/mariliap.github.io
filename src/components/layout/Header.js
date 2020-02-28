import React from 'react';
import PropTypes from 'prop-types';
import Link from '../commons/Link';
import Menu from './Menu';
import styled from 'styled-components';
import SelectLanguage from '../SelectLanguage';
import { FormattedMessage } from 'react-intl';




const Wrapper = styled.header`
 
  ${({theme, isHome}) => isHome
    ? ``
    : `
      @media (min-width: 40rem) {  
      
        display: flex;
        justify-content: space-between;
    
        .title {
          padding-top: ${theme.scale(2)};
          order: 0;          
        }
    
        .select-languages{
          order: 1;          
        }    
      }
  `}  
`;

const Header = ({ menu, isHome, langs,  url }) => {
  return (
    <Wrapper isHome={isHome}>
      <Menu menu={menu} langs={langs} url={url}  />
    </Wrapper>
  );
};

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
  langs: PropTypes.array,
  url: PropTypes.string
};

export default Header;

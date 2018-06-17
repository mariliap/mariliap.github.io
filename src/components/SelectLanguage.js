import React from 'react';
import PropTypes from 'prop-types';
import Br from './flags/Br';
import Ca from './flags/Ca';
import Fr from './flags/Fr';
import { InvisibleSpan } from '../components/Invisible';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const Nav = styled.nav`
  //margin-right: ${({ theme }) =>  theme.scale(8)};
  //z-index: 11;
  //margin-left:-10%;
  margin-left: ${props => props.theme.menu.ul.marginLeft};
  //overflow: auto;
  //transition: opacity 1s, transform 0.5s;
  //transform: ${props => props.isOpen ? 'translateX(-4rem)' : ''};
  //opacity: ${props => props.isOpen ? 1 : 0};
  
`;

const Label = styled.label`
	
    display: block;
	font-size: ${props => props.theme.scale(1)};
    //margin-left: -${props => props.theme.scale(-1)};
	//padding: ${({ theme }) => theme.scale(-100)};
	margin-left: auto;
    margin-right: auto;
    text-align: right;
    text-decoration: none;
    transition: 0.5s;
    

    color: ${props => props.selected
    ? props.theme.menu.a.active.color
    : props.theme.menu.a.color};
`;

const Ul = styled.ul`
  display: block;
`;

const Li = styled.li`
  width:2.3em;
  display: block;
  margin-top:0.35rem;
  padding:0.1rem;
  font-size: ${props => props.theme.i18n.selectLanguage.li.fontSize};
  cursor: pointer;
  transition: 0.3s;
  ${props => props.selected
    ? 'box-shadow: 0 0 0.2rem 0.05rem ' +  props.theme.colors.blueishGreyPalletePink + ' inset, 0 0 0 0.19rem ' + props.theme.colors.blueishGreyPalletePink
    : ''};
		

  &:hover{
    ${props => props.selected
    ? ''
    : 'box-shadow: 0 0 10px 0 ' +  props.theme.colors.blueishGreyPalletePink + ' inset, 0 0 10px 4px ' + props.theme.colors.blueishGreyPalletePink};
	transition: 0.3s;
  },
  
`;

const getIcon = langKey => {
  switch (langKey) {
    case 'en': return <Ca />;
    case 'fr': return <Fr />;
    case 'pt': return <Br />;
    default: return null;
  }
};

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
	lang.selected
    ? ''
	:(
	  <Link to={lang.link}>
         <Li selected={lang.selected}>
           {getIcon(lang.langKey)}
         </Li>
       </Link>
	 )
  );
  
  const selection = props.langs.map(lang => 
	lang.selected
    ? (
	  <Link to={lang.link}>
         <Li selected={lang.selected}>
           {getIcon(lang.langKey)}
         </Li>
       </Link>
	 )
	: ''
  );

  return (
    <Nav {...props} isOpen>
      <header>
        <InvisibleSpan>Select your language:</InvisibleSpan>
		
      </header>
	  <Label>
		<FormattedMessage id="language"/>
	  </Label>
      <Ul>
		{selection}
        {links}
      </Ul>
    </Nav>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;

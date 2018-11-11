import React from 'react';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import HeartIcon from './HeartIcon';
import FaGithub from 'react-icons/lib/fa/github';
import A from './A';
import styled from 'styled-components';
import Ca from './flags/Ca';
import Br from './flags/Br';
import Texture from './Texture.js';

const FooterMain = styled.footer`
    position: relative;
    display: flex;
`;

const FooterSection = styled.section`
	z-index: 10;
	color:  ${props => props.theme.colors.blueishGreyPaletteBlue};
  text-align: center;
  display: block;
  margin: auto;
  span {
    font-weight: bold;
  }
`;

const Link = styled(A)`
  display: inline-block;
  color:  ${props => props.theme.colors.blueishGreyPaletteBlue};
  
  padding-top: ${({theme}) => theme.scale(0.5)};
  padding-bottom: ${({theme}) => theme.scale(0)};
  margin: 0;

  line-height: 1.5;
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.3s;
  
  &:hover {

    transition: 0.3s;

  }
`;

const ProfilePicture = styled(Gravatar)`
  width: 2em;
  height: 2em;
  display: inline-block;
  margin: auto;
  vertical-align: middle;
  border-radius: 50%;
`;

const GithubIcon = styled(FaGithub)`
  font-size: ${({ theme }) => theme.scale(4)};
  display: inline-block;
  vertical-align: middle;
`;

const HomeCountryIcon = styled(Br)`
  top: -0.1rem;
  position: relative;
  font-size: ${({ theme }) => theme.scale(2)};
  margin-left: ${({ theme }) => theme.scale(-6)};
`;

const getGitHubMsg = (txt) => {
	return (
		<p>
			<GithubIcon/>
			<span>{txt}</span>
		</p>

	);
};


const getCreatedBy = (author, sourceCodeLink) => {
  const profilePicture = (<ProfilePicture email={author.email} alt={author.name}  default={"monsterid"}/>);
  return {
    en: (
      <FooterSection>
	      <Link href={sourceCodeLink} target="_blank">
		      {getGitHubMsg('OPEN SOURCE')}
	      </Link>
        {', built with '} <HeartIcon />
        {' by '}
	      <Link href={author.defaultLink} target="_blank">
		      <span>{author.name} </span>
	        {profilePicture}
	      </Link>
	      {' who lives in '}
	      <Link href={author.homeCityLink} target="_blank">
		      <span>{author.homeCity}</span>
	        <HomeCountryIcon />
	      </Link>
      </FooterSection>
    ),
    pt: (
      <FooterSection>
	      <Link href={sourceCodeLink} target="_blank">
		      {getGitHubMsg('OPEN SOURCE')}
	      </Link>
	      {', criado com '} <HeartIcon />
	      {' por '}
        <Link href={author.defaultLink} target="_blank">
          <span>{author.name} </span>
	        {profilePicture}
        </Link>
	      {' que mora em '}
	      <Link href={author.homeCityLink} target="_blank">
		      <span>{author.homeCity}</span>
		      <HomeCountryIcon />
	      </Link>
      </FooterSection>
    ),
    fr: (
      <FooterSection>
	      <Link href={sourceCodeLink} target="_blank">
		      {getGitHubMsg('SOURCE OUVERTE')}
	      </Link>
	      {', créé avec '} <HeartIcon />
	      {' par '}
	      <Link href={author.defaultLink} target="_blank">
		      <span>{author.name} </span>
		      {profilePicture}
	      </Link>
	      {' qui vit à '}
	      <Link href={author.homeCityLink} target="_blank">
		      <span>{author.homeCity}</span>
		      <HomeCountryIcon />
	      </Link>
      </FooterSection>
    )
  };
};


const Footer = ({ author, sourceCodeLink, currentLangKey }) => {
  return (
    <FooterMain>
	    <Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={6}/>
      {getCreatedBy(author, sourceCodeLink)[currentLangKey]}
    </FooterMain>
  );
};

Footer.propTypes = {
  author: PropTypes.object.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
  currentLangKey: PropTypes.string
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import ResumeContainer from './ResumeContainer';
import Educations from './Educations';
import SectionBlock from '../SectionBlock';
import SectionContent from '../SectionContent';
import Texture from '../layout/Texture.js'

const EducationsPage = (props) => {
  const { educations, menu } = props.data.site.siteMetadata.resume;
  const { langKey } = props.pageContext;

  return (
	  <div>
		  <SectionBlock className="posts" backgroundColor={({ theme }) => theme.colors.blueishGreyPaletteSand} >
			  <Texture className="svg-background" width={'100%'} height={'100%'} data={{}} index={3}/>
			  <SectionContent>
          <ResumeContainer
            menu={menu}
            selectedPage="/resume/education/"
          >
            <Educations
              educations={educations}
              langKey={langKey}
            />
          </ResumeContainer>
			  </SectionContent>
		  </SectionBlock>
	  </div>
  );
};

EducationsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default EducationsPage;

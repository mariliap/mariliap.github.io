import styled from 'styled-components';


const SectionContent = styled.div`
  ${props => props.theme.small`
    padding: ${props => props.theme.spacing.half} ${props => props.theme.spacing.half};
  `}
  ${props => props.theme.medium`
    padding: ${props => props.theme.spacing.single} ${props => props.theme.spacing.double};
  `}
  ${props => props.theme.large`
    padding: ${props => props.theme.spacing.single} ${props => props.theme.spacing.double};
  `}
  position: relative;
  z-index: 10;
  background-color: ${props => props.theme.colors.blueishGrey};
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  border-left: 40px solid #eeeeee;
  width: 100%;  
`;

export default SectionContent;

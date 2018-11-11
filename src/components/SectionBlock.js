import styled from 'styled-components';

const SectionBlock = styled.section`
	background-color:  ${props => props.backgroundColor};
	${props => props.theme.small`
    padding: 10px 10px 10px 10px;
  `};
  ${props => props.theme.medium`
    padding: 20px 80px 20px 80px;
    min-height: 100vh;
  `};
  ${props => props.theme.large`
    padding: 40px 120px 40px 120px;
    min-height: 100vh;
  `};
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  &:last-of-type{
    .section-icon{
      &:after{
        display: none;
      }
    }
  }
  &.section-intro{
    perspective: 1000px;
    ${props => props.theme.small`
      padding-top: 80px;
    `}
  }
`;

export default SectionBlock;
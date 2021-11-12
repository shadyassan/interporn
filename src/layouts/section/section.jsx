import styled from 'styled-components';
import OverlayImage from 'components/overlay-image/overlay-image';

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const initialBackground = {
  backgroundImage: '',
  backgroundAttachment: 'scroll',
};

const Section = ({ background = initialBackground, children }) => {
  return (
    <SectionWrapper>
      {background.backgroundImage !== '' && (
        <OverlayImage background={{ ...background }} />
      )}
      {children}
    </SectionWrapper>
  );
};

export default Section;

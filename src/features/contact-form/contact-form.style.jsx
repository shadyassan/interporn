import styled from 'styled-components';

export const Heading = styled.h4`
  font-size: 104px;
  font-family: ${(props) => props.theme.fonts.optional};
`;

export const SubHeading = styled.h3`
  color: ${(props) => props.theme.colors.primary.alternate};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h4`
  display: inline-block;
  position: relative;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 45px;
  }

  &:after,
  &:before {
    position: absolute;
    top: 50%;
    width: 1000%;
    height: 1px;
    transform: translateY(-1px);
    background-color: ${(props) => props.theme.colors.primary.alternate};
    content: '';

    @media (max-width: 992px) {
      display: none;
    }
  }

  &:after {
    left: calc(-1000% - 70px);
  }

  &:before {
    right: calc(-1000% - 70px);
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes['sm']}px;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

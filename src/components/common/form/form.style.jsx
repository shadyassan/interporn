import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { getStyleString } from 'utils';

const columnsGap = {
  1: 25,
  3: 90,
};

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 6px;
`;

export const Wrapper = styled.div`
  padding: 0;
  overflow: auto;
  border-radius: ${themeGet('radii.small')};
  border: 0;
  width: min(
    ${({ width }) => (width >= 0 ? `${width}px` : '400px')},
    calc(100vw - 40px)
  );
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
`;

export const LogoWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Container = styled.div`
  padding: 40px 30px;
`;

export const Heading = styled.h3`
  margin-bottom: 15px;
  font-family: ${themeGet('fonts.heading')};
  font-size: ${themeGet('fontSizes.lg')}px;
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.primary.regular')};
`;

export const SubHeading = styled.span`
  display: block;
  margin-bottom: 30px;
  font-family: ${themeGet('fonts.body')};
  font-size: ${themeGet('fontSizes.sm')}px;
  font-weight: ${themeGet('fontWeights.regular')};
  color: ${themeGet('colors.text.regular')};
`;

export const FormFieldsWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const FormRow = styled.div`
  display: grid;

  ${({ columns }) =>
    columns && `grid-template-columns: repeat(${columns}, 1fr)`};

  ${({ columnGap }) =>
    columnGap &&
    getStyleString(columnsGap[columnGap], 'grid-column-gap', 'px')};
  ${({ rowGap }) =>
    rowGap && getStyleString(rowsGap[rowGap], 'grid-row-gap', 'px')};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const FormField = styled.div`
  position: relative;
`;

export const Offer = styled.p`
  margin: 0;
  padding-top: 30px;
  font-size: ${themeGet('fontSizes.base')}px;
  font-weight: ${themeGet('fontWeights.regular')};
  color: ${themeGet('colors.text.regular')};
`;

export const SmallButton = styled.span`
  text-align: right;
  display: block;
  padding-bottom: 15px;
  cursor: pointer;
  font-size: calc(${themeGet('fontSizes.xm')}px);
  color: ${(props) => props.theme.colors.text.medium};
  transition: color 0.25s ease;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const LinkButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: 0;
  text-decoration: underline;
  color: ${themeGet('colors.primary.alternate')};
  font-size: calc(${themeGet('fontSizes.base')}px);
  font-weight: ${themeGet('fontWeights.base')};
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

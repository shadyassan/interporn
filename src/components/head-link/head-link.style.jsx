import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const HeadLinkWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 45px;
  }
`;

export const Legend = styled.h4`
  font-size: 96px;
  font-family: ${themeGet('fonts.optional')};
`;

export const LinkButton = styled.a`
  display: block;
  color: ${themeGet('colors.primary.alternate')};
  font-size: ${themeGet('fontSizes.2xlup')}px;
`;

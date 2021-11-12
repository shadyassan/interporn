import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const RightMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthMenuBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:not(:first-child) {
    margin-left: 115px;

    @media (max-width: 992px) {
      margin-left: 35px;
    }
  }
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1;
  font-size: ${themeGet('fontSizes.xs')}px;
  font-weight: ${themeGet('fontWeights.bold')};
  transition: ${themeGet('customs.transition')};

  &:not(:first-child) {
    margin-left: 28px;
  }
`;

export const LogInMenuItem = styled(MenuItem)`
  color: ${themeGet('colors.primary.alternate')};

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const SignInMenuItem = styled(MenuItem)`
  padding: 13px 15px;
  color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.big')};
  background-color: ${themeGet('colors.primary.alternate')};

  &:hover {
    background-color: ${themeGet('colors.primary.hover')};
  }
`;

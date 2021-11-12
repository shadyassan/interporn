import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemImage = styled.div`
  margin-right: 28px;
  flex-shrink: 0;

  @media (max-width: 576px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const ItemInfoHolder = styled.div`
  display: flex;
  flex: auto;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const ItemInfo = styled.div`
  flex-grow: 1;

  @media (min-width: 1281px) {
    padding-right: 40px;
  }

  @media (max-width: 1280px) {
    margin-bottom: 20px;
  }

  .title {
    font-size: ${(props) => props.theme.fontSizes.lg}px;

    a {
      color: ${(props) => props.theme.colors.white};

      &:hover {
        color: ${(props) => props.theme.colors.primary.alternate};
      }
    }

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;
export const Description = styled.div`
  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const Price = styled.div`
  font-family: ${(props) => props.theme.fonts.optional};
  font-size: ${(props) => props.theme.fontSizes['4xl']}px;
  color: ${(props) => props.theme.colors.white};
  line-height: ${(props) => props.theme.lineHeights.heading};
`;

export const TotalPrice = styled(Price)`
  font-size: 64px;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;

export const Text = styled.span`
  font-size: ${themeGet('fontSizes.xl')}px;
  color: ${themeGet('colors.white')};
`;

export const Bold = styled(Text)`
  font-weight: ${themeGet('fontWeights.bold')};
`;

export const InformationBox = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 40px;

  &:not(:last-child) {
    margin-bottom: 45px;
  }
`;

export const Heading = styled.h4`
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: ${themeGet('fontSizes.up')}px;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const NoProductImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    width: 140px;
    height: auto;
  }
`;

export const NoProductMsg = styled.h3`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  font-family: ${themeGet('fonts.optional')};
  font-size: ${themeGet('fontSizes.5xl')}px;
`;

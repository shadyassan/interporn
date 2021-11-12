import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';
import { space, color, layout, flexbox } from 'styled-system';
import { getStyleString } from 'utils';
import { GUTTERS } from 'utils/constant';

export const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const adaptivePaddingSizes = [
  '80px 30px 80px 30px',
  '100px 30px 100px 30px',
  '140px 30px 140px 30px',
  '110px 30px 110px 30px',
];

const sectionHeights = {
  0: 45,
  1: 100,
  2: 260,
  3: 200,
  4: 300,
};

export const MainSection = styled.div((props) =>
  css({
    position: 'relative',
    margin: `0 auto`,
    padding: Array.isArray(props.height)
      ? [
          ...adaptivePaddingSizes,
          `${sectionHeights[props.height[0]]}px 30px ${
            sectionHeights[props.height[1]]
          }px`,
        ]
      : props.height >= 0
      ? [...adaptivePaddingSizes, `${sectionHeights[props.height]}px 30px`]
      : [...adaptivePaddingSizes, `${sectionHeights[1]}px 30px`],
    width: '100%',
    maxWidth: props.size
      ? ['100%', props.theme.sizes[props.size]]
      : ['100%', '100%', '100%', '1020px', props.theme.sizes[0]],
  })
);

export const InnerSection = styled.div`
  position: relative;
`;

export const AbsoluteSection = styled.div`
  @media (min-width: 1280px) {
    width: 150%;
  }
`;

export const MainSectionWithSidebar = styled(MainSection)(
  css({
    display: 'grid',
    gridGap: '40px',
    gridTemplateColumns: [
      '1fr',
      '140px 1fr',
      '160px 1fr',
      '170px 1fr',
      '250px 1fr',
    ],
  })
);

export const ContentSection = styled.div`
  display: block;
`;

const headingSizes = {
  1: 124,
  2: 184,
};

export const Heading = styled.h1((props) =>
  css({
    fontFamily: props.theme.fonts.optional,
    fontSize: [60, 70, 80, 90, headingSizes[props.size]],
  })
);

const subHeadingSizes = {
  1: 48,
  2: 58,
};

export const SubHeadingDefault = styled.h2((props) =>
  css({
    textTransform: 'uppercase',
    color: props.theme.colors.primary.alternate,
    fontSize: [30, 35, 35, 35, subHeadingSizes[props.size]],
  })
);

export const SubHeading = styled(SubHeadingDefault)`
  ${({ textAlign }) => textAlign && getStyleString(textAlign, 'text-align')}

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const ButtonsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  gap: 30px;
`;

export const TitleHolder = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-wrap: row wrap;

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

  ${({ direction }) =>
    direction === 'column'
      ? `flex-direction: column;`
      : 'flex-direction: row; align-items: center;'}

  ${({ mb }) => mb && `&:not(:last-child) { margin-bottom: ${GUTTERS[mb]}px}`}

  @media (min-width: 768px) {
    ${({ border }) => border && `padding-left: 40px;`}
  }
`;

export const Title = styled.h2`
  position: relative;
  display: inline-block;
  text-transform: uppercase;

  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`}
  ${({ mb }) => mb && `&:not(:last-child) { margin-bottom: ${GUTTERS[mb]}px}`}

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

export const Line = styled.span`
  margin-left: 35px;
  display: block;
  width: 400px;
  height: 2px;
  background-color: ${themeGet('colors.primary.alternate')};
  content: '';

  @media (max-width: 1280px) {
    width: 160px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleWithLine = ({ children, ...rest }) => {
  return (
    <TitleWrap>
      <Title {...rest}>{children}</Title>
      <Line />
    </TitleWrap>
  );
};

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid ${themeGet('colors.text.medium')};

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  th,
  td {
    margin: 0;
    padding: 1.25rem;
    line-height: 1.3;
    font-size: ${themeGet('fontSizes.base')}px;
    font-weight: ${themeGet('fontWeights.regular')};
    border-bottom: 1px solid ${themeGet('colors.text.medium')};
    border-right: 1px solid ${themeGet('colors.text.medium')};

    :last-child {
      border-right: 0;
    }
  }

  th {
    font-size: ${themeGet('fontSizes.up')}px;
  }

  tr {
    :last-child {
      td {
        @media (min-width: 768px) {
          border-bottom: 0;
        }
      }
    }
  }

  tfoot {
    td {
      border-top: 1px solid ${themeGet('colors.text.medium')};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 767px) {
    thead,
    tbody,
    tfoot,
    th,
    tr,
    td {
      display: block;
    }

    tbody {
      tr {
        &:nth-child(odd) > {
          td {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }

    thead {
      display: none;
    }

    tr {
      td {
        position: relative;
        padding-left: 52%;

        &:before {
          position: absolute;
          top: 50%;
          left: 0.9375rem;
          width: 45%;
          content: attr(data-title);
          padding-right: 0.625rem;
          transform: translateY(-50%);
        }

        @media (max-width: 575px) {
          padding-left: 40%;

          &:before {
            width: 35%;
          }
        }
      }
    }
  }
`;

export const LineTitle = styled.h4`
  display: inline-block;
  position: relative;
  text-transform: uppercase;

  ${(props) =>
    props.titleWithLine &&
    `&:after {
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    transform: translateY(-50%);
    width: 400px;
    height: 3px;
    background-color: ${props.theme.colors.primary.alternate};
    content: '';
  }`}

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const WidgetTitle = styled.h4`
  position: relative;
  color: ${themeGet('colors.white')};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:after {
    position: absolute;
    left: -70px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 4px;
    background-color: ${themeGet('colors.primary.alternate')};
    content: '';

    @media (max-width: 1610px) {
      display: none;
    }
  }
`;

export const SubTitle = styled.h2`
  font-family: ${themeGet('fonts.optional')};
`;

export const BorderWrapper = styled.div`
  ${({ borderLeft }) =>
    borderLeft &&
    `border-left: 1px solid rgba(255, 255, 255, 0.2); padding-left: 40px;`}
  ${({ borderRight }) =>
    borderRight &&
    `border-right: 1px solid rgba(255, 255, 255, 0.2); padding-right: 40px;`}

  @media (max-width: 768px) {
    padding: 0;
    border: none;
  }
`;

export const Headline = styled.h6`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes['sm']}px;
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${(props) => props.theme.menu.color};
  display: inline-block;

  &:before {
    display: inline-block;
    vertical-align: middle;
    margin-right: 14px;
    height: 16px;
    width: 2px;
    background-color: ${(props) => props.theme.menu.color};
    content: '';
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Divider = styled.span`
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  ${({ pos }) => (pos === 'top' ? 'margin-bottom: 40px;' : 'margin-top: 40px;')}
`;

export const Paragraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Text = styled.div`
  p {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

export const VideoLink = styled.a`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  svg {
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:before,
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
  }

  &:after {
    transition: opacity 0.45s ease;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: opacity 0s ease, box-shadow 0.2s ease;

  &:hover {
    ${VideoLink} {
      svg {
        transition-delay: 0.25s;
        opacity: 1;
      }

      &:after {
        opacity: 0;
      }
    }
  }

  img {
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .site-img {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
`;

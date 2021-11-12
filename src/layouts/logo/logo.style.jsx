import styled from 'styled-components';
import css from '@styled-system/css';

export const MenuIconHolder = styled.div`
  display: none;
  margin-right: 25px;

  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const LogoBox = styled.span(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  })
);

export const LogoImage = styled.img({
  display: 'block',
  maxWidth: 124,
});

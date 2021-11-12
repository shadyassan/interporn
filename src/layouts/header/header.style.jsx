import styled from 'styled-components';
import css from '@styled-system/css';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: 'center';
  justify-content: space-between;
  padding: 15px 45px;
  margin: 0 auto;
  width: 100%;
  transition: background-color 0.25s ease;

  @media (max-width: 1280px) {
    padding: 15px 30px;
  }

  &.is-scrolling {
    background-color: ${(props) => props.theme.colors.body.bg};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default HeaderWrapper;

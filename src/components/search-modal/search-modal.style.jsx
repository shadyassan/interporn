import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  overflow: auto;
  border-radius: ${themeGet('radii.small')};
  border: 0;
  width: min(
    ${({ width }) => (width >= 0 ? `${width}px` : '700px')},
    calc(100vw - 40px)
  );
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
`;

export const StyledButton = styled.button`
  background: none;
  padding: 0;
  margin: 0 0 0 15px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.white};
`;

import styled from 'styled-components';

export const NotFoundWrap = styled.h5`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.optional};
  font-size: ${(props) => props.theme.fontSizes['2xlup']}px;

  ${({ columns }) => columns && `grid-column: span ${columns}`};
`;

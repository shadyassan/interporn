import styled from 'styled-components';

export const PaginationStyles = styled.div`
  margin-top: 45px;

  .pagination-bullet-item {
    width: auto;
    height: auto;
    border-radius: 0;
    background: transparent;
    opacity: 1;
    margin: 0 5px;
    text-align: center;
    width: 20px;
    height: 20px;

    .home-pagination-bullet {
      width: 4px;
      height: 18px;
      display: inline-block;
      background-color: #77797f;
      opacity: 1;
      margin: 0;
      transform: rotate(10deg);
      vertical-align: middle;
      border-radius: 0;
      transition: background-color 0.25s ease;
    }

    &.swiper-pagination-bullet-active {
      .home-pagination-bullet {
        width: 16px;
        height: 16px;
        border: none;
        background-color: ${(props) => props.theme.colors.primary.alternate};
        border-radius: 50%;
      }
    }
  }
`;

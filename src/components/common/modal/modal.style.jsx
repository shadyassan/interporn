import styled from 'styled-components';

export const ModalWrapper = styled.div`
  .modal-root {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 50;

    .modal-close {
      position: absolute;
      right: 20px;
      top: 20px;
      border: none;
      background-color: transparent;
      outline: none;
      color: ${(props) => props.theme.colors.white};
    }
  }

  .modal-motion {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    .modal-full {
      position: absolute;
      width: auto;
      left: 50%;
      top: 50%;
      height: auto;
      max-height: 100%;
      transform: translate(-50%, -50%);

      .modal-overflow {
        overflow-y: auto;
        height: 100%;
        max-height: calc(100vh - 140px);
      }
    }
  }
`;

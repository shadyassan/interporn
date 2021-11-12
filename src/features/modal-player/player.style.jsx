import styled from 'styled-components';
import css from '@styled-system/css';

/* Controls */

const controlHeight = 50;

export const ControlsWrapper = styled.div((props) =>
  css({
    visibility: 'visible',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: controlHeight + 'px',
    width: '100%',
    display: 'flex',
  })
);

export const ControlBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Control = styled.div`
  display: flex;
  padding: 0 25px;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
`;

export const ProgressControl = styled(Control)`
  flex: auto;
  padding: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  color: #fff;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: none;
  appearance: none;
`;

export const VolumeControl = styled(Control)`
  width: 200px;

  ${Button} {
    margin-right: 15px;
  }
`;

export const Text = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes['up']}px;
`;

/* Player */

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PlayerArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
`;

export const BezelWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 52px;
  height: 52px;
  z-index: 19;
  color: #fff;
  margin-left: -26px;
  margin-top: -26px;
  background: rgba(198, 18, 24, 0.4);
  border-radius: 50%;
  animation: bezel-fadeout 0.5s linear 1 normal forwards;
  pointer-events: none;

  @keyframes bezel-fadeout {
    0% {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }

  .bezel-icon {
    width: 48px;
    height: 48px;
    margin: 2px;

    svg {
      pointer-events: none;
    }
  }
`;

export const EndScreen = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: bottom 0.25s cubic-bezier(0, 0, 0.2, 1),
    top 0.25s cubic-bezier(0, 0, 0.2, 1);
`;

export const EndScreenContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const MaxContent = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const ChoiceQuestion = styled.h4`
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes['1xl']}px;
  text-align: center;
  text-transform: uppercase;
`;

export const ChoicesItems = styled.div`
  display: flex;
`;

export const ChoiceItem = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.body.bg};
  align-self: center;
  margin: 10px;
  transition: all 0.25s ease;
  transform: translate3d(0, 0, 0);

  &:hover {
    background-color: rgba(209, 17, 23, 0.5);
  }
`;

export const ChoiceInfo = styled.div`
  position: relative;
  padding: 25px;
`;

export const ChoiceTitle = styled.h6`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes['xl']}px;
  line-height: 1.4;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ChoiceDescription = styled.p`
  text-align: left;
`;

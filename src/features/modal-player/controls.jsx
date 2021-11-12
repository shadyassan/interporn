import { forwardRef } from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
import { SliderStyle } from 'assets/styles/slider.style';
const { Handle } = Slider;

import {
  ControlsWrapper,
  ControlBar,
  ProgressControl,
  VolumeControl,
  Control,
  Button,
  Text,
} from './player.style';

import PlayIcon from 'components/icons/PlayIcon';
import PauseIcon from 'components/icons/PauseIcon';
import VolumeDownIcon from 'components/icons/VolumeDownIcon';
import VolumeUpIcon from 'components/icons/VolumeUpIcon';
import VolumeMuteIcon from 'components/icons/VolumeMuteIcon';
import FullScreenIcon from 'components/icons/FullScreenIcon';
import FullScreenExitIcon from 'components/icons/FullScreenExitIcon';

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} %`}
      visible={dragging}
      placement="top"
      key={index}>
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onPlayPause,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onToggleFullScreen,
      fullscreen,
      volume,
      onVolumeChange,
    },
    ref
  ) => {
    return (
      <ControlsWrapper ref={ref}>
        <ControlBar>
          <Control>
            <Button onClick={onPlayPause}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </Button>
          </Control>
          <ProgressControl>
            <Slider
              min={0}
              max={100}
              tipFormatter={(value) => `${value}%`}
              value={played * 100}
              handle={handle}
              onChange={onSeek}
              onBeforeChange={onSeekMouseDown}
              onAfterChange={onSeekMouseUp}
            />
          </ProgressControl>
          <Control>
            <Text>
              {elapsedTime} / {totalDuration}
            </Text>
          </Control>
          <VolumeControl>
            <Button onClick={onMute}>
              {muted ? (
                <VolumeMuteIcon />
              ) : volume > 0.5 ? (
                <VolumeUpIcon />
              ) : (
                <VolumeDownIcon />
              )}
            </Button>
            <Slider
              min={0}
              max={100}
              value={muted ? 0 : volume * 100}
              onBeforeChange={onSeekMouseDown}
              onAfterChange={onVolumeSeekDown}
              onChange={onVolumeChange}
            />
          </VolumeControl>
          <Control>
            <Button onClick={onToggleFullScreen}>
              {fullscreen ? <FullScreenExitIcon /> : <FullScreenIcon />}
            </Button>
          </Control>
        </ControlBar>
        <SliderStyle />
      </ControlsWrapper>
    );
  }
);

export default Controls;

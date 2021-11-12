import { useState, useEffect, useRef } from 'react';
import screenful from 'screenfull';
import ReactPlayer from 'react-player';
import Controls from './controls';

import { PlayerWrapper, PlayerArea, BezelWrapper } from './player.style';

import PlayBezelIcon from 'components/icons/PlayBezelIcon';
import PauseBezelIcon from 'components/icons/PauseBezelIcon';

import { timeFormat } from 'utils';

const Bezel = ({ action }) => {
  const [hidden, setHidden] = useState(true);
  let timer = useRef();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    setHidden(false);

    timer.current = setTimeout(() => {
      setHidden(true);
    }, 500);

    return () => {
      clearTimeout(timer.current);
      timer.current = null;
    };
  }, [action]);

  const style = hidden ? { display: 'none' } : null;

  return (
    <BezelWrapper style={style}>
      <div className="bezel-icon">
        {action ? <PlayBezelIcon /> : <PauseBezelIcon />}
      </div>
    </BezelWrapper>
  );
};

const Player = ({
  url,
  image = false,
  width = '100%',
  height = '100vh',
  onEnded,
  endedVideo,
  component,
}) => {
  const [
    {
      playing,
      controls,
      fullscreen,
      light,
      muted,
      loop,
      pip,
      played,
      seeking,
      volume,
    },
    setState,
  ] = useState({
    pip: false,
    playing: true,
    fullscreen: false,
    controls: false,
    light: image,
    muted: false,
    played: 0,
    duration: 0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const countRef = useRef(null);
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);

  const handlePlayPause = () => {
    setState((state) => ({ ...state, playing: !state.playing }));
  };

  const handleProgress = (changeState) => {
    if (countRef.current > 3) {
      controlsRef.current.style.visibility = 'hidden';
      countRef.current = 0;
    }
    if (controlsRef.current.style.visibility == 'visible') {
      countRef.current += 1;
    }

    if (!seeking) {
      setState((state) => ({ ...state, ...changeState }));
    }
  };

  const handleSeekChange = (newValue) => {
    setState((state) => ({ ...state, played: parseFloat(newValue / 100) }));
  };

  const handleSeekMouseDown = (e) => {
    setState((state) => ({ ...state, seeking: true }));
  };

  const handleSeekMouseUp = (newValue) => {
    setState((state) => ({ ...state, seeking: false }));
    playerRef.current.seekTo(newValue / 100, 'fraction');
  };

  const handleVolumeSeekDown = (newValue) => {
    setState((state) => ({
      ...state,
      seeking: false,
      volume: parseFloat(newValue / 100),
    }));
  };

  const handleVolumeChange = (newValue) => {
    setState((state) => ({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    }));
  };

  const toggleFullScreen = () => {
    setState((state) => ({ ...state, fullscreen: !state.fullscreen }));
    screenful.toggle(playerContainerRef.current);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = 'visible';
    countRef.current = 0;
  };

  const handleMouseLeave = () => {
    controlsRef.current.style.visibility = 'hidden';
    countRef.current = 0;
  };

  const handleMute = () => {
    setState((prev) => ({ ...prev, muted: !prev.muted }));
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : '00:00';

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : '00:00';

  const elapsedTime = timeFormat(currentTime);
  const totalDuration = timeFormat(duration);

  return (
    <PlayerWrapper
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={playerContainerRef}>
      <ReactPlayer
        ref={playerRef}
        width={width}
        height={height}
        url={url}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        volume={volume}
        muted={muted}
        onEnded={onEnded}
        onProgress={handleProgress}
        className="react-player fullHeight"
      />
      <PlayerArea onClick={handlePlayPause} />
      <Bezel action={playing} />
      <Controls
        ref={controlsRef}
        onSeek={handleSeekChange}
        onSeekMouseDown={handleSeekMouseDown}
        onSeekMouseUp={handleSeekMouseUp}
        onPlayPause={handlePlayPause}
        playing={playing}
        played={played}
        elapsedTime={elapsedTime}
        totalDuration={totalDuration}
        onMute={handleMute}
        muted={muted}
        onVolumeChange={handleVolumeChange}
        onVolumeSeekDown={handleVolumeSeekDown}
        onToggleFullScreen={toggleFullScreen}
        fullscreen={fullscreen}
        volume={volume}
      />
      {endedVideo && component && component()}
    </PlayerWrapper>
  );
};

export default Player;

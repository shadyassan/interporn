import 'react-responsive-modal/styles.css';
import { useUI } from 'contexts/ui.context';
import Modal from 'react-responsive-modal';
import Player from './player';
import VideoWall from './videowall';

const modalStyles = {
  modal: {
    maxWidth: 'unset',
    width: '100%',
    padding: 'unset',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {},
};

const ModalPlayer = () => {
  const { isModalOpen, endedVideo, video, closePlayer, setEndedClip } = useUI();

  return (
    <Modal open={isModalOpen} onClose={closePlayer} styles={modalStyles}>
      <Player
        url={video}
        endedVideo={endedVideo}
        onEnded={() => setEndedClip(true)}
        component={() => <VideoWall title="what's your next move?" />}
      />
    </Modal>
  );
};

export default ModalPlayer;

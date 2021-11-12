import dynamic from 'next/dynamic';

const VideoList = dynamic(() =>
  import('components/video-grid/video-list-user')
);

const AccountMyVideo = () => {
  return <VideoList title="Video" />;
};

export default AccountMyVideo;

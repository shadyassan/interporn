import dynamic from 'next/dynamic';
import { VideoContainer, VideoHolder, VideoRow } from './video-list.style';
import { TitleHolder, Title } from 'assets/styles/pages.style';

const Card = dynamic(import('components/card/card-two'));

const VideoListTwo = ({ limit = 10, data, columns = 4, title }) => {
  if (Object.keys(data).length === 0) return null;

  return (
    <VideoContainer>
      <TitleHolder mb={3}>{title && <Title>{title}</Title>}</TitleHolder>
      <VideoHolder>
        <VideoRow columns={columns}>
          {Object.keys(data)
            .slice(0, limit)
            .map((key) => (
              <Card key={key} data={data[key]} />
            ))}
        </VideoRow>
      </VideoHolder>
    </VideoContainer>
  );
};

export default VideoListTwo;

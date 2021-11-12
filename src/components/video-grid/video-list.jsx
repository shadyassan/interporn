import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Loader from 'components/loader/loader';
import NotFound from 'components/common/not-found/index';
import { VideoContainer, VideoHolder, VideoRow } from './video-list.style';
import { useGamesQuery } from '@framework/games/get-all-games';
import { ButtonWrapper, Button } from 'components/common/button/button';
import { TitleHolder, Title } from 'assets/styles/pages.style';

const Card = dynamic(import('components/card/card'));

const VideoList = ({
  border = false,
  component,
  titleWithLine = false,
  columns = 3,
  title,
}) => {
  const router = useRouter();
  const { ...rest } = router.query;

  const {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useGamesQuery({ ...rest, limit: 6 });

  if (error) return <NotFound columns={columns} title={error.message} />;

  return (
    <VideoContainer>
      <TitleHolder mb={3} justifyContent="space-between" border={border}>
        {title && <Title titleWithLine={titleWithLine}>{title}</Title>}
        {component && component()}
      </TitleHolder>
      <VideoHolder border={border}>
        <VideoRow columns={columns}>
          {isLoading && !data?.pages?.length ? (
            <Loader />
          ) : (
            <Fragment>
              {data?.pages.map((items, idx) => (
                <Fragment key={idx}>
                  {items?.data.length > 0 ? (
                    items?.data.map((item) => (
                      <Card key={item.id} data={item} />
                    ))
                  ) : (
                    <NotFound
                      columns={columns}
                      title="No shows were found matching your selection"
                    />
                  )}
                </Fragment>
              ))}
            </Fragment>
          )}
        </VideoRow>
        {hasNextPage && (
          <ButtonWrapper>
            <Button
              loading={loadingMore}
              disabled={loadingMore}
              onClick={() => fetchNextPage()}>
              Load More
            </Button>
          </ButtonWrapper>
        )}
      </VideoHolder>
    </VideoContainer>
  );
};

export default VideoList;

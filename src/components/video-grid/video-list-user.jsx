import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import Loader from 'components/loader/loader';
import NotFound from 'components/common/not-found/index';
import { VideoContainer, VideoHolder, VideoRow } from './video-list.style';
import { useUserGamesQuery } from '@framework/games/get-all-games-user';
import { ButtonWrapper, Button } from 'components/common/button/button';
import { TitleHolder, Title } from 'assets/styles/pages.style';
import { sortBy } from 'utils';

const Card = dynamic(import('components/card/card-user'));

const Dropdown = dynamic(() =>
  import('components/common/form/dropdown/dropdown')
);

const VideoList = ({ columns = 2, title = '' }) => {
  const {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useUserGamesQuery({ limit: 4 });

  if (error) return <NotFound columns={columns} title={error.message} />;

  return (
    <VideoContainer>
      <TitleHolder mb={3} justifyContent="space-between">
        {title && <Title>{title}</Title>}
        <Dropdown options={sortBy} />
      </TitleHolder>
      <VideoHolder>
        <VideoRow columns={columns}>
          {isLoading && !data?.pages?.length ? (
            <Loader />
          ) : (
            <Fragment>
              {data?.pages.map((items, idx) => (
                <Fragment key={idx}>
                  {items?.data.length > 0 ? (
                    items.data.map((item) => <Card key={item.id} data={item} />)
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

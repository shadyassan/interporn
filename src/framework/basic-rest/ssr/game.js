import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { fetchGame, fetchGames } from '../games/games.query';

export async function getStaticPaths() {
  const games = await fetchGames({
    queryKey: [API_ENDPOINTS.GAMES, { limit: 0 }],
  });

  const paths = games?.data?.map((game) => ({ params: { id: game.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }) => {
  const id = params?.id;
  const queryClient = new QueryClient();

  try {
    const data = await fetchGame(id);
    return {
      props: {
        data,
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

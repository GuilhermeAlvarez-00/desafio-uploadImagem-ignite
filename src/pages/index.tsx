import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface ImageData {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface FetchResponseImage {
  after: string;
  data: ImageData[];
}

export default function Home(): JSX.Element {
  async function fetchImages({
    pageParam = null,
  }): Promise<FetchResponseImage> {
    const response = await api('/api/images', {
      params: {
        after: pageParam,
      },
    });
    const data = response.data;

    return data;
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', fetchImages, {
    getNextPageParam: lastPage => lastPage.after || null,
  });

  const formattedData = useMemo(() => {
    const formattedArray = data?.pages.flatMap(image => image.data);
    return formattedArray;
  }, [data]);

  if (isLoading && !isError) {
    return <Loading />;
  }

  if (isError && !isLoading) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {isFetchingNextPage ? (
          <Button mt="40px">Carregando...</Button>
        ) : hasNextPage ? (
          <Button mt="40px" onClick={() => fetchNextPage()}>
            Carregar mais
          </Button>
        ) : null}
      </Box>
    </>
  );
}

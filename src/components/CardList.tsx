import { Grid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string) {
    console.log(url);
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <Grid templateColumns={'repeat(3, 1fr)'} gap="40px">
        {cards?.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </Grid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}

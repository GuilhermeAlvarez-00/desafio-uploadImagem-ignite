import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxW={['300px', '500px', '900px']}
        maxH={['350px', '450px', '600px']}
        bg="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            alt="Modal com a imagem com um link para abrir a original em outra página"
            maxW={['300px', '500px', '900px']}
            maxH={['350px', '450px', '600px']}
          />
          <ModalFooter
            w="auto"
            bg="pGray.900"
            display="flex"
            justifyContent="flex-start"
            borderBottomLeftRadius={5}
            borderBottomRightRadius={5}
          >
            <Link href={imgUrl} isExternal>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

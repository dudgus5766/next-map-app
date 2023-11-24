import Image from 'next/image';
import type { Store } from '@/types/store';
import styled from 'styled-components';

type Props = {
  currentStore?: Store;
  expanded: boolean;
};

export default function DetailContent({ currentStore, expanded }: Props) {
  return (
    <Container className={`${expanded ? 'expanded' : ''}`}>
      <ImageContainer>
        {currentStore?.images.slice(0, 3).map((image) => (
          <Images
            style={{ position: 'relative', maxWidth: 120, height: 80 }}
            key={image}
          >
            <Image
              src={image}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
            />
          </Images>
        ))}
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  &.expanded {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 120px));
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  padding: 0 20px;
`;

const Images = styled.div`
  position: relative;
  max-width: 120px;
  max-height: 80px;
`;

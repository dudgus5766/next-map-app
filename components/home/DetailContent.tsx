import Image from 'next/image';
import type { Store } from '@/types/store';
import styled from 'styled-components';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import NaverIcon from '@/public/images/naver.png';
import Space from '@/utils/Space';

type DetailContentProps = {
  currentStore?: Store;
  expanded: boolean;
};

export default function DetailContent({
  currentStore,
  expanded,
}: DetailContentProps) {
  if (!currentStore) return null;

  return (
    <Container className={`${expanded ? 'expanded' : ''}`}>
      <ImageContainer>
        {currentStore.images.slice(0, 3).map((image) => (
          <Images
            style={{ position: 'relative', maxWidth: 120, height: 80 }}
            key={image}
          >
            <Image
              src={image}
              alt="음식 사진"
              fill
              sizes="100%"
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
            />
          </Images>
        ))}
      </ImageContainer>

      {expanded && (
        <>
          <div>
            <TitleText>설명</TitleText>
            <DescriptionText>{currentStore.description}</DescriptionText>
          </div>
          <Space size={20} underline />
          <InfoContainer>
            <TitleText>기본 정보</TitleText>
            <InfoWrapper>
              <IoLocationOutline size={20} />
              <InfoText>{currentStore.address || '정보가 없습니다.'}</InfoText>
            </InfoWrapper>
            <InfoWrapper>
              <IoCallOutline size={20} />
              <InfoText>{currentStore.phone || '정보가 없습니다.'}</InfoText>
            </InfoWrapper>
            <InfoWrapper>
              <Image src={NaverIcon} width={20} height={20} alt="" />
              <a
                href={`https://pcmap.place.naver.com/restaurant/${currentStore.nid}/home`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <InfoText>네이버 상세 정보</InfoText>
              </a>
            </InfoWrapper>
          </InfoContainer>
          <Space size={20} underline />
          <InfoContainer>
            <TitleText>메뉴</TitleText>
            <ul>
              {currentStore.menus?.map((menu) => (
                <MenuWrapper key={menu.name}>
                  <MenuText>{menu.name}</MenuText>
                  <span>{menu.price}</span>
                </MenuWrapper>
              ))}
            </ul>
          </InfoContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0 20px;

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
  margin-bottom: 25px;
`;

const Images = styled.div`
  position: relative;
  max-width: 120px;
  max-height: 80px;
`;

const TitleText = styled.h2`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.boldGray};
  margin-bottom: 20px;
`;

const DescriptionText = styled.p``;
const InfoText = styled.span`
  margin-left: 10px;
`;

const InfoContainer = styled.div`
  //flex
  ${({ theme }) => theme.MIXINS.flexBox('column', 'start', 'flex-start')}
`;

const InfoWrapper = styled.div`
  //flex
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')}
  margin-bottom: 8px;
`;

const MenuWrapper = styled.li`
  //flex
  ${({ theme }) => theme.MIXINS.flexBox('row', 'start', 'space-between')}
  margin-bottom: 16px;
`;

const MenuText = styled.span`
  max-width: 70%;
  word-break: keep-all;
  margin-right: 10px;
`;

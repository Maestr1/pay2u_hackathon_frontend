import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { SwiperEvents } from 'swiper/types';
import { useState } from 'react';

const Section = styled.section`
  padding-bottom: 28px;
  height: calc(100svh - 72px);
`;

const GuideSwiperSlide = styled(SwiperSlide)`
  height: 300px;
`;

export default function GuidePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  // const [title, setTitle] = useState('');


  return (
    <Section>
      <Swiper
        onRealIndexChange={(element) => setActiveSlide(element.activeIndex)}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <GuideSwiperSlide>Slide 1</GuideSwiperSlide>
        <GuideSwiperSlide>Slide 2</GuideSwiperSlide>
      </Swiper>
      <h1></h1>
      <p>{activeSlide === 0 ? 'Управляйте подписками' : 'Все в одном месте'}</p>
    </Section>
  );
}

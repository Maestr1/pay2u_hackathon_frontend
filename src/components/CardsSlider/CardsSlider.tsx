import { ReactElement } from 'react';
import './CardsSlider.scss';
import CardListHeader from '../CardListHeader/CardListHeader.tsx';
import { useSelector } from '../../hooks/store.ts';
import { ISubscription } from '../../utils/interfaces/interfaces.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import ServiceCard from '../ServiceCard/ServiceCard.tsx';

interface ICardsSliderProps {
  title: string;
  cardType: 'square' | 'big';
  link: string;
  items: ISubscription[];
  slidesPerView: number;
}

function CardsSlider(props: ICardsSliderProps): ReactElement {
  const availableSubscriptions = useSelector(
    (store) => store.availableSubscriptionsReducer.availableSubscriptions
  );


  return (
    <section className="cards-slider">
      <CardListHeader title={props.title} link={props.link} />
      <div className="cards-slider__wrapper">
        <Swiper tag="ul" slidesPerView={props.slidesPerView} spaceBetween={8}>
          {availableSubscriptions.map((card, index) => (
            <SwiperSlide tag="li" key={`card-${index}`}>
              <ServiceCard card={card} cardType={props.cardType} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CardsSlider;

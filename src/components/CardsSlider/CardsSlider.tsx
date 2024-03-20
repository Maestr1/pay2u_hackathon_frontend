import { ReactElement, useEffect, useRef, useState } from 'react';
import './CardsSlider.scss';
import CardListHeader from '../CardListHeader/CardListHeader.tsx';
import { useSelector } from '../../hooks/store.ts';
import { ISubscription } from '../../utils/fakeData.ts';

interface ICardsSliderProps {
  title: string,
  cardType: 'square' | 'big',
  link: string,
  items: ISubscription[]
}

function CardsSlider(props: ICardsSliderProps): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions);


  return (
    <section className="cards-slider">
      <CardListHeader title={ props.title } link={ props.link }/>
      <div className="slider">
        <div
          className={ `slider__container ${ props.cardType === 'square' ? 'slider__container_type_square' : '' }` }>
          { availableSubscriptions.map((card, index) => (
            <div key={ index } className="slider__card">
              <img src={ props.cardType === 'square' ? card.iconSquare : card.iconBig } alt=""/>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}

export default CardsSlider;

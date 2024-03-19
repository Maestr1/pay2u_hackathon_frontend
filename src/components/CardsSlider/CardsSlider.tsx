import { ReactElement } from "react";
import './CardsSlider.scss'
import CardListHeader from '../CardListHeader/CardListHeader.tsx';
import { useSelector } from '../../hooks/store.ts';

interface ICardsSliderProps {
  title: string,
  cardType: string,
  link: string
}

function CardsSlider(props: ICardsSliderProps): ReactElement {

  const availableSubscriptions = useSelector(store => store.availableSubscriptionsReducer.availableSubscriptions)

  return (
    <section>
      <CardListHeader title={ props.title } link={ props.link }/>
      <div className="slider-container">
        <div className="slider">
          {availableSubscriptions.map((card, index) => (
            <div key={index} className="card">
              <img src={card.iconSquare} alt=""/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSlider;

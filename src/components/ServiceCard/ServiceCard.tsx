import { ReactElement } from 'react';
import { ISubscription } from '../../utils/fakeData';
import { Link } from 'react-router-dom';
import './ServiceCard.scss'

interface ICardProps {
  card: ISubscription;
  cardType: 'square' | 'big'
}

function ServiceCard(props: ICardProps): ReactElement {
  return (
    <Link className='big-card' to={ `services/${ props.card.id }` }>
      <img src={ props.cardType === 'square' ? props.card.iconSquare : props.card.iconBig } alt=""/>
    </Link>
  );
}

export default ServiceCard;

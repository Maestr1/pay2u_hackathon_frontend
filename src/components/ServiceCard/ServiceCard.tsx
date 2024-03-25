import { ReactElement } from 'react';
import { ISubscription } from '../../utils/interfaces/interfaces.ts';
import { Link } from 'react-router-dom';
import './ServiceCard.scss'

interface ICardProps {
  card: ISubscription;
  cardType: 'square' | 'big'
}

function ServiceCard(props: ICardProps): ReactElement {
  return (
    <Link className='big-card' to={ `/services/${ props.card.id }` }>
      <img src={ props.cardType === 'square' ? props.card.serviceIconSquare : props.card.serviceIconBig } alt=""/>
    </Link>
  );
}

export default ServiceCard;

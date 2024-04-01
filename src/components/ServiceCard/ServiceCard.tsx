import { ReactElement } from 'react';
import { ISubscription } from '../../utils/interfaces/interfaces.ts';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';

interface ICardProps {
  card: ISubscription;
  cardType: 'square' | 'big';
}

function ServiceCard(props: ICardProps): ReactElement {
  return (
    <Link className="big-card" to={`/services/${props.card.id}`}>
      <img
        src={
          props.cardType === 'square'
            ? props.card.icon_square
            : props.card.icon_big
        }
        alt=""
      />
    </Link>
  );
}

export default ServiceCard;

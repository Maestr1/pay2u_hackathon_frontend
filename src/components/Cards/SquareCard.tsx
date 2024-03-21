import { ReactElement } from 'react';
import { ISubscription } from '../../utils/fakeData';
import { Link } from 'react-router-dom';

interface ICardProps {
  card: ISubscription;
}

function SquareCard(props: ICardProps): ReactElement {
  return (
    <Link to={ `services/${ props.card.id }` }>
      <img src={ props.card.iconSquare } alt=""/>
    </Link>
  );
}

export default SquareCard;

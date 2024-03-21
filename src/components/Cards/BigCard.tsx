import { ReactElement } from 'react';
import { ISubscription } from '../../utils/fakeData';
import { Link } from 'react-router-dom';

interface ICardProps {
  card: ISubscription;
}

function BigCard(props: ICardProps): ReactElement {
  return (
    <Link to={ `services/${ props.card.id }` }>
      <img src={ props.card.iconBig } alt=""/>
    </Link>
  );
}

export default BigCard;

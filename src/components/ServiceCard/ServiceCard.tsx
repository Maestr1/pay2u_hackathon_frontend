import { ReactElement } from 'react';
import { IService } from '../../utils/interfaces/interfaces.ts';
import { Link } from 'react-router-dom';
import './ServiceCard.scss';
import Tag from '../uxComponents/Tag.tsx';

interface ICardProps {
  card: IService;
  cardType: 'square' | 'big';
}



function ServiceCard(props: ICardProps): ReactElement {
  return (
    <Link className={`card card_type_${props.cardType}`} to={`/services/${props.card.id}`}>
      {props.cardType === 'big' && <Tag/>}
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

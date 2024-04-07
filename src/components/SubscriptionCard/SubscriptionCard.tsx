import { Link } from 'react-router-dom';
import { ISubscription } from '../../utils/interfaces/interfaces';
import { styled } from 'styled-components';

interface IUserCardProps {
  card: ISubscription;
}

const Card = styled(Link)`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: var(--black);
`;

const CardImg = styled.img`
  max-height: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const NextPayment = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-2);
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

export default function UserCard(props: IUserCardProps) {
  const parts = props.card.expired_date.split('-');
  const newDate = `${parts[2]}.${parts[1]}.${parts[0]}`;

  return (
    <li>
      <Card to={`/services/${props.card.tariff.services.id}`}>
        <CardImg
          src={props.card.tariff.services.icon_small}
          alt={props.card.tariff.services.name}
        />
        <DescriptionWrapper>
          <TitleWrapper>
            <Title>{props.card.tariff.services.name}</Title>
            <span>{props.card.tariff.tariff_full_price} ₽</span>
          </TitleWrapper>
          <NextPayment>
            <span>
              {props.card.auto_payment ? `Спишется ` : 'Действует до '}
              {newDate}
            </span>
          </NextPayment>
        </DescriptionWrapper>
      </Card>
    </li>
  );
}

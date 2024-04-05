import { IServiceExtended } from '../../utils/interfaces/interfaces';
import { styled } from 'styled-components';

interface IUserCardProps {
  card: IServiceExtended;
}

const Card = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
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
  return (
    <Card>
      <CardImg src={props.card.icon_small} alt={props.card.name} />
      <DescriptionWrapper>
        <TitleWrapper>
          <Title>{props.card.name}</Title>
          <span>{props.card.payment?.cost || 'цена'} ₽</span>
        </TitleWrapper>
        <NextPayment>
          {props.card.payment?.nextPayment || 'Следующая оплата'}
        </NextPayment>
      </DescriptionWrapper>
    </Card>
  );
}

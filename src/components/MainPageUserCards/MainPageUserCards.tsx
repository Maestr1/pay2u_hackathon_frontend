import { Link } from 'react-router-dom';
import { useSelectorTyped } from '../../hooks/store';
import ServiceCard from '../ServiceCard/ServiceCard';
import styled from 'styled-components';
import CardListHeader from '../CardListHeader/CardListHeader';

const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  & a {
    flex-basis: 33%;
  }
`;

const UserServicesLink = styled(Link)`
padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  aspect-ratio: 1/1;
  background-color: var(--card-3);
  text-decoration: none;
  border-radius: 12px;
  color: var(--black);
  font-size: 12px;
  gap: 8px;
`;

const PlusSpan = styled.span`
  font-size: 28px;
  line-height: 0.6;
`;

export default function MainPageUserCards() {
  //TODO вернуть, как будут подписки
  // const userSubscriptions = useSelectorTyped(
  //   (store) => store.currentUserReducer.userSubscriptions
  // );

  const userSubscriptions = useSelectorTyped(
    (store) => store.availableSubscriptionsReducer.availableSubscriptions
  );
  const cardList = userSubscriptions.slice(0, 2);

  return (
    <section>
      <CardListHeader title="Мои подписки" link="/services/my-services/" />
      <CardWrapper>
        {cardList.map((card, index) => (
          <ServiceCard
            key={`user-card-${index}`}
            card={card}
            cardType="square"
          />
        ))}
        <UserServicesLink to={'/services/my-services/'}>
          <PlusSpan>+</PlusSpan>
          Добавить подписку
        </UserServicesLink>
      </CardWrapper>
    </section>
  );
}

import React from 'react';
import { IService, ISubscription } from '../../utils/interfaces/interfaces';
import UserCard from '../UserCard/UserCard';
import { styled } from 'styled-components';

interface IUserCardListProps {
  cardsList: IService[];
}

const Section = styled.section`
  padding-top: 20px;
`;

export default function UserCardList(props: IUserCardListProps) {
  const cardsList = props.cardsList.map((card, index) => (
    <UserCard card={card} key={`user-card-${index}`} />
  ));

  return <Section>{cardsList}</Section>;
}

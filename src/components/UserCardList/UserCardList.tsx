import React from 'react'
import { IService, ISubscription } from '../../utils/interfaces/interfaces'
import UserCard from '../UserCard/UserCard'


interface IUserCardListProps {
  cardsList: IService[]
}

export default function UserCardList(props: IUserCardListProps) {

const cardsList = props.cardsList.map((card, index) => (
  <UserCard card={card} key={`user-card-${index}`}/>
))

  return (
    <section>
      {cardsList}
    </section>
  )
}

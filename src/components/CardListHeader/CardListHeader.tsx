import React from 'react';
import { Link } from 'react-router-dom';
import './CardListHeader.scss'


interface CardListHeaderProps {
  title: string;
  link: string;
}

function CardListHeader(props: CardListHeaderProps): JSX.Element {
  return (
    <div className='card-list-header'>
      <h2>{props.title}</h2>
      <Link to={`${props.link}`}>Все</Link>
    </div>
  );
}

export default CardListHeader;
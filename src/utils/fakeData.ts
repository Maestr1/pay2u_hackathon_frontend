import serviceBig from '../images/cards_images/kinopoisk_big.png'
import serviceSquare from '../images/cards_images/oko_square.png'
import book from '../images/icons/books.svg'
import music from '../images/icons/music.svg'
import health from '../images/icons/heart.svg'
import video from '../images/icons/video.svg'

export type ISubscription = {
  id: string,
  name: string,
  category: string,
  startDate: string,
  endDate: string,
  subscriptionType: string,
  cost: number,
  iconBig: string,
  iconSquare: string
}

export interface IAvailableSubscriptions {
  availableSubscriptions: ISubscription[],
}

export type TSubscriptionsCategories = {
  id: string,
  name: string,
  description: string,
  icon: string
}[]


export const subscriptionsCategoriesData: TSubscriptionsCategories = [
  {
    id: '1',
    name: 'Книги',
    description: 'Книги по подписке',
    icon: book
  },
  {
    id: '2',
    name: 'Музыка',
    description: 'Музыка по подписке',
    icon: music
  },
  {
    id: '3',
    name: 'Здоровье',
    description: 'Здоровье по подписке',
    icon: health
  },
  {
    id: '4',
    name: 'Кино',
    description: 'Кино по подписке',
    icon: video
  }
];
export const subscriptionsData: IAvailableSubscriptions = {
  availableSubscriptions: [
    {
      id: '1',
      name: 'Подписка на 1 месяц',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 100,
      iconBig: serviceBig,
      iconSquare: serviceSquare
    },
    {
      id: '2',
      name: 'Подписка на 3 месяца',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 200,
      iconBig: serviceBig,
      iconSquare: serviceSquare
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: serviceBig,
      iconSquare: serviceSquare
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: serviceBig,
      iconSquare: serviceSquare
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: serviceBig,
      iconSquare: serviceSquare
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: serviceBig,
      iconSquare: serviceSquare
    }
  ]
};

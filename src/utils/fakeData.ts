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
    icon: 'src/images/icons/books.svg'
  },
  {
    id: '2',
    name: 'Музыка',
    description: 'Музыка по подписке',
    icon: 'src/images/icons/music.svg'
  },
  {
    id: '3',
    name: 'Здоровье',
    description: 'Здоровье по подписке',
    icon: 'src/images/icons/heart.svg'
  },
  {
    id: '4',
    name: 'Кино',
    description: 'Кино по подписке',
    icon: 'src/images/icons/video.svg'
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
      iconBig: 'src/images/cards_images/ivi_big.png',
      iconSquare: 'src/images/cards_images/ivi_square.png'
    },
    {
      id: '2',
      name: 'Подписка на 3 месяца',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 200,
      iconBig: 'src/images/cards_images/kinopoisk_big.png',
      iconSquare: 'src/images/cards_images/oko_square.png'
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: 'src/images/cards_images/plus_big.png',
      iconSquare: 'src/images/cards_images/spotify_square.png'
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: 'src/images/cards_images/plus_big.png',
      iconSquare: 'src/images/cards_images/spotify_square.png'
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: 'src/images/cards_images/plus_big.png',
      iconSquare: 'src/images/cards_images/spotify_square.png'
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: 'src/images/cards_images/plus_big.png',
      iconSquare: 'src/images/cards_images/spotify_square.png'
    }
  ]
};

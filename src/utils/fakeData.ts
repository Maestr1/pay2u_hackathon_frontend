export interface ISubscription {
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

export const mainData:IAvailableSubscriptions = {
  availableSubscriptions: [
    {
      id: '1',
      name: 'Подписка на 1 месяц',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 100,
      iconBig: '../images/card_images/ivi_big.png',
      iconSquare: './src/images/card_images/ivi_square.png'
    },
    {
      id: '2',
      name: 'Подписка на 3 месяца',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 200,
      iconBig: '../images/card_images/kinopoisk_big.png',
      iconSquare: '../images/card_images/oko_square.png'
    },
    {
      id: '3',
      name: 'Подписка на 6 месяцов',
      category: 'Базовая',
      startDate: '01.01.2022',
      endDate: '01.02.2022',
      subscriptionType: 'month',
      cost: 300,
      iconBig: '../images/card_images/plus_big.png',
      iconSquare: '../images/card_images/spotify_square.png'
    }
  ]
}

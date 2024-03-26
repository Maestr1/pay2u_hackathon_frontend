import serviceBig from '../images/cards_images/plus_big.png';
import serviceSquare from '../images/cards_images/oko_square.png';
import serviceSmall from '../images/cards_images/plus_small.png';
import book from '../images/icons/books.svg';
import music from '../images/icons/music.svg';
import health from '../images/icons/heart.svg';
import video from '../images/icons/video.svg';
import userImage from '../images/other_images/user.jpg';
import paymentMethodLogo1 from '../images/logos/sbp_logo.png';
import paymentMethodLogo2 from '../images/logos/master-card_logo.png';
import { ISubscription, IUser } from './interfaces/interfaces.ts';

export interface IAvailableSubscriptions {
  availableSubscriptions: ISubscription[];
}

export type TSubscriptionsCategories = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon?: string;
}[];

export const currentUser: IUser = {
  userId: '1',
  fullName: 'Иван Иванов',
  phone: '+7 999 999 99 99',
  email: 'WfNkN@example.com',
  login: 'login',
  userIcon: userImage,
  paymentMethods: [
    {
      id: '1',
      methodName: 'СБП',
      methodToken: 'card',
      priorityMethod: true,
      methodIcon: paymentMethodLogo1,
    },
    {
      id: '2',
      methodName: 'MasterCard **** 1324',
      methodToken: 'card',
      priorityMethod: false,
      methodIcon: paymentMethodLogo2,
    },
  ],
};

export const subscriptionsCategoriesData: TSubscriptionsCategories = [
  {
    id: '0',
    title: 'Книги',
    name: 'books',
    description: 'Книги по подписке',
    icon: book,
  },
  {
    id: '1',
    title: 'Музыка',
    name: 'music',
    description: 'Музыка по подписке',
    icon: music,
  },
  {
    id: '2',
    title: 'Здоровье',
    name: 'health',
    description: 'Здоровье по подписке',
    icon: health,
  },
  {
    id: '3',
    title: 'Кино',
    name: 'movies',
    description: 'Кино по подписке',
    icon: video,
  },
  {
    id: '4',
    title: 'Развлечения',
    name: 'entertainment',
    description: 'Кино по подписке',
    icon: video,
  },
];

export const subscriptionsData: ISubscription[] = [
  {
    id: '0',
    name: 'Кинопоиск',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: book,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '1',
    name: 'Яндекс.Плюс',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: book,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '2',
    name: 'Иви',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: book,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '2',
    name: 'Окко',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: book,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '2',
    name: 'Яндекс.Плюс',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: music,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '2',
    name: 'Кинопоиск',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: music,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '3',
    name: 'Кинопоиск',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: music,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '3',
    name: 'Кинопоиск',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: music,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '3',
    name: 'Подписка на 6 месяцов',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: video,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '4',
    name: 'Подписка на 6 месяцов',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: video,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '4',
    name: 'Подписка на 6 месяцов',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: video,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
  {
    id: '4',
    name: 'Подписка на 6 месяцов',
    category: [
      {
        id: '1',
        name: 'имя категории',
        description: 'описание категории',
        icon: video,
      },
    ],
    startDate: '01.01.2022',
    endDate: '01.02.2022',
    subscriptionType: 'month',
    link: 'ya.ru',
    serviceIconBig: serviceBig,
    serviceIconSquare: serviceSquare,
    serviceIconSmall: serviceSmall,
    serviceDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique tortor tortor. Aenean eget lectus nulla. Nullam et velit rutrum felis laoreet sagittis sed ultrices nibh. Phasellus id massa enim. Proin congue pellentesque magna, et fringilla arcu mollis at. Sed vitae nunc pulvinar est dignissim malesuada sit amet at justo.',
    serviceTariffList: [
      {
        tariffId: '1',
        tariffName: '1 месяц',
        tariffDescription: '',
        tariffPromoPrice: 199,
        tariffFullPrice: 399,
        tariffDuration: 1,
      },
      {
        tariffId: '2',
        tariffName: '6 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 1998,
        tariffFullPrice: 2394,
        tariffDuration: 6,
      },
      {
        tariffId: '3',
        tariffName: '12 месяцев',
        tariffDescription: '',
        tariffPromoPrice: 3996,
        tariffFullPrice: 4788,
        tariffDuration: 12,
      },
    ],
  },
];

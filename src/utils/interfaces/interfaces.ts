// Прошу считать все странные наименования и не логичные сплетения интерфейсов проблемой бэкендеров

export interface IService {
  id: number;
  name: string;
  link: string;
  category: ICategoryShort;
  icon_big: string;
  icon_square: string;
  icon_small: string;
  is_popuar: boolean;
}

export interface IServiceExtended extends IService {
  category: ICategory;
  description: string;
  tariff: ITariff[];
}

export interface IServiceCategory {
  category: ICategory;
  services: IServiceExtended[];
}

export interface ISubscription {
  created_at: string;
  id: number;
  is_active: boolean;
  tariff: ITariffExtended;
  updated_at: string;
  user: number;
  payment: IPayment;
}

export interface ITariff {
  id: number;
  name: string;
  tariff_full_price: number;
  tariff_promo_price: number;
  services_duration: string;
  description: string;
}

export interface ITariffExtended extends ITariff {
  services: IService;
}

export interface ICashback {
  id: number;
  serviceId: number;
  type_cashback: 'percentage' | 'fixed_amount';
  amountCashback: number;
}

export interface ICashbackSubscription {
  tariffId: number;
  userId: number;
  paymentId: number;
  accruedСashback: number;
  status: 'cashback_completed' | 'cashback_not_received';
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface ICategoryShort {
  name: string;
  slug: string;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;

  paymentMethods: IPaymentMethod[];
  subscriptions: ISubscription[];
}

export interface IPaymentMethod {
  id: number;
  methodName: string;
  methodToken: string;
  priorityMethod: boolean;
  methodIcon: string;
}

export interface IPurchseShippingFields {
  userId: number;
  phoneNumber: string;
  paymentMethodId: number;
  subscriptionId: number;
  autopayment: boolean;
}

export interface ISearchShippingFields {
  query: string;
}

export interface IPayment {
  id: number;
  subscription: number;
  payment_methods: number;
  cost: string;
  paymentDate: string;
  expiredDate: string;
  status: string;
  cashback: ICashbackSubscription;
}

export interface IFaq {
  id: number;
  topic_question: string;
  question: string;
  answer: string;
  created: string;
  updated: string;
}

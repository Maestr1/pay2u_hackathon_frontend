export interface IService {
  id: number;
  name: string;
  category: ICategory;
  link: string;
  icon_big: string;
  icon_square: string;
  icon_small: string;
  description: string;
  tariff: ITariff[];
}

export interface IServiceShort {
  //TODO сделать сокращенную версию
}

export interface IServiceCategory {
  category: ICategory;
  services: IService[];
}

export interface ISubscription {
  created_at: string;
  id: number;
  is_active: boolean;
  tariff: ITariff;
  updated_at: string;
  user: number;
  service: IService;
}

export interface ITariff {
  id: number;
  name: string;
  tariff_full_price: number;
  tariff_promo_price: number;
  services_duration: string;
  description: string;
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

export interface IShippingFields {
  userId: number;
  phoneNumber: string;
  paymentMethodId: number;
  subscriptionId: number;
  autopayment: boolean;
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

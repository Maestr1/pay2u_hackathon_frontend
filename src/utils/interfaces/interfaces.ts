
export interface ISubscription {
  id: string,
  name: string,
  category: ICategory[],
  link: string,
  startDate?: string,
  endDate?: string,
  subscriptionType: string,
  serviceIconBig: string,
  serviceIconSquare: string,
  serviceIconSmall: string,
  serviceDetails: string,
  serviceTariffList: ITariff[]
}

export interface ITariff {
  tariffId: string,
  tariffName: string,
  tariffPromoPrice: number,
  tariffFullPrice: number,
  tariffDuration: number,
  tariffDescription: string
}

export interface ICategory {
  id: string,
  name: string,
  description: string,
  icon: string
}

export interface IUser {
  userId: string,
  fullName: string,
  phone: string,
  email: string,
  login: string,
  userIcon: string
}

export interface IPaymentMethod {
  id: string,
  methodName: string,
  methodToken: string,
  priorityMethod: boolean,
  methodIcon: string
}


export interface IShippingFields {
  userId: string,
  telNumber: string,
  paymentMethodId: string,
  subscriptionId: string
}
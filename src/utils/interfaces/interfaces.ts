
export interface ISubscription {
  id: number,
  name: string,
  category: ICategory,
  link: string,
  icon_big: string,
  icon_square: string,
  icon_small: string,
  description: string,
  serviceTariffList: ITariff[]
}

export interface ITariff {
  tariffId: number,
  tariffName: string,
  tariffPromoPrice: number,
  tariffFullPrice: number,
  tariffDuration: number,
  tariffDescription: string
}

export interface ICategory {
  id: number,
  name: string,
  slug: string,
  description: string,
  icon: string
}

export interface IUser {
  userId: number,
  fullName: string,
  phone: string,
  email: string,
  login: string,
  userIcon: string,
  paymentMethods: IPaymentMethod[],
}

export interface IPaymentMethod {
  id: number,
  methodName: string,
  methodToken: string,
  priorityMethod: boolean,
  methodIcon: string
}


export interface IShippingFields {
  userId: number,
  phoneNumber: string,
  paymentMethodId: number,
  subscriptionId: number,
  autopayment: boolean
}
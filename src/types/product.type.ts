export interface IProduct {
  rating?: number;
  id?: number;
  image: string;
  title: string;
  description?: string;
  price: number | string;
  category?: string;
  quantity?: number;
}

export interface InitialStateType {
  products: IProduct[];
  search: IProduct[];
}

export interface InitialBasketTyp {
  basket: IProduct[];
}

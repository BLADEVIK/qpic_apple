export interface IProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  feature: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
} 
export interface IProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  feature: string;
  oldPrice: number | null;
}

export interface ICartItem extends IProduct {
  quantity: number;
} 
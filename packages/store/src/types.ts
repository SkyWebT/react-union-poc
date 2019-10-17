export interface T_Product {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}
export interface T_Products {
  [producdId: string]: T_Product;
}

export interface IProduct{
  id: number;
  name:string;
  price:string;
  description:string;
  pic:string;
  _product_category: {
    id: number;
    name:string;
  }
}
import Image from 'next/image';
import { IProduct } from '@/interfaces/iproduct';

export function ProductsListCard (props: IProduct) {
  return (
    <div className="productlist-card">
    <div className="productlist-card-image">
      <Image
        width={200}
        height={200}
        src={props.pic}
        alt="product"
      />
    </div>
    <div className="productlist-card-identity">
      <div className="productlist-card-title">
        <span>{props.name}</span>
      </div>
      <div className="productlist-card-price">
        <p>{props.price}</p>
      </div>
      <div className="productlist-card-text">
        {props._product_category && <span>{props._product_category.name}</span>}<br/>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  </div>
  );
}

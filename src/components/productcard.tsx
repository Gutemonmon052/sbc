import Image from "next/image";
import { IProduct } from "@/interfaces/iproduct";
import Link from "next/link";

export function ProductCard(props: IProduct) {
  return (
    <div>
      <div className="productcard">
        <div className="productcard-img">
          <Image src={props.pic} width={300} height={200} alt="product" />
        </div>
        <div className="productcard-desc">
          <div className="productcard-ctg">
            {props._product_category && (
              <span>{props._product_category.name}</span>
            )}
          </div>
          <div className="productcard-title">
            <h3>{props.name}</h3>
          </div>
          <div className="productcard-price">
            <p>{props.price}</p>
          </div>
          <div className="productcard-text">
            <p>{props.description}</p>
          </div>
        </div>
        <Link href={`/products`} target="blank">
          <div className="productcard-button">
            <button>Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

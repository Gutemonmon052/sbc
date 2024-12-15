import Image from 'next/image';
import { ITestimoni } from '@/interfaces/itestimoni';

export function TestimoniUsercard (props: ITestimoni) {
  return (
    <div className="testimonicard">
    <div className="testimonicard-image">
      <Image
        src={`${props.pic}`}
        width={80}
        height={80}
        alt="testimoni"
      />
    </div>
    <div className="testimonicard-text">
      <div className="testi-username">
        <span>{props.nama}</span>
      </div>
      <div className="testi-desc">
        {props._product && <span>{props._product.name}</span>}<br/>
        <span>
          {props.testimoni}
        </span>
      </div>
    </div>
  </div>
  );
}

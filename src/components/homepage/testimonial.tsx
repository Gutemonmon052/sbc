import Image from "next/image";
import Link from "next/link";

export function Testimonials() {
  return (
    <div>
      <div className="testimonials">
        <div className="testimonials-desc">
          <h2>Testimoni</h2>
          <p>
            Tas liburan Bali yang penuh warna dan ceria akan membuat momen
            liburan mereka semakin menyenangkan
          </p>
          <Link href="https://www.youtube.com/embed/Wd5L-pgqpZA?si=Ya9Y6ZTUp-o5Ymg2" target="blank">
            <div className="btn">Watch Video</div>
          </Link>
        </div>
        <div className="testimonials-media">
          <Image src="https://cdn.orderonline.id/uploads/2304281669557140800-original.JPG" width={550} height={250} alt="overview"/>
        </div>
      </div>
    </div>
  );
}

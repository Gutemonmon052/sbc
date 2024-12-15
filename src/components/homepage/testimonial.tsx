import { Suspense } from "react";
import VideoComponent from "../videocomponent";

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
        </div>
        <div className="testimonials-media">
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoComponent link="https://www.youtube.com/embed/Wd5L-pgqpZA?si=Ya9Y6ZTUp-o5Ymg2" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

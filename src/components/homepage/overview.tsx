import { Suspense } from "react";
import VideoComponent from "@/components/videocomponent";
import Link from "next/link";
export function CompanyOverview() {
  return (
    <div>
      <div className="company-overview">
        <div className="comover-media">
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoComponent link="https://www.youtube.com/embed/-vs0PB-w4jo?si=uzD-KwrVzviwy0Ol" />
          </Suspense>
        </div>
        <div className="comover-desc">
          <h2>Proses Istimewa dan Ramah Lingkungan</h2>
          <p>
            Sahana Bali Craft adalah perusahaan kerajinan Bali yang berdiri pada
            tahun 2022, memproduksi tas anyaman Ata khas Desa Tenganan dengan
            desain unik dan eksklusif. Mengusung prinsip kualitas, inovasi, dan
            kolaborasi dengan pengrajin lokal, perusahaan ini berkomitmen
            melestarikan budaya Bali sekaligus menghadirkan produk etnik yang
            stylish ke pasar lokal dan internasional.
          </p>
          <div className="about-link">
            <div className="btn">
              <Link href="/about">See for Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

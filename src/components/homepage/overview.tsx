import Image from "next/image";
import Link from "next/link";

export function CompanyOverview() {
  return (
    <div>
      <div className="company-overview">
        <div className="comover-media">
         <Image src="https://cdn.orderonline.id/uploads/9906391670586982868-original.JPG" width={550} height={250} alt="overview"/>
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
             <Link href="https://www.youtube.com/embed/-vs0PB-w4jo?si=uzD-KwrVzviwy0Ol" target="blank">
                <div className="btn">Watch Video</div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export function History() {
  return (
    <div className="aboutcontent1">
      <div className="about-content1-media">
        <Image
          width={530}
          height={630}
          src="/assets/images/productsample.png"
          alt="ata"
        />
      </div>
      <div className="about-content1-desc">
        <h2>Tentang Kami</h2>
        <p>
          Sahana Bali Craft lahir pada tahun 2022 berkat inisiatif Putu Oka
          Lesmana Putra, yang terinspirasi oleh peluang pasar dan tren pencarian
          online seperti Google Trends, khususnya untuk tas ata. Dengan fokus
          utama pada produksi kerajinan tas anyaman Ata khas Desa Tenganan,
          Karangasem, perusahaan ini memiliki visi untuk melestarikan warisan
          budaya Bali sekaligus memasarkan produk tersebut baik di pasar lokal
          maupun internasional. Selain itu, Sahana Bali Craft juga berkomitmen
          membantu meningkatkan perekonomian para pengrajin lokal. Sejak awal
          berdiri, perkembangan perusahaan didorong oleh respons terhadap
          kebutuhan pasar melalui kritik, saran, serta inovasi desain yang
          disesuaikan dengan tren terkini. Penggunaan media sosial sebagai alat
          promosi yang relevan dengan kebutuhan konsumen juga menjadi salah satu
          faktor utama pertumbuhan perusahaan. Dalam proses produksinya, bahan
          baku utama berupa akar yang menyerupai rotan diperoleh secara lokal di
          Desa Tenganan. Namun, pada musim kemarau, bahan baku tersebut dipasok
          dari Kalimantan untuk menjaga keberlanjutan produksi.
        </p>
      </div>
    </div>
  );
}

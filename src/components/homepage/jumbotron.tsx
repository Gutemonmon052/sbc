import Link from "next/link";

export function Jumbotron() {
  return (
    <div>
      <div className="jumbotron">
        <div className="jumbotron-title">
          <h1>Kecantikan dan Unikasi Bali ada Disini</h1>
        </div>
        <div className="jumbotron-text">
          <p>
            Temukan keindahan Bali dalam setiap kerajinan tangan kami dan bawa
            potongan keindahan ini ke dalam kehidupan Anda.
          </p>
        </div>
        <div className="btn">
          <Link href="/products">Discover More</Link>
        </div>
      </div>
    </div>
  );
}

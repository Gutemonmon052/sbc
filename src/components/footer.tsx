import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footercontent1">
          <div className="footer-logo">
            <Link href="/">
              <Image
                src="/assets/images/sbc-logo.svg"
                alt="logo"
                width={45}
                height={45}
              />
            </Link>
          </div>
          <div className="footer-menu">
            <h2>Usefull Links</h2>
            <div className="link">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/team">Team</Link>
            </div>
          </div>
        </div>
        <div className="footercontent2">
          <span>
            Copyright &copy; 2024 Sahana Bali Craft Company Profile by Herry
            Liukae. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

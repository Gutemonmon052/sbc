import Link from "next/link";
import Image from "next/image";
export function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <div className="navbar-logo">
            <Image
              src="/assets/images/sbc-logo.svg"
              alt="logo"
              width={45}
              height={45}
            />
          </div>
          <Link href="/products">Products</Link>
          <Link href="/team">Team</Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import * as React from "react";
import { ProductCard } from "../productcard";
import Link from "next/link";
import { IProduct } from "@/interfaces/iproduct";
import { useFetchData } from "@/hooks/fetchscb.hooks";
import { OurProductCardSkeleton } from "./ourproduct.skeleton";
export function ProductOverview() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:l9KOkAjy/product"
  );
  const newData = (data || []).slice(0, 3);

  return (
    <div>
      <div className="productover">
        <div className="productover-title">
          <h2>Product Overview</h2>
          <p>
            Pilihan sempurna untuk merasakan keindahan Bali dalam segala hal.
            Dibuat dengan cinta dan keahlian tangan, produk-produk kami
            menggabungkan keunikan budaya Bali dengan kualitas yang tak
            tertandingi, membawa potongan magis pulau ini langsung ke dalam
            rumah Anda
          </p>
        </div>
        <div className="productover-content">
          {loading ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                <OurProductCardSkeleton key={i} />
              ))}
            </>
          ) : error ? (
            <div className="error">Error: {error.message}</div>
          ) : newData.length > 0 ? (
            newData.map((e: IProduct) => <ProductCard key={e.id} {...e} />)
          ) : (
            <div className="no-data">No categories available.</div>
          )}
        </div>
        <div className="product-link">
          <div className="btn">
            <Link href="/products">See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

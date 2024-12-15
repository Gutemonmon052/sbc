"use client";
import * as React from "react";
import { ProductsListCard } from "./productlistcard";
import { useFetchData } from "@/hooks/fetchscb.hooks";
import { IProduct } from "@/interfaces/iproduct";
import { ProductlistSkeleton } from "./product.skl";


export function ProductsList() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:l9KOkAjy/product"
  );
  const newData = (data || [])
  
  return (
    <div className="productslist">
      <div className="productlist-title"> Our Products</div>
      <div className="productlist-content">
        {loading ? (
          <>
          {Array.from({ length: 5 }, (_, i) => (
            <ProductlistSkeleton key={i} />
          ))}
        </>
        ) : error ? (
          <div className="error">Error: {error.message}</div>
        ) : newData.length > 0 ? (
          newData.map((e: IProduct) => <ProductsListCard key={e.id} {...e} />)
        ) : (
          <div className="no-data">No products available.</div>
        )}
      </div>
    </div>
  );
}

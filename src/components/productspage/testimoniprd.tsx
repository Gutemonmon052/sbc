"use client";
import * as React from "react";
import { TestimoniUsercard } from "./usertesticard";
import { useFetchData } from "@/hooks/fetchscb.hooks";
import { ITestimoni } from "@/interfaces/itestimoni";
import { OurTeamSkeleton } from "../aboutpage/ourteam.skeleton";

export function TestimoniProduct() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:l9KOkAjy/product_testimoni"
  );

  const testiData = data || [];

  return (
    <div className="testimoniprd">
      <div className="testimonititle">
        <h2>Testimoni</h2>
      </div>
      <div className="testimoni-content">
        {loading ? (
           <>
           {Array.from({ length: 3 }, (_, i) => (
             <OurTeamSkeleton key={i} />
           ))}
         </>
        ) : error ? (
          <div className="error">Error: {error.message}</div>
        ) : testiData.length > 0 ? (
          testiData.map((e: ITestimoni) => (
            <TestimoniUsercard key={e.id} {...e} />
          ))
        ) : (
          <div className="no-data">No testimoni available.</div>
        )}
      </div>
    </div>
  );
}

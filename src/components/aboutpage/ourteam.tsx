"use client";

import { Teamcard } from "../teamcard";
import Link from "next/link";
import { useFetchData } from "@/hooks/fetchscb.hooks";
import { ITeam } from "@/interfaces/iteam";
import { OurTeamSkeleton } from "./ourteam.skeleton";

export function OurTeamView() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:l9KOkAjy/team"
  );

  const selectedData = (data || [])
    .sort((a: ITeam, b: ITeam) => a.id - b.id)
    .slice(0, 3);
  console.log(data);

  return (
    <div className="ourteam">
      <div className="ourteam-title">
        <h2>Our Team</h2>
        <p>
        Tim Sahana Bali Craft terdiri dari pengrajin dan profesional yang berdedikasi untuk melestarikan budaya Bali melalui kerajinan tangan berkualitas tinggi dengan sentuhan inovasi dan keberlanjutan.
        </p>
      </div>
      <div className="ourteam-content">
        {loading ? (
          <>
            {Array.from({ length: 3 }, (_, i) => (
              <OurTeamSkeleton key={i} />
            ))}
          </>
        ) : error ? (
          <div className="error">Error: {error.message}</div>
        ) : selectedData.length > 0 ? (
          selectedData.map((e: ITeam) => <Teamcard key={e.id} {...e} />)
        ) : (
          <div className="no-data">No categories available.</div>
        )}
      </div>
      <div className="teamlink">
        <div className="btn">
          <Link href="/team" target="blank">See More</Link>
        </div>
      </div>
    </div>
  );
}

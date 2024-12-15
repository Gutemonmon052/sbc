"use client";
import * as React from "react";
import { Teamcard } from "../teamcard";
import { useFetchData } from "@/hooks/fetchscb.hooks";
import { ITeam } from "@/interfaces/iteam";
import { OurTeamSkeleton } from "../aboutpage/ourteam.skeleton";
export function Team() {
  const { data, loading, error } = useFetchData(
    "https://x8ki-letl-twmt.n7.xano.io/api:l9KOkAjy/team"
  );

  const mainTeam = (data || [])
    .sort((a: ITeam, b: ITeam) => a.id - b.id)
    .slice(0, 7);
  const memberPrdTeam = (data || [])
    .sort((a: ITeam, b: ITeam) => a.id - b.id)
    .slice(7, 18);

  return (
    <div>
      <div className="team">
        <div className="team-desc">
          <h2>Our Team</h2>
          <p>
          Tim kami di Sahana Bali Craft adalah kumpulan pengrajin dan profesional yang berdedikasi, dengan semangat tinggi untuk melestarikan budaya Bali melalui produk kerajinan tangan yang autentik. Setiap anggota tim memberikan keahlian unik mereka, memastikan kualitas kerajinan yang tinggi serta komitmen mendalam terhadap keberlanjutan dan inovasi.
          </p>
        </div>
        <div className="team-list-main">
          <div className="team-list-main-title">
            <h3>Main Team</h3>
          </div>
          <div className="team-list-main-member">
            {loading ? (
              <>
                {Array.from({ length: 5 }, (_, i) => (
                  <OurTeamSkeleton key={i} />
                ))}
              </>
            ) : error ? (
              <div className="error">Error: {error.message}</div>
            ) : mainTeam.length > 0 ? (
              mainTeam.map((e: ITeam) => <Teamcard key={e.id} {...e} />)
            ) : (
              <div className="no-data">No categories available.</div>
            )}
          </div>
        </div>
        <div className="team-list-production">
          <div className="team-list-production-title">
            <h3>Production Team</h3>
          </div>
          <div className="team-list-production-member">
            {loading ? (
              <>
                {Array.from({ length: 6 }, (_, i) => (
                  <OurTeamSkeleton key={i} />
                ))}
              </>
            ) : error ? (
              <div className="error">Error: {error.message}</div>
            ) : memberPrdTeam.length > 0 ? (
              memberPrdTeam.map((e: ITeam) => <Teamcard key={e.id} {...e} />)
            ) : (
              <div className="no-data">No categories available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

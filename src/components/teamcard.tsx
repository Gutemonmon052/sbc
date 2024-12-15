import Image from 'next/image';
import { ITeam } from '@/interfaces/iteam';

export function Teamcard (props:ITeam) {
  return (
    <div className="ourteamcard">
    <div className="teamimage">
      <Image
        width={50}
        height={50}
        src={props.pic}
        alt="team"
      />
    </div>
    <div className="teamidentity">
      <div className="teamidentity-name">
        <span>{props.nama}</span>
      </div>
      <div className="teamidentity-title">
        {props._jabatan && 
        <span>{props._jabatan.jabatan}</span>
        }
      </div>
      <div className="teamidentity-desc">
        {props._jabatan && 
        <span>
          {props._jabatan.deskripsi}
        </span>
        }
      </div>
    </div>
  </div>
  );
}

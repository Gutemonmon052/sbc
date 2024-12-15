import { History } from "./history";
import { OurTeamView } from "./ourteam";
import { OurCulture } from "./ourculture";

export function AboutPage() {
  return (
    <div>
      <div className="about">
        <History />
        <OurTeamView/>
        <OurCulture/>
      </div>
    </div>
  );
}

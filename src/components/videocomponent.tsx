import { IVideo } from "@/interfaces/ivideo";

async function getVideoSrc(src:string): Promise<string> {
  return `${src}`;
}

export default async function VideoComponent(props:IVideo) {
  const src = await getVideoSrc(props.link);
  return <iframe src={src} frameBorder="0" allowFullScreen/>;
}


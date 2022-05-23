import ReactPlayer from "react-player/youtube";

// Only loads the YouTube player
export default function YoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=QJC3KWCO7_Y"
      muted={true}
      playing={true}
      width="800px"
      height="600px"
    />
  );
}

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

export default function Home() {
  // const videoUrl: string = "http://localhost:5000/hlsfiles1/output.m3u8";

  return (
    <main style={{ width: "100%", height: "100vh" }}>
      <VideoPlayer />
    </main>
  );
}

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

export default function Home() {
  return (
    <main style={{ width: "100%", height: "100vh", scrollBehavior: "smooth" }}>
      <VideoPlayer />
    </main>
  );
}

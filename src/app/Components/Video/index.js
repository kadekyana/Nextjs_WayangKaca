const Video = () => {
  return (
    <div>
      <h1>Video Player</h1>
      <video controls width="600" height="400" muted autoPlay loop className="rounded-lg">
        <source src="source/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

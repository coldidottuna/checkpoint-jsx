import "../style/style.css";
import img1 from "../imageInSrc.jpg";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={img1} alt="jsx" className="img" />
        <br />
        <img src="/imageInPublic.jpg" alt="jsx" className="img" />
      </div>
      <video
        src="myVideo.mp4"
        type="video/mp4"
        width="320"
        height="240"
        controls
      ></video>
    </div>
  );
}

export default App;

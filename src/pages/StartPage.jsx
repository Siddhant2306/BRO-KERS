import { useNavigate } from "react-router-dom";
import "../css/startpage.css";
import MyAnimation from "../assets/background.mp4"; // or .gif, .webm, .svg

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="startpage-container">
      {/* Custom Animation Background */}
      <div className="animation-bg">
        <video autoPlay loop muted playsInline>
          <source src={MyAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Card */}
      <div className="start-card">
        <h1 className="title">Welcome to BRO-KERS</h1>
        <p className="subtitle">Are you a Builder or an Investor?</p>
        <div className="btn-group">
          <button className="role-btn" onClick={() => navigate("/builder")}>
            I’m a Builder
          </button>
          <button className="role-btn" onClick={() => navigate("/home")}>
            I’m an Investor
          </button>
        </div>
      </div>
    </div>
  );
}


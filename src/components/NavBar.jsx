import { useState } from "react";
import "../css/navbar.css";

function DrawHoverButtons(name, link) {
  const [hover, setHover] = useState(false);

  const currentPath = window.location.pathname; 
  const isActive = currentPath === link;

  let bg_color = isActive ? "blue" : hover ? "blue" : "gray";

  return (
    <a href={link}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: bg_color,
          color: "white",
        }}
      >
        {name}
      </button>
    </a>
  );
}

function DrawHomeLinks(isHome = false) {
  if (isHome) {
    return (
      <div className="navbar-link-container">
        <a href="/"> </a>
        {DrawHoverButtons("Home", "/Home")}
        {DrawHoverButtons("Guide", "/Guide")}
        {DrawHoverButtons("Contact", "#contact")}
      </div>
    );
  }
  return (
    <div className="navbar-link-container">
      <a href="/"> </a>
      {DrawHoverButtons("Guide", "/Guide")}
      {DrawHoverButtons("Contact", "#contact")}
    </div>
  );
}

function DrawHomeNavBar(isHome = false) {
  return <div className="navbar-static">{DrawHomeLinks(isHome)}</div>;
}

export default DrawHomeNavBar;

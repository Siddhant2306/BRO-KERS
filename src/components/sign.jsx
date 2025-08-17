import React, { useState, useEffect } from "react";
import "../css/sign_in.css";

export function SignInButton() {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="signin-btn"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className="btn-bg"
        style={{
          transform: hover ? "translateY(0%)" : "translateY(100%)",
        }}
      ></span>
      <span className="btn-text">
        {hover ? "Sign in" : "Hello"}
      </span>
    </button>
  );
}

export function ModeChanger() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark"
  );
  const [hover, setHover] = useState(false);


  useEffect(() => {
    document.body.className = isLight ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <button
      className={`mode-btn ${hover ? "hover" : ""} ${
        isLight ? "light" : "dark"
      }`}
      onClick={() => setIsLight((prev) => !prev)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}

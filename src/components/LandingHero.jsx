import React from "react";
import "./LandingHero.css";
import heroWave from "../assets/hero-wave.svg";
import circle from "../assets/circle1.svg";
import { Link } from "react-router-dom";

export default function LandingHero() {
  return (
    <section className="landing-hero">
      <img src={circle} alt="" className="circle-decor" />
      <h1>Ticket Management App</h1>
      <p>Organize, track, and resolve tickets effortlessly</p>
      <div className="cta-buttons">
        <Link className="btn" to="/auth/login">Login</Link>
        <Link className="btn" to="/auth/signup">Get Started</Link>
      </div>
      <img src={heroWave} alt="Wave" className="wave-svg" />
    </section>
  );
}

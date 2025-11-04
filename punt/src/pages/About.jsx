import React from "react";
import { aboutInfo } from "../data/aboutData";

export default function About() {
  const { intro, values } = aboutInfo;

  return (
    <>
      <section className="about-section">
        <div className="about-text">
          <h2>Hoi! Ik ben {intro.name}</h2>
          <p>{intro.description}</p>
        </div>
        <div className="about-photo">
          <img src={intro.image} alt={intro.name} />
        </div>
      </section>

      <section className="values-section">
        <h2 className="values-title">Kernwaarden</h2>
        <div className="values-grid">
          {values.map(value => (
            <div key={value.id} className="value-card">
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import React from "react";
import "../App.css"; 

export default function Education() {
  return (
    <div className="education-page">
      <div className="timeline">
        <div className="year">2025</div>
        <div className="dot"></div>
        <div className="year">2024</div>
        <div className="dot"></div>
        <div className="year">2023</div>
        <div className="dot"></div>
        <div className="year">2022</div>
        <div className="dot"></div>
        <div className="year">2018</div>
        <div className="dot"></div>
      </div>

      <div className="canvas-header">
        <h3>Education</h3>
        <h3>Work</h3>
        <h3>Certificates</h3>
      </div>

      <div className="education-canvas">
        <div className="canvas-content">

          <div className="column">
            <div className="block">Techniek College Rotterdam</div>
            <div className="block">Albeda Sportcollege</div>
            <div className="block">Scheepvaart en Transport College</div>
          </div>

<div className="column">
  <div className="block tall">Albert Heijn</div>

  <section className="small-blocks-section">
    <div className="block small">Flink</div>
    <div className="block small">Cycloon</div>
    <div className="block small">Dirk</div>
    <div className="block small">Action</div>
  </section>
</div>


          <div className="column">
            <div className="block">Albeda Sportcollege</div>
            <div className="block">Scheepvaart en Transport College</div>
          </div>
        </div>
      </div>
    </div>
  );
}

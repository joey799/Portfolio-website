import React from 'react'


export default function Interests() {
  return (
    <main className="interests-container">
      <h2 className="interests-title">Interests & Hobbies</h2>
      
      <div className="interests-grid">

        <div className="interest-card intellectual-card">
          <h3 className="category-title">INTELLECTUAL</h3>
          <ul className="interest-list">
            <li className="interest-item">
              <span className="dot intellectual-dot"></span>
              Reading
            </li>
            <li className="interest-item">
              <span className="dot intellectual-dot"></span>
              Coding
            </li>
            <li className="interest-item">
              <span className="dot intellectual-dot"></span>
              Philosophy
            </li>
          </ul>
        </div>


        <div className="interest-card creative-card">
          <h3 className="category-title">CREATIVE</h3>
          <ul className="interest-list">
            <li className="interest-item">
              <span className="dot creative-dot"></span>
              Music
            </li>
            <li className="interest-item">
              <span className="dot creative-dot"></span>
              Painting
            </li>
            <li className="interest-item">
              <span className="dot creative-dot"></span>
              Webdesign
            </li>
          </ul>
        </div>

   
        <div className="interest-card physical-card">
          <h3 className="category-title">PHYSICAL</h3>
          <ul className="interest-list">
            <li className="interest-item">
              <span className="dot physical-dot"></span>
              Gym
            </li>
            <li className="interest-item">
              <span className="dot physical-dot"></span>
              Basketball
            </li>
            <li className="interest-item">
              <span className="dot physical-dot"></span>
              Football
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
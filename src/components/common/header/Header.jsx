import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h2>logo</h2>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Program</a></li>
            <li><a href="">Media</a></li>
            <li><a href="">Join</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div className="donate_btn">
            <button>Donate Now</button>
          </div>
        </nav>
      
      </header>
    </div>
  );
}

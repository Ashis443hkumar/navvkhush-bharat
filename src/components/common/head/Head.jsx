import React from "react";
import "./head.css"
export default function head() {
  return (
    <>
      <section>
        <div className="head">
          <div className="head_left">
              <div className="phone">
                <label htmlFor=""><i class="fa-solid fa-phone"></i> Phone No: </label>
                <span> 9834960553</span>
              </div>
              <div className="email">
                <label htmlFor=""><i class="fa-solid fa-envelope"></i> Email: </label>
                <span> info@thecrimecontrol.com </span>
              </div>
          </div>
          <div className="head_right">
              <div className="social_link">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </div>
          </div>

        </div>
      </section>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function SocialsIcons() {
  return (
     <>
            <div className="social_link">
              <Link target="_blank" to="https://www.youtube.com/@Navvkhushbharat" class="youtube_links">
                 <img src="https://cdn-icons-png.flaticon.com/128/4008/4008208.png" class="youtube" alt=""/>
              </Link>
              <Link target="_blank" to="https://www.linkedin.com/in/navv-khush-bharat-crime-control-and-social-development-organisation-54a979260">
                 <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" class="linkedin" alt="" />
              </Link>

              <Link target="_blank" to="https://instagram.com/navvkhushbharat.ccsdo?igshid=NGExMmI2YTkyZg==" class="">
                 <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" class="instagram" alt=""/>
              </Link>
              <Link  target="_blank" to="https://www.facebook.com/navvkhushbharat?mibextid=ZbWKwL">
                 <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" class="facebook" alt=""/>
              </Link>
              <Link target="_blank" to="">
                <img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" class="twitter" alt=""/>
              </Link>


         </div>
     </>
  );
}

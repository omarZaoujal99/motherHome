import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faMailForward, faMessage, faSun, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faMailchimp, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Sec1 = () => {
  return (
    <section className="sec1">
      <div>
        <p className="sec1_p1">
          SAVE NATURE
          <br />
          OR
          <br />
          YOU WON'T BE SAFE...
        </p>
        <button className="sec1_btn1">
          scroll for more <span className="sec1_btn1_span1">↯</span>
        </button>
      </div>
      <div className="sec1_div1">
        <p className="sec1_p2">
          <FontAwesomeIcon icon={faMessage} />
        </p>
        <a href="#" className="sec1_div1_a">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="sec1_div1_a">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="#" className="sec1_div1_a">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="sec1_div2">
        <button className="sec1_btn2">
          <span className="sec1_btn2_span1">
            <FontAwesomeIcon icon={faSun} />
          </span>
          Take Action
        </button>
      </div>
    </section>
  );
};

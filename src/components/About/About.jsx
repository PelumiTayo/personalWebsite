import React from "react";
import "./About.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <>
      <div id="About">
        <h1 id="aboutH">
          <div class="animation">
            <span class="first">About</span>
            <span class="oh">
              <span class="second">&nbsp;Me</span>
            </span>
          </div>
        </h1>
        <img
          id="aboutimg"
          src="https://78.media.tumblr.com/67f37f09a5ce275192ddafc8f77af083/tumblr_p1pslnTMP61ueofzpo1_500.gif"
          alt=""
        />
        <div id="InnerAbout">
          <div id="innerone">
            <h1>Developing for the Greater Good</h1>
            <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/oluwapelumi-tayo-orisadare/"><span id="followme"> Follow me <FontAwesomeIcon icon={faLinkedin} /></span></a>
          </div>
          <div id="innertwo">
            I am interested in pursuing a career in technology because it allows
            me to use my creative and analytical skills in a meaningful way. I
            really appreciate that I will be able to build upon these skills
            while also learning new skills every day! I am also interested in
            being a part of an industry that has changed many lives and still
            continues to do so.
            <br />
            <br />
            As I mentioned, the ability to make a change and use my skills in a
            meaningful way motivates me to pursue this career path, especially
            as a black woman in STEM. Due to the industry being predominantly
            white, there is alot of conscious and unconscious bias that takes
            place in the creation of applications, products, etc… I would like
            to use myself as a way to make people more aware of these biases and
            create projects that are more inclusive of everyone not just one
            group of people.
          </div>
        </div>
      </div>
    </>
  );
}

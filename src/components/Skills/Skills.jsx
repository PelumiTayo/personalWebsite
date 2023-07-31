import React, { Fragment } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase} from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  console.log(fab);
  return (
    <div className="Skills">
      <div id="skillsContent">
        <p>My skillset</p>
        <p>Aspiring Software Engineer/Front-End Developer</p>
      </div>
      <div class="technical-skills-container">
        <div class="skills-bottom">
          <div class="lang-skills-container">
            <div class="python-lang">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faPython} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">PYTHON</div>
                </div>
              </div>
            </div>
            <div class="nodejs-lang">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faNodeJs} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">NODE.JS</div>
                </div>
              </div>
            </div>
            <div class="c-lang">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={faC} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">C</div>
                </div>
              </div>
            </div>
            <div class="js-lang">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faJs} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">JAVASCRIPT</div>
                </div>
              </div>
            </div>
            <div class="css-lang">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faCss3} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">CSS</div>
                </div>
              </div>
            </div>
            <div class="html-lang">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faHtml5} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">HTML</div>
                </div>
              </div>
            </div>
            <div class="figma">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faFigma} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">FIGMA</div>
                </div>
              </div>
            </div>
            <div class="git">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faGitAlt} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">GIT</div>
                </div>
              </div>
            </div>
            <div class="sql">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={faDatabase} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">PostgresSql</div>
                </div>
              </div>
            </div>
            <div class="express">
              <div class="each-skill">
                <div class="circle">
                <FontAwesomeIcon icon={fab.faReact} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">React</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

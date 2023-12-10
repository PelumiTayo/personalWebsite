import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPhp,
  faPython,
  faNode,
  faJs,
  faCss3,
  faHtml5,
  faFigma,
  faGitAlt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt, IconBook } from "@tabler/icons-react";

export default function Skills() {
  const useStyles = createStyles((theme) => ({
    icon: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[5],
    },

    name: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));

  const { classes } = useStyles();

  return (
    <div id="Skillset">
      <div id="skillsContent">
        <div className="container">
          <h1>
            <div className="animation">
              <span className="first">My</span>
              <span className="oh">
                <span className="second">&nbsp;Skillset</span>
              </span>
            </div>
          </h1>
        </div>
        <div>
          <Group position="center">
            <Avatar src={"pelumi.png"} size={200} radius="md" />
            <div>
              <Text fz="lg" tt="uppercase" fw={700} c="dimmed">
                {"Software Engineer"}
              </Text>

              <Text fz="xl" fw={500} className={classes.name}>
                {"Oluwapelumi Tayo-Orisadare"}
              </Text>

              <Group noWrap spacing={10} mt={3}>
                <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                <Text fz="lg" c="dimmed">
                  <a
                    style={{ textDecoration: "none", color: "var(--fushia)" }}
                    href="mailto: pelumi.tayoorisadare@gmail.com"
                  >
                    Email
                  </a>
                </Text>
              </Group>

              <Group noWrap spacing={10} mt={5}>
                <IconPhoneCall
                  stroke={1.5}
                  size="1rem"
                  className={classes.icon}
                />
                <Text fz="lg" c="dimmed">
                  {"708-916-5893"}
                </Text>
              </Group>
              <Group noWrap spacing={10} mt={5}>
                <IconBook stroke={1.5} size="1rem" className={classes.icon} />
                <form
                  action="Tayo-Orisadare_Pelumi.pdf"
                  method="get"
                  target="_blank"
                >
                  <button id="resumeButton" type="submit">
                    Resume
                  </button>
                </form>
              </Group>
            </div>
          </Group>
        </div>
      </div>
      <div className="technical-skills-container">
        <div className="skills-bottom">
          <div className="lang-skills-container">
            <div className="python-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faPython} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Python</div>
                </div>
              </div>
            </div>
            <div className="nodejs-lang">
              <div className="each-skill">
                <div className="circle" style={{ fontSize: "250%" }}>
                  <FontAwesomeIcon icon={faNode} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Node.js</div>
                </div>
              </div>
            </div>
            <div className="c-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faC} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">C</div>
                </div>
              </div>
            </div>
            <div className="js-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faJs} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">JavaScript</div>
                </div>
              </div>
            </div>
            <div className="css-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faCss3} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">CSS</div>
                </div>
              </div>
            </div>
            <div className="html-lang">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faHtml5} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">HTML</div>
                </div>
              </div>
            </div>
            <div className="figma">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faFigma} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Figma</div>
                </div>
              </div>
            </div>
            <div className="git">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faGitAlt} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">Git</div>
                </div>
              </div>
            </div>
            <div className="sql">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faDatabase} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">PostgresSql</div>
                </div>
              </div>
            </div>
            <div className="github">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">GitHub</div>
                </div>
              </div>
            </div>
            <div className="express">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faReact} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">React</div>
                </div>
              </div>
            </div>
            <div className="express">
              <div className="each-skill">
                <div className="circle">
                  <FontAwesomeIcon icon={faPhp} />{" "}
                </div>
                <div className="skills-text">
                  <div className="skills-label">PHP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

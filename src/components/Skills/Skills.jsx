import React, { Fragment } from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, fab } from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt, IconBook } from "@tabler/icons-react";
export default function Skills() {
  console.log(fab);

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
        <div class="container">
          <h1>
            <div class="animation">
              <span class="first">My</span>
              <span class="oh">
                <span class="second">&nbsp;Skillset</span>
              </span>
            </div>
          </h1>
        </div>
        <div>
          <Group noWrap>
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
                  {"pelumi.tayoorisadare@gmail.com"}
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
                <IconBook
                  stroke={1.5}
                  size="1rem"
                  className={classes.icon}
                />
                <form
                  action="Tayo-Orisadare_Pelumi.pdf"
                  method="get"
                  target="_blank"
                >
                  <button id="resumeButton" type="submit">Resume</button>
                </form>
              </Group>
            </div>
          </Group>
        </div>
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
                  <div class="skills-label">Python</div>
                </div>
              </div>
            </div>
            <div class="nodejs-lang">
              <div class="each-skill">
                <div class="circle" style={{ fontSize: "250%" }}>
                  <FontAwesomeIcon icon={fab.faNode} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">Node.js</div>
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
                  <div class="skills-label">JavaScript</div>
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
                  <div class="skills-label">Figma</div>
                </div>
              </div>
            </div>
            <div class="git">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={fab.faGitAlt} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">Git</div>
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
            <div class="github">
              <div class="each-skill">
                <div class="circle">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                </div>
                <div class="skills-text">
                  <div class="skills-label">GitHub</div>
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

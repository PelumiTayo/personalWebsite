import React, { Fragment } from "react";
import sax from "../../assets/saxophone.png";
import "./Home.css";

export default function Home() {
  return (
    <Fragment>
      <div id="Home">
        <div id="homeContent">
          {/* <form action="src/assets/Tayo-Orisadare_Pelumi_2025.pdf" method="get" target="_blank">
          <button type="submit">Resume</button>
        </form> */}
          <p id="software">Software Engineer</p>
          <span id="helloworld"> Hello, it’s me </span> <br />
          <span id="name">Oluwapelumi </span> <span id="period"> . </span>{" "}
          <br />
          <div id="descriptors">
            Student @ Wesleyan University | Backend Developer | Digital <br />{" "}
            Marketer | Course Assistant | QuestBridge Match Scholar | <br />
            Resident Advisor | Musician | Crocheter | Afrobeats and Afro-Dance
            Fanatic
          </div>
          <br />
          <div id="scroll">
            <span style={{ fontSize: "120%" }}>SCROLL FOR MORE</span>
            <br />
            <span style={{ color: "var(--fushia)" }}>
              ______________________
            </span>
          </div>
        </div>
        <div id="homeImage">
          <img src={sax} alt="image of saxophone" />
        </div>
      </div>
      <table></table>
    </Fragment>
  );
}

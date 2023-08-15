import React, { Fragment } from "react";
import sax from "../../assets/saxophone.png";
import "./Home.css";

export default function Home() {
  return (
    <Fragment>
      <div id="Home">
        <div id="homeContent">
          <p id="software">Software Engineer</p>
          <span id="helloworld"> Hello, it’s me </span> <br />
          <span id="name">Oluwapelumi </span> <span id="period"> . </span>{" "}
          <br />
          <div id="descriptors">
            Student @ Wesleyan University | Backend Developer | Digital 
            Marketer | Course Assistant | QuestBridge Match Scholar | 
            Resident Advisor | Musician | Crocheter | Afrobeats and Afro-Dance
            Fanatic
          </div>
          <br />
          <div id="scroll">
            <a href="#Skillset" style={{textDecoration: "none"}}>
            <span style={{ fontSize: "120%", color: "white"}}>SCROLL FOR MORE</span>
            </a>
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

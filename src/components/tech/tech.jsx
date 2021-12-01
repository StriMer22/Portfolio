import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiPostgresql,
  SiJava,
  SiGithub,
} from "react-icons/si";
import React from "react";

import "./tech.css";

export const tech_asset = [
  {
    name: "React",
    iconName: <SiReact className="tech_icon" />,
  },
  {
    name: "JavaScript",
    iconName: <SiJavascript className="tech_icon" />,
  },
  {
    name: "CSS3",
    iconName: <SiCss3 className="tech_icon" />,
  },
  {
    name: "HTML5",
    iconName: <SiHtml5 className="tech_icon" />,
  },
  {
    name: "PostgresSQL",
    iconName: <SiPostgresql className="tech_icon" />,
  },
  {
    name: "Java",
    iconName: <SiJava className="tech_icon" />,
  },
  {
    name: "Github",
    iconName: <SiGithub className="tech_icon" />,
  },
];

function createTech() {
  return tech_asset.map((elem, idx) => {
    return (
      <div key={idx} className="tech_card">
        <div className="tech_icon_container">{elem.iconName}</div>
        <span style={{ margin: "5px", fontSize: "1.5rem" }}>{elem.name}</span>
      </div>
    );
  });
}

export default function Tech() {
  return (
    <div className='tech_container' id='technologies'>
      <div>
        <h1 style={{ textAlign: 'center' }}>Technologies that I use</h1>
      </div>
      <div className='card_container'>{createTech()}</div>
    </div>
  )
}

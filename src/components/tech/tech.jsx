import React from 'react';
import DevIcon from 'devicon-react-svg';
import { tech_asset } from '../../assets/tech';
import "./tech.css";

function tech() {
  return (
    <div className="tech_container" id="technologies">
      <div>
        <h1 style={{ textAlign: 'center' }}>Technologies that I use</h1>
      </div>
      <div className="card_container">
        {tech_asset.map((elem, idx ) => {
          return (
            <div key={idx} className="tech_card">
              <DevIcon className="tech_icon" icon={elem.iconName} />
              <span style={{margin: '5px', fontSize: '1.5rem'}}>{elem.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default tech;

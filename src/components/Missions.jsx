import React from 'react';

import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

import '../App.css';

export default class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul className="mission-list">
          {missions.map((e, i) => {
            const { name, year, country, destination } = e;
            return (
              <li key={ i }>
                <MissionCard
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

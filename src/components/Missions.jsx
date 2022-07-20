import React from 'react';

import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
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

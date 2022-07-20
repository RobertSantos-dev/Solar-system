import React from 'react';

import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

import '../App.css';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className="planet-list">
          {planets.map((e, i) => (
            <li key={ i }>
              <PlanetCard planetName={ e.name } planetImage={ e.image } />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

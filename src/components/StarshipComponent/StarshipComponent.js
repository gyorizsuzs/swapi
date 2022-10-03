import React from 'react';
import './StarshipComponent.module.scss';

const StarshipComponent = ({
  data: { name, cost_in_credits, max_atmosphering_speed },
}) => (
  <div className='starship'>
    <h3>{name}</h3>
    <p>
      Cost: <span className='cost'>{cost_in_credits} credits</span>
    </p>
    <p>
      Max speed: <span className='speed'>{max_atmosphering_speed}</span>
    </p>
  </div>
);

export default StarshipComponent;

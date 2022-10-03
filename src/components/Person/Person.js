import React, { useEffect, useState } from 'react';
import StarshipComponent from '../StarshipComponent/StarshipComponent';
import './person.scss';

const Person = (props) => {
  const { name, eye_color } = props.data;
  const starshipUrls = props.data.starships;
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const controllers = [];

    setStarships([]);
    starshipUrls.forEach((starshipUrl) => {
      const controller = new AbortController();
      const signal = controller.signal;
      controllers.push(controller);

      fetch(starshipUrl, { signal })
        .then((res) => res.json())
        .then((starshipsData) => {
          setStarships((currentStarShips) => [
            ...currentStarShips,
            starshipsData,
          ]);
        });
    });

    return () => {
      controllers.forEach((controller) => controller.abort());
    };
  }, []);

  return (
    <div className='person'>
      <h2 style={{ backgroundColor: eye_color }}>{name}</h2>
      {starships.map((starship) => (
        <StarshipComponent data={starship} />
      ))}
    </div>
  );
};

export default Person;

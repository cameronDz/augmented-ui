import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoutineExercise from './routineExercise';
import * as _config from '../../../../assets/data/config.json';

const routine = () => {

  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const url = _config.apis.heroku + 'basicRoutine?routineId=1';
    const header = { header: { 'Content-Type': 'application/json' } };
    axios.get(url, header)
      .then(payload => {
        setExercises(payload.data.exercises);
        setName(payload.data.name);
      })
      .catch(error => {
        // TODO inform user
        console.error(error);
      });
  }, []);

  const exerciseComponent = exercises.map((item, key) => {
    return (<RoutineExercise key={key} {...item} />);
  });

  return (
    <div className="Routine">
      <div><p><strong>Routine</strong></p></div>
      <p>{name}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {exerciseComponent}
        </tbody>
      </table>
    </div>);
};

export default routine;

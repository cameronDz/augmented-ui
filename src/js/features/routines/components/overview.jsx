import React, { useState } from 'react';
import SimpleCard from '../../../components/simpleCard';
import FullRoutine from './fullRoutine';
import AvailableRoutines from './availableRoutines';

const Overview = () => {
  const [currentId, setCurrentId] = useState('');
  const handleRoutineClick = (eventId) => {
    setCurrentId(eventId);
  };
  return (
    <SimpleCard title="Routines page" child={(
      <div className="card-content columns is-tablet">
        <div className="content column is-one-third">
          <SimpleCard child={<AvailableRoutines handleClick={handleRoutineClick} selectedId={currentId} />} title="Routine list" />
        </div>
        <div className="content column is-two-thirds">
          <SimpleCard child={<FullRoutine selectedId={currentId} />} title="Latest routine" />
        </div>
      </div>
    )} />
  );
};

export default Overview;

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
      <div className="">
        <AvailableRoutines handleClick={handleRoutineClick} selectedId={currentId} />
        <SimpleCard child={<FullRoutine selectedId={currentId} />} title="Current routine" />
      </div>
    )} />
  );
};

export default Overview;

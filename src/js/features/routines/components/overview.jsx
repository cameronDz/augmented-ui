import React, { useState, Fragment } from 'react';
import Table from './table';
import AvailableRoutines from './availableRoutines';

const Overview = () => {
  const [currentId, setCurrentId] = useState('');
  const handleRoutineClick = (eventId) => {
    setCurrentId(eventId);
  };

  return (
    <Fragment>
      <AvailableRoutines handleClick={handleRoutineClick} selectedId={currentId} />
      <Table selectedId={currentId} />
    </Fragment>
  );
};

export default Overview;

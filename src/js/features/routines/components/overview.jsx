import React, { useState, Fragment } from 'react';
import SimpleCard from '../../../components/simpleCard';
import Table from './table';
import AvailableRoutines from './availableRoutines';

const Overview = () => {
  const [currentId, setCurrentId] = useState('');
  const handleRoutineClick = (eventId) => {
    setCurrentId(eventId);
  };

  return (
    <SimpleCard title="Routines page" child={(
      <Fragment>
        <AvailableRoutines handleClick={handleRoutineClick} selectedId={currentId} />
        <SimpleCard child={<Table selectedId={currentId} />} title="Current routine" />
      </Fragment>
    )} />
  );
};

export default Overview;

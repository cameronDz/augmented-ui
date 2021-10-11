import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { TabbedPage } from '../../components/pages';
import SimpleCard from '../../components/simpleCard';
import Routine from './components/fullRoutine';
import { RoutineSidebar } from './components';
import { fetchRoutineList } from './state/actions';

const sideBarTitle = 'Routine List';
const routineTitle = 'Latest Routine';
const propTypes = { getData: PropType.func };
const RoutinePage = ({ getData }) => {
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const handleRoutineClick = (eventId) => {
    setCurrentId(eventId);
  };

  const createTab = () => {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Routines Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-third">
            <SimpleCard child={<RoutineSidebar handleClick={handleRoutineClick} selectedId={currentId} />} title={sideBarTitle} />
          </div>
          <div className="content column is-two-thirds">
            <SimpleCard child={<Routine selectedId={currentId} />} title={routineTitle} />
          </div>
        </div>
      </div>);
  };

  return <TabbedPage tabNames={['Overview']} tabPanels={[createTab()]} />;
};

RoutinePage.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = { getData: fetchRoutineList };
export default connect(mapStateToProps, mapDispatchToProps)(RoutinePage);

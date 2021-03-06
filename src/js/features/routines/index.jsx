import React, { useEffect, useState, Fragment } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

import Routine from './components/fullRoutine';
import Card from '../../components/bulmaCard';
import Layout from '../../components/layout';
import { fetchRoutineList } from './state/actions';

const propTypes = {
  routine: PropType.shape({
    isFetchingRountines: PropType.bool,
    rountineError: PropType.any,
    routineList: PropType.array
  }),
  fetchRoutineList: PropType.func
};

const routinePage = ({ fetchRoutineList, routine }) => {
  const sideBarTitle = 'Routine List';
  const routineTitle = 'Latest Routine';

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentRoutine, setCurrentRoutine] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [routineList, setRoutineList] = useState(null);

  useEffect(() => {
    fetchRoutineList();
  }, []);

  useEffect(() => {
    setIsFetching(!!routine.isFetchingRountines);
  }, [routine.isFetchingRountines]);

  useEffect(() => {
    const list = (Array.isArray(routine.routineList)) ? routine.routineList : null;
    setRoutineList(list);
  }, [routine.routineList]);

  useEffect(() => {
    const current = ((Array.isArray(routineList)) && (routineList.length > 0)) ? routineList[0] : null;
    setCurrentIndex(0);
    setCurrentRoutine(current);
  }, [routineList]);

  const getRoutineSideBarChild = () => {
    return (
      <Fragment>
        <p>Routines</p>
        <ul>
          {
            Array.isArray(routineList) && routineList.map((item, key) => {
              const style = (key === currentIndex) ? { backgroundColor: 'lightgray' } : {};
              return ((!!item) && (!!item.name)) && (<li key={key} style={style}>{item.name}</li>);
            })
          }
        </ul>
      </Fragment>);
  };

  const getRoutineChild = () => {
    return <Routine currentRoutine={currentRoutine} isFetching={isFetching} />;
  };

  return (
    <Layout title='Routines Page'>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Routines Page</p>
        </header>
        <div className="card-content columns is-tablet">
          <div className="content column is-one-fifth" style={{ cursor: 'not-allowed' }}>
            <Card child={getRoutineSideBarChild()} title={sideBarTitle} />
          </div>
          <div className="content column is-four-fifths">
            <Card child={getRoutineChild()} title={routineTitle} />
          </div>
        </div>
      </div>
    </Layout>);
};

routinePage.propTypes = propTypes;
const mapStateToProps = state => ({ routine: state.routine });
export default connect(mapStateToProps, { fetchRoutineList })(routinePage);

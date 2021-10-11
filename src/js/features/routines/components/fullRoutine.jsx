import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleTable from '../../../components/simpleTable';
import { defaultValue } from '../../../lib/defaultValue';

const propTypes = {
  isErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  list: PropTypes.array,
  selectedId: PropTypes.string
};
const FullRoutine = ({
  isErrored = false,
  isLoading = false,
  list = [],
  selectedId = ''
}) => {
  const [processedRoutineData, setProcessedRoutineData] = useState([]);

  useEffect(() => {
    const current = Array.isArray(list) && selectedId ? list.find((item) => selectedId === item?.id) : null;
    const currProcessedRoutine = processData(defaultValue(current?.exercises, []));
    setProcessedRoutineData(currProcessedRoutine);
  }, [selectedId]);

  const processData = (currExercises) => {
    const arr = [];
    const length = Array.isArray(currExercises) ? currExercises.length : 0;
    for (let idx = 0; idx < length; idx++) {
      if (currExercises?.[idx]) {
        arr.push({
          name: defaultValue(currExercises[idx].name, ''),
          note: defaultValue(currExercises[idx].note, ''),
          sets: defaultValue(createSets(currExercises[idx].sets), '')
        });
      }
    }
    return arr;
  };

  const createSets = (sets) => {
    const length = Array.isArray(sets) ? sets.length : 0;
    return length > 0 && sets.map((item, idx) => {
      const line = createSetDisplay(item);
      const breakLine = idx + 1 !== length && <br/>;
      return (
        <Fragment key={idx}>
          {line} {breakLine}
        </Fragment>
      );
    });
  };

  const createSetDisplay = (set) => {
    let byAmount = '';
    const reps = `${set?.reps || ''}`;
    if (set?.percent) {
      byAmount = `x ${set.percent * 100}%`;
    } else if (set?.pounds) {
      byAmount = `x ${set.pounds}#`;
    }
    return `${reps} ${byAmount}`;
  };

  return (
    <Fragment>
      {isLoading && <div className='circular-loader'><CircularProgress /></div>}
      {!isLoading && isErrored && <div className='circular-loader'><CircularProgress /></div>}
      {!isLoading && !isErrored && (
        <SimpleTable
          columns={['name', 'sets', 'note']}
          includeDetails={false}
          isLoading={isLoading}
          rowsData={processedRoutineData}
          titles={['Name', 'Sets', 'Note']}
        />
      )}
    </Fragment>
  );
};

FullRoutine.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isErrored: !!state.routine.rountineError,
  isLoading: !!state.routine.isFetchingRountines,
  list: state.routine.routineList
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(FullRoutine);

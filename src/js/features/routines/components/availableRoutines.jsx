import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultValue } from '../../../lib/defaultValue';
import { handleFunction } from '../../../lib/eventHandler';

const selectedStyles = {
  backgroundColor: 'lightgray',
  cursor: 'default'
};
const propTypes = {
  handleClick: PropTypes.func,
  isErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  list: PropTypes.array,
  selectedId: PropTypes.string
};
const AvailableRoutines = ({
  handleClick = null,
  isErrored = false,
  isLoading = false,
  list = [],
  selectedId = ''
}) => {
  useEffect(() => {
    if (!selectedId && list?.[0]?.id) {
      handleFunction(handleClick, list[0].id);
    }
  }, [list, selectedId]);

  const handleRoutineClick = (event) => {
    const value = defaultValue(event?.currentTarget?.dataset?.id, '');
    handleFunction(handleClick, value);
  };

  return (
    <Fragment>
      {isLoading && <p style={{ fontStyle: 'italic' }}>Loading...</p>}
      {!isLoading && isErrored && <p style={{ fontStyle: 'italic' }}>Errored...</p>}
      {!isLoading && !isErrored && (
        <ul>
          {
            Array.isArray(list) && list.map((item, idx) => {
              return item?.id && item?.name && (
                <li
                  onClick={handleRoutineClick}
                  data-id={item.id}
                  key={item.id || idx}
                  style={{ cursor: 'pointer', ...(item.id === selectedId ? selectedStyles : {}) }}
                >
                  {item.name}
                </li>
              );
            })
          }
        </ul>
      )}
    </Fragment>
  );
};

AvailableRoutines.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isErrored: !!state.routine.rountineError,
  isLoading: !!state.routine.isFetchingRountines,
  list: state.routine.routineList
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(AvailableRoutines);

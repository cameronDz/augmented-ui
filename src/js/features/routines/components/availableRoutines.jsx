import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OutlinedSelector } from '../../../components/inputs';
import { defaultValue } from '../../../lib/defaultValue';
import { handleFunction } from '../../../lib/eventHandler';

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
    if (list?.[0]?.id) {
      handleFunction(handleClick, list[0].id);
    }
  }, [list]);

  const handleChange = (selected) => {
    handleFunction(handleClick, defaultValue(selected, ''));
  };

  return (
    <Fragment>
      {isLoading && <p style={{ fontStyle: 'italic' }}>Loading...</p>}
      {!isLoading && isErrored && (
        <p style={{ fontStyle: 'italic' }}>Errored...</p>
      )}
      {!isLoading && !isErrored && (
        <div style={{ marginBottom: '8px' }}>
          <OutlinedSelector
            isDisabled={isLoading}
            isExtended={false}
            isFullExtended={true}
            label="Select routine"
            onChange={handleChange}
            options={list}
            value={selectedId}
          />
        </div>
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

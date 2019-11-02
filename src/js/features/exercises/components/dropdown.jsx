import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestExerciseList } from '../state/actions';
import Dropdown from '../../../components/Dropdown';

const propTypes = {
  exercises: PropTypes.array,
  requestExerciseList: PropTypes.func,
  title: PropTypes.string
};
const exerciseDropdown = props => {
  const [exercises, setExercises] = useState();
  const [selectedId, setSelectedId] = useState(-1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    props.requestExerciseList();
  }, []);

  useEffect(() => {
    setTitle(!!props.title ? props.title : 'Dropdown');
  }, [props.title]);

  useEffect(() => {
    setExercises(props.exercises);
  }, [props.exercises]);

  const resetThenSet = id => {
    setSelectedId(id);
  };

  const dropDownTitle = () => {
    return !!title && (<div><strong>{title}</strong></div>);
  };

  return (
    <Fragment>
      {dropDownTitle()}
      <Dropdown list={exercises} resetThenSet={resetThenSet} selectedId={selectedId} title="Exercise Dropdown" />
    </Fragment>);
};

exerciseDropdown.propTypes = propTypes;
const mapStateToProps = state => ({ exercises: state.exercises.list });
export default connect(mapStateToProps, { requestExerciseList })(exerciseDropdown);

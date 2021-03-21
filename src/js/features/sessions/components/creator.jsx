import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Switch from '@material-ui/core/Switch';
import { DateTimePicker } from '@material-ui/pickers';
import TimeField from 'react-simple-timefield';
import { postCardioMachineSession, updateCardioMachineSessionPostForm } from '../state/creator/actions';
import { calulcateTimingSeconds } from '../lib/utility';
import '../../../../css/creator.css';

const propTypes = {
  post: PropTypes.shape({
    form: PropTypes.shape({
      comment: PropTypes.string,
      distanceMiles: PropTypes.string,
      machineType: PropTypes.string,
      seconds: PropTypes.number,
      startDate: PropTypes.instanceOf(Date),
      timing: PropTypes.string,
      userName: PropTypes.string
    }),
    posting: PropTypes.bool
  }),
  postCardioMachineSession: PropTypes.func,
  updateCardioMachineSessionPostForm: PropTypes.func
};
const creator = props => {
  const [isCurrentTimeStartTime, setIsCurrentTimeStartTime] = useState(true);

  useEffect(() => {
    const disabledButton = !!props.post.posting;
    document.getElementById('submitCardioBtn').disabled = disabledButton;
  }, [props.post]);

  const handleDateChange = date => {
    const update = { startDate: date };
    setIsCurrentTimeStartTime(false);
    props.updateCardioMachineSessionPostForm(update);
  };

  const handleTimeChange = time => {
    const durationSeconds = calulcateTimingSeconds(time);
    const update = { seconds: durationSeconds, timing: time };
    if (isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (durationSeconds * 1000);
      const newStartTime = new Date(startTimeMilliseconds);
      update.startDate = newStartTime;
    }
    props.updateCardioMachineSessionPostForm(update);
  };

  const handleToggleSwitch = () => {
    if (!isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (props.post.form.seconds * 1000);
      const update = { startDate: new Date(startTimeMilliseconds) };
      props.updateCardioMachineSessionPostForm(update);
    }
    setIsCurrentTimeStartTime(!isCurrentTimeStartTime);
  };

  const getFormData = field => {
    return get(props, `post.form.${field}`, '');
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.postCardioMachineSession(props.post.form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-horizontal">
        <label className="label" htmlFor="machineType">Machine Type &nbsp;</label>
        <input className="input"
          name="machineType"
          onChange={ event => props.updateCardioMachineSessionPostForm({ machineType: event.target.value })}
          required
          type="text"
          value={getFormData('machineType')} />
      </div>

      <div className="field is-horizontal">
        <label className="label" htmlFor="startDate">Date &nbsp;</label>
        <DateTimePicker
          ampm={false}
          autoOk
          onChange={handleDateChange}
          value={getFormData('startDate')}
        />
      </div>

      <div className="field is-horizontal">
        <label className="label">Duration &nbsp;</label>
        <TimeField className="time-field"
          onChange={handleTimeChange}
          showSeconds={true}
          style={{ width: 80, height: 25 }}
          value={getFormData('timing')} />
        <label className="label" htmlFor="distanceMiles">Distance (miles) &nbsp;</label>
        <input className="distance"
          name="distanceMiles"
          onChange={ event => props.updateCardioMachineSessionPostForm({ distanceMiles: event.target.value })}
          step="0.01"
          type="number"
          value={getFormData('distanceMiles')} />
      </div>

      <div className="field is-horizontal">
        <label className="label toggle-label" htmlFor="useEndTimeStartDate">Session Just End &nbsp;</label>
        <Switch checked={isCurrentTimeStartTime}
          color="primary"
          onChange={handleToggleSwitch}
          value={isCurrentTimeStartTime} />
      </div>

      <div className="field is-horizontal">
        <label className="label" htmlFor="userName">User &nbsp;</label>
        <input className="input"
          name="userName"
          onChange={ event => props.updateCardioMachineSessionPostForm({ userName: event.target.value })}
          required
          type="text"
          value={getFormData('userName')} />
      </div>

      <div className="field">
        <label className="label" htmlFor="comment">Comment &nbsp;</label>
        <textarea className="textarea"
          name="comment"
          onChange={event => props.updateCardioMachineSessionPostForm({ comment: event.target.value })}
          type="textarea"
          value={getFormData('comment')} />
      </div>
      <div className="field control">
        <input className="input" id="submitCardioBtn" type="submit" value="Submit" />
      </div>
    </form>);
};

const mapDispatchToProps = { postCardioMachineSession, updateCardioMachineSessionPostForm };
const mapStateToProps = state => ({
  post: state.cardioMachineSessionPost
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(creator);

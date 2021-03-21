import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import { DateTimePicker } from '@material-ui/pickers';
import TimeField from 'react-simple-timefield';
import { getCardioSessionList, putCardioSession } from '../state/actions';
import { updateCardioMachineSessionPostForm } from '../state/creator/actions';
import { calulcateTimingSeconds } from '../lib/utility';
import '../../../../css/creator.css';

const propTypes = {
  form: PropTypes.shape({
    comment: PropTypes.string,
    distanceMiles: PropTypes.string,
    machineType: PropTypes.string,
    seconds: PropTypes.number,
    startDate: PropTypes.instanceOf(Date),
    timing: PropTypes.string,
    userName: PropTypes.string
  }),
  getCardioSessionList: PropTypes.func,
  hasUpdated: PropTypes.bool,
  isProcessing: PropTypes.bool,
  putCardioSession: PropTypes.func,
  sessions: PropTypes.array,
  updateCardioMachineSessionPostForm: PropTypes.func
};
const creator = ({ form, getCardioSessionList, hasUpdated, isProcessing, putCardioSession, sessions, updateCardioMachineSessionPostForm }) => {
  const [isCurrentTimeStartTime, setIsCurrentTimeStartTime] = useState(true);

  useEffect(() => {
    if (hasUpdated) {
      getCardioSessionList();
    }
  }, [hasUpdated]);

  const handleDateChange = date => {
    const update = { startDate: date };
    setIsCurrentTimeStartTime(false);
    updateCardioMachineSessionPostForm(update);
  };

  const handleTimeChange = time => {
    const durationSeconds = calulcateTimingSeconds(time);
    const update = { seconds: durationSeconds, timing: time };
    if (isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (durationSeconds * 1000);
      const newStartTime = new Date(startTimeMilliseconds);
      update.startDate = newStartTime;
    }
    updateCardioMachineSessionPostForm(update);
  };

  const handleToggleSwitch = () => {
    if (!isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (form.seconds * 1000);
      const update = { startDate: new Date(startTimeMilliseconds) };
      updateCardioMachineSessionPostForm(update);
    }
    setIsCurrentTimeStartTime(!isCurrentTimeStartTime);
  };

  const getFormData = (field) => {
    return !!form && !!form[field] ? form[field] : '';
  };

  const handleSubmit = () => {
    const id = 'se-id-' + new Date().getTime();
    const startTime = !!form && form.startDate ? form.startDate.toJSON() : '';
    const item = { ...form, id, startTime };
    putCardioSession({ cardio: [...sessions, item] });
  };

  return (
    <Fragment>
      <div className="field is-horizontal">
        <label className="label" htmlFor="machineType">Machine Type &nbsp;</label>
        <input className="input"
          name="machineType"
          onChange={ event => updateCardioMachineSessionPostForm({ machineType: event.target.value })}
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
          onChange={ event => updateCardioMachineSessionPostForm({ distanceMiles: event.target.value })}
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
          onChange={ event => updateCardioMachineSessionPostForm({ userName: event.target.value })}
          required
          type="text"
          value={getFormData('userName')} />
      </div>

      <div className="field">
        <label className="label" htmlFor="comment">Comment &nbsp;</label>
        <textarea className="textarea"
          name="comment"
          onChange={event => updateCardioMachineSessionPostForm({ comment: event.target.value })}
          type="textarea"
          value={getFormData('comment')} />
      </div>
      <div className="field control">
        <button className="input" disabled={isProcessing} onClick={handleSubmit} role="button">Submit</button>
      </div>
    </Fragment>);
};

const mapDispatchToProps = {
  getCardioSessionList,
  putCardioSession,
  updateCardioMachineSessionPostForm
};
const mapStateToProps = state => ({
  form: state.cardioMachineSessionPost.form,
  isProcessing: state.cardioMachineSessions.isProcessingCardioSession,
  hasUpdated: !!state.cardioMachineSessions.cardioSessionPutPayload,
  sessions: state.cardioMachineSessions.cardioSessionGetPayload
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(creator);

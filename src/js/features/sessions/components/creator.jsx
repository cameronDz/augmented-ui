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

const authWarning = '* must authenticate to submit exercise';
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
  getCardioSessions: PropTypes.func,
  hasUpdated: PropTypes.bool,
  isProcessing: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  saveCardioSession: PropTypes.func,
  sessions: PropTypes.array,
  updateCardioSessionForm: PropTypes.func
};
const creator = ({
  form,
  getCardioSessions,
  hasUpdated,
  isProcessing,
  isUserSecured,
  saveCardioSession,
  sessions,
  updateCardioSessionForm
}) => {
  const [isCurrentTimeStartTime, setIsCurrentTimeStartTime] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (hasUpdated) {
      getCardioSessions();
    }
  }, [hasUpdated]);

  useEffect(() => {
    setIsDisabled(isProcessing || !isUserSecured);
  }, [isProcessing, isUserSecured]);

  const handleDateChange = date => {
    const update = { startDate: date };
    setIsCurrentTimeStartTime(false);
    updateCardioSessionForm(update);
  };

  const handleTimeChange = time => {
    const durationSeconds = calulcateTimingSeconds(time);
    const update = { seconds: durationSeconds, timing: time };
    if (isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (durationSeconds * 1000);
      const newStartTime = new Date(startTimeMilliseconds);
      update.startDate = newStartTime;
    }
    updateCardioSessionForm(update);
  };

  const handleToggleSwitch = () => {
    if (!isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (form.seconds * 1000);
      const update = { startDate: new Date(startTimeMilliseconds) };
      updateCardioSessionForm(update);
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
    saveCardioSession({ cardio: [...sessions, item] });
  };

  return (
    <Fragment>
      {!isUserSecured && <div><p style={{ color: 'red' }}>{authWarning}</p></div>}
      <div className="field is-horizontal">
        <label className="label" htmlFor="machineType">Machine Type &nbsp;</label>
        <input className="input"
          disabled={isDisabled}
          name="machineType"
          onChange={ event => updateCardioSessionForm({ machineType: event.target.value })}
          required
          type="text"
          value={getFormData('machineType')} />
      </div>

      <div className="field is-horizontal">
        <label className="label" htmlFor="startDate">Date &nbsp;</label>
        <DateTimePicker
          ampm={false}
          autoOk
          disabled={isDisabled}
          onChange={handleDateChange}
          value={getFormData('startDate')}
        />
      </div>

      <div className="field is-horizontal">
        <label className="label">Duration &nbsp;</label>
        <TimeField className="time-field"
          disabled={isDisabled}
          onChange={handleTimeChange}
          showSeconds={true}
          style={{ width: 80, height: 25 }}
          value={getFormData('timing')} />
        <label className="label" htmlFor="distanceMiles">Distance (miles) &nbsp;</label>
        <input className="distance"
          disabled={isDisabled}
          name="distanceMiles"
          onChange={ event => updateCardioSessionForm({ distanceMiles: event.target.value })}
          step="0.01"
          type="number"
          value={getFormData('distanceMiles')} />
      </div>

      <div className="field is-horizontal">
        <label className="label toggle-label" htmlFor="useEndTimeStartDate">Session Just End &nbsp;</label>
        <Switch checked={isCurrentTimeStartTime}
          color="primary"
          disabled={isDisabled}
          onChange={handleToggleSwitch}
          value={isCurrentTimeStartTime} />
      </div>

      <div className="field is-horizontal">
        <label className="label" htmlFor="userName">User &nbsp;</label>
        <input className="input"
          disabled={isDisabled}
          name="userName"
          onChange={ event => updateCardioSessionForm({ userName: event.target.value })}
          required
          type="text"
          value={getFormData('userName')} />
      </div>

      <div className="field">
        <label className="label" htmlFor="comment">Comment &nbsp;</label>
        <textarea className="textarea"
          disabled={isDisabled}
          name="comment"
          onChange={event => updateCardioSessionForm({ comment: event.target.value })}
          type="textarea"
          value={getFormData('comment')} />
      </div>
      <div className="field control">
        <button className="input" disabled={isDisabled} onClick={handleSubmit} role="button">Submit</button>
      </div>
    </Fragment>);
};

const mapDispatchToProps = {
  getCardioSessions: getCardioSessionList,
  saveCardioSession: putCardioSession,
  updateCardioSessionForm: updateCardioMachineSessionPostForm
};
const mapStateToProps = state => ({
  form: state.cardioMachineSessionPost.form,
  hasUpdated: !!state.cardioMachineSessions.cardioSessionPutPayload,
  isProcessing: state.cardioMachineSessions.isProcessingCardioSession,
  isUserSecured: !!state.auth.token,
  sessions: state.cardioMachineSessions.cardioSessionGetPayload
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(creator);

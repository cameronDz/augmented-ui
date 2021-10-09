import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Switch } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import TimeField from 'react-simple-timefield';
import { InputLabel } from '../../../components/inputs';
import { UnsecuredUserAlert } from '../../../auth';
import { getCardioSessionList, putCardioSession } from '../state/actions';
import { updateCardioMachineSessionPostForm } from '../state/creator/actions';
import { calulcateTimingSeconds } from '../lib/utility';

const propTypes = {
  form: PropTypes.shape({
    comment: PropTypes.string,
    distanceMiles: PropTypes.string,
    machineType: PropTypes.string,
    seconds: PropTypes.number,
    startDate: PropTypes.instanceOf(Date),
    timing: PropTypes.string
  }),
  getCardioSessions: PropTypes.func,
  hasUpdated: PropTypes.bool,
  isProcessing: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  saveCardioSession: PropTypes.func,
  sessions: PropTypes.array,
  updateCardioSessionForm: PropTypes.func,
  username: PropTypes.string
};
const creator = ({
  form,
  getCardioSessions,
  hasUpdated,
  isProcessing,
  isUserSecured,
  saveCardioSession,
  sessions,
  updateCardioSessionForm,
  username
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

  const handleTimeChange = (_event, time) => {
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
    const startTime = !!form && form.startDate ? form.startDate.toJSON() : '';
    const item = {
      ...form,
      id: uuidv4(),
      userName: username,
      startTime
    };
    saveCardioSession({ cardio: [...sessions, item] });
  };

  return (
    <Fragment>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <div className="field is-horizontal">
        <InputLabel label="Machine Type" name="machineType" />
        <input className="input"
          disabled={isDisabled}
          name="machineType"
          onChange={ event => updateCardioSessionForm({ machineType: event.target.value })}
          required
          type="text"
          value={getFormData('machineType')} />
      </div>

      <div className="field is-horizontal">
        <InputLabel label="Date" name="startDate" />
        <DateTimePicker
          ampm={false}
          autoOk
          disabled={isDisabled}
          onChange={handleDateChange}
          value={getFormData('startDate')}
        />
      </div>

      <div className="field is-horizontal">
        <InputLabel label="Duration" />
        <TimeField
          disabled={isDisabled}
          onChange={handleTimeChange}
          showSeconds={true}
          style={{ height: '25px', marginRight: '15px', width: '80px' }}
          value={getFormData('timing')} />
        <InputLabel label="Distance (miles)" name="distanceMiles" />
        <input
          disabled={isDisabled}
          name="distanceMiles"
          onChange={ event => updateCardioSessionForm({ distanceMiles: event.target.value })}
          step="0.01"
          style={{ height: '30px', width: '80px' }}
          type="number"
          value={getFormData('distanceMiles')} />
      </div>

      <div className="field is-horizontal">
        <InputLabel label="Session Just End" name="useEndTimeStartDate" />
        <Switch checked={isCurrentTimeStartTime}
          color="primary"
          disabled={isDisabled}
          onChange={handleToggleSwitch}
          value={isCurrentTimeStartTime} />
      </div>

      <div className="field">
        <InputLabel label="Comment" name="comment" />
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
  sessions: state.cardioMachineSessions.cardioSessionGetPayload,
  username: state.auth.username
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(creator);

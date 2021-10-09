import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import { TimeField } from '../../../components/inputs';
import { UnsecuredUserAlert } from '../../../auth';
import { clearSuccessPutCardioSession, putCardioSession } from '../state/actions';
import { calulcateTimingSeconds } from '../lib/utility';

const defaultForm = {
  comment: '',
  distanceMiles: '',
  machineType: '',
  seconds: 0,
  startDate: new Date(),
  timing: '00:00:00'
};

const propTypes = {
  formClear: PropTypes.func,
  formSave: PropTypes.func,
  isProcessing: PropTypes.bool,
  isSaveSuccessful: PropTypes.bool,
  isUserSecured: PropTypes.bool
};
const creator = ({
  formClear,
  formSave,
  isProcessing,
  isSaveSuccessful,
  isUserSecured
}) => {
  const [form, setForm] = useState(() => defaultForm);
  const [isCurrentTimeStartTime, setIsCurrentTimeStartTime] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (isSaveSuccessful) {
      resetForm();
      formClear();
    }
  }, [isSaveSuccessful]);

  useEffect(() => {
    setIsDisabled(isProcessing || !isUserSecured);
  }, [isProcessing, isUserSecured]);

  const resetForm = () => {
    setForm(defaultForm);
  };

  const updateForm = (update = {}) => {
    setForm((prev) => {
      return { ...prev, ...update };
    });
  };

  const handleDateChange = date => {
    const update = { startDate: date };
    setIsCurrentTimeStartTime(false);
    updateForm(update);
  };

  const handleTimeChange = (event) => {
    const value = event?.target?.value || '00:00:00';
    const durationSeconds = calulcateTimingSeconds(value);
    const update = { seconds: durationSeconds, timing: value };
    if (isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (durationSeconds * 1000);
      const newStartTime = new Date(startTimeMilliseconds);
      update.startDate = newStartTime;
    }
    updateForm(update);
  };

  const handleToggleSwitch = () => {
    if (!isCurrentTimeStartTime) {
      const startTimeMilliseconds = new Date().getTime() - (form.seconds * 1000);
      const update = { startDate: new Date(startTimeMilliseconds) };
      updateForm(update);
    }
    setIsCurrentTimeStartTime(!isCurrentTimeStartTime);
  };

  const handleSubmit = () => {
    const item = {
      ...form,
      id: uuidv4(),
      startTime: form?.startDate?.toJSON() || ''
    };
    formSave(item);
  };

  return (
    <Fragment>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <div className="field is-horizontal">
        <TextField
          disabled={isDisabled}
          label="Machine type"
          name="machineType"
          onChange={(event) => updateForm({ machineType: event.target?.value || '' })}
          required={true}
          value={form.machineType || ''}
          variant="outlined"
        />
      </div>

      <div className="field is-horizontal">
        <TimeField
          isDisabled={isDisabled}
          label="Duration (hh:mm:ss)"
          name="duration"
          onChange={handleTimeChange}
          value={(form.timing || '').replace(/:/g, '')}
        />
      </div>

      <div className="field is-horizontal">
        <DateTimePicker
          ampm={false}
          autoOk
          disabled={isDisabled}
          inputVariant="outlined"
          label="Date"
          onChange={handleDateChange}
          value={form.startDate || ''}
        />
      </div>

      <div className="field is-horizontal">
        <FormControlLabel
          control={
            <Switch
              checked={isCurrentTimeStartTime}
              color="primary"
              disabled={isDisabled}
              onChange={handleToggleSwitch}
            />
          }
          label="Session Just Ended"
        />
      </div>

      <div className="field is-horizontal">
        <TextField
          disabled={isDisabled}
          InputProps={{ step: '0.01' }}
          name="distanceMiles"
          label="Distance (miles)"
          onChange={ event => updateForm({ distanceMiles: event.target.value })}
          type="number"
          value={form.distanceMiles || ''}
          variant="outlined"
        />
      </div>

      <div className="field">

      </div>

      <div className="field">
        <TextField
          disabled={isDisabled}
          fullWidth={true}
          label="Session comment"
          minRows={isDisabled ? 1 : 2}
          multiline={!isDisabled}
          name="comment"
          onChange={event => updateForm({ comment: event.target?.value || '' })}
          value={form.comment || ''}
          variant="outlined"
        />
      </div>
      <div className="field control">
        <Button
          disabled={isDisabled}
          onClick={resetForm}
          variant="contained"
        >
          Clear
        </Button>
        <Button
          color="primary"
          disabled={isDisabled || !form?.machineType}
          onClick={handleSubmit}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </Fragment>);
};

const mapDispatchToProps = {
  formClear: clearSuccessPutCardioSession,
  formSave: putCardioSession
};
const mapStateToProps = state => ({
  isProcessing: !!state.cardioMachineSessions.isProcessingCardioSession,
  isSaveSuccessful: !!state.cardioMachineSessions.cardioSessionPutPayload,
  isUserSecured: !!state.auth.token
});
creator.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(creator);

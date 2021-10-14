import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { DateSwitchPicker, TimeField } from '../../../components/inputs';
import { defaultValue, eventDefaultValue } from '../../../lib/defaultValue';
import { hasTruthy } from '../../../lib/hasTruthy';
import { UnsecuredUserAlert } from '../../../auth';
import {
  clearSuccessPutCardioSession,
  putCardioSession
} from '../state/actions';
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
const SessionReporter = ({
  formClear,
  formSave,
  isProcessing,
  isSaveSuccessful,
  isUserSecured
}) => {
  const [form, setForm] = useState(() => defaultForm);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (isSaveSuccessful) {
      resetForm();
      formClear();
    }
  }, [isSaveSuccessful]);

  useEffect(() => {
    setIsDisabled(hasTruthy(isProcessing, !isUserSecured));
  }, [isProcessing, isUserSecured]);

  const resetForm = () => {
    setForm(defaultForm);
  };

  const updateForm = (update = {}) => {
    setForm((prev) => {
      return { ...prev, ...update };
    });
  };

  const handleDateChange = (date) => {
    const update = { startDate: date };
    updateForm(update);
  };

  const handleTimeChange = (event) => {
    const value = eventDefaultValue(event, '00:00:00');
    const durationSeconds = calulcateTimingSeconds(value);
    const update = { seconds: durationSeconds, timing: value };
    updateForm(update);
  };

  const handleSubmit = () => {
    const item = {
      ...form,
      id: uuidv4(),
      createdDate: new Date().toJSON(),
      startTime: defaultValue(form?.startDate?.toJSON(), '')
    };
    formSave(item);
  };

  return (
    <Fragment>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <TextField
        disabled={isDisabled}
        label="Machine type"
        name="machineType"
        onChange={(event) =>
          updateForm({ machineType: eventDefaultValue(event, '') })
        }
        required={true}
        value={defaultValue(form?.machineType, '')}
        variant="outlined"
      />
      <TimeField
        isDisabled={isDisabled}
        label="Duration (hh:mm:ss)"
        name="duration"
        onChange={handleTimeChange}
        value={defaultValue(form?.timing, '').replace(/:/g, '')}
      />
      <TextField
        disabled={isDisabled}
        InputProps={{ step: '0.01' }}
        name="distanceMiles"
        label="Distance (miles)"
        onChange={(event) =>
          updateForm({ distanceMiles: eventDefaultValue(event, 0) })
        }
        type="number"
        value={defaultValue(form?.distanceMiles, '')}
        variant="outlined"
      />
      <DateSwitchPicker
        onDateChange={handleDateChange}
        isDisabledDate={isDisabled}
        isDisabledSwitch={isDisabled}
        labelDate="Date"
        labelSwitch="Session just ended"
        startOffset={defaultValue(form?.seconds, 0)}
        valueDate={defaultValue(form?.startDate, '')}
      />
      <TextField
        disabled={isDisabled}
        fullWidth={true}
        label="Session comment"
        minRows={isDisabled ? 1 : 2}
        multiline={!isDisabled}
        name="comment"
        onChange={(event) =>
          updateForm({ comment: eventDefaultValue(event, '') })
        }
        value={defaultValue(form?.comment, '')}
        variant="outlined"
      />
      <div>
        <Button disabled={isDisabled} onClick={resetForm} variant="contained">
          Clear
        </Button>
        <Button
          color="primary"
          disabled={hasTruthy(isDisabled, !form?.machineType)}
          onClick={handleSubmit}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  formClear: clearSuccessPutCardioSession,
  formSave: putCardioSession
};
const mapStateToProps = (state) => ({
  isProcessing: !!state.cardioMachineSessions.isProcessingCardioSession,
  isSaveSuccessful: !!state.cardioMachineSessions.cardioSessionPutPayload,
  isUserSecured: !!state.auth.token
});
SessionReporter.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(SessionReporter);

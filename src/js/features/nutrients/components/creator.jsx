import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';
import { eventDefaultValue } from '../../../lib/defaultValue';
import { UnsecuredUserAlert } from '../../../auth';
import { clearNutrientTypePutSuccess, putNutrientType } from '../state/actions';

const propTypes = {
  clearSaveSuccess: PropTypes.func,
  isLoading: PropTypes.bool,
  isProcessing: PropTypes.bool,
  isSuccessfulPut: PropTypes.bool,
  isUserSecured: PropTypes.bool,
  saveNutrientReport: PropTypes.func,
  types: PropTypes.array
};
const creator = ({
  clearSaveSuccess = null,
  isLoading = false,
  isProcessing = false,
  isSuccessfulPut = false,
  isUserSecured = false,
  saveNutrientReport = null,
  types = null
}) => {
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isNameMatched, setIsNameMatched] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    setIsDisabled(isLoading || isProcessing || !isUserSecured);
  }, [isLoading, isProcessing, isUserSecured]);

  useEffect(() => {
    if (isSuccessfulPut) {
      resetFormValues();
      clearSaveSuccess();
    }
  }, [isSuccessfulPut]);

  const handleNameChange = (event) => {
    const newName = eventDefaultValue(event, '');
    if (newName) {
      let isMatched = false;
      const length = types?.length || 0;
      for (let idx = 0; idx < length; idx++) {
        if (types[idx]?.name && newName.toLocaleLowerCase() === types[idx]?.name.toLocaleLowerCase()) {
          isMatched = true;
          break;
        }
      }
      setIsNameMatched(isMatched);
    }
    setName(newName);
  };

  const handleSubmit = () => {
    const id = uuidv4();
    const createdDate = new Date().toJSON();
    const item = { createdDate, description, details, id, name };
    saveNutrientReport(item);
  };

  const resetFormValues = () => {
    setDescription('');
    setDetails('');
    setName('');
  };

  return (
    <Fragment>
      <UnsecuredUserAlert isSecured={isUserSecured} />
      <TextField
        disabled={isDisabled}
        error={isNameMatched}
        helperText={isNameMatched ? 'Nutrtient name already exists!' : ''}
        label="Nutrient name"
        name="name"
        onChange={handleNameChange}
        value={name}
        variant="outlined"
      />
      <TextField
        disabled={isDisabled}
        fullWidth={true}
        label="Description"
        name="description"
        onChange={(event) => setDescription(eventDefaultValue(event, ''))}
        value={description}
        variant="outlined"
      />
      <TextField
        disabled={isDisabled}
        fullWidth={true}
        label="Details"
        minRows={isDisabled ? 1 : 3}
        multiline={!isDisabled}
        name="details"
        onChange={(event) => setDetails(eventDefaultValue(event, ''))}
        value={details}
        variant="outlined"
      />
      <div>
        <Button disabled={isDisabled} onClick={resetFormValues} variant="contained">Clear</Button>
        <Button color="primary" disabled={isDisabled || isNameMatched || !name} onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
    </Fragment>
  );
};

creator.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoading: state.nutrientsData.isLoadingReports || state.nutrientsData.isLoadingTypes,
  isProcessing: state.nutrientsData.isProcessingReport || state.nutrientsData.isProcessingType,
  isSuccessfulPut: !!state.nutrientsData.typePutPayload,
  isUserSecured: !!state.auth.token,
  types: state.nutrientsData.typesPayload
});
const mapDispatchToProps = {
  clearSaveSuccess: clearNutrientTypePutSuccess,
  saveNutrientReport: putNutrientType
};
export default connect(mapStateToProps, mapDispatchToProps)(creator);

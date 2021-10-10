import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';
import { eventDefaultValue } from '../../../lib/defaultValue';
import { UnsecuredUserAlert } from '../../../auth';

const propTypes = {
  isUserSecured: PropTypes.bool
};
const creator = ({
  isUserSecured
}) => {
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    setIsDisabled(!isUserSecured);
  }, [isUserSecured]);

  const handleSubmit = () => {
    const id = uuidv4();
    const createdDate = new Date().toJSON();
    const item = { createdDate, description, details, id, name };
    console.info('TODO, emit save', item);
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
        label="Nutrient Name"
        name="name"
        onChange={(event) => setName(eventDefaultValue(event, ''))}
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
        <Button color="primary" disabled={isDisabled || !name} onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
    </Fragment>
  );
};

creator.propTypes = propTypes;
const mapStateToProps = state => ({
  isUserSecured: !!state.auth.token
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(creator);

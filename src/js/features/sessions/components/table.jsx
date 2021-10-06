import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SimpleTable from '../../../components/simpleTable';
import { getCardioSessionList } from '../state/actions';
import { splitTextKeyToArray } from '../../../lib/splits';
import { formatMiles, formatSeconds } from '../../../lib/format';

const columns = ['date', 'machineType', 'userName'];
const details = ['date', 'time', 'machineType', 'duration', 'distance', 'userName', 'comment'];
const titles = {
  date: 'Date',
  time: 'Time',
  machineType: 'Machine',
  duration: 'Duration',
  distance: 'Distance',
  userName: 'User',
  comment: 'Comment'
};
const downloadEndpoint = 'object/cardio';
const downloadText = 'Download Session in JSON file.';
const title = 'Session details';

const propTypes = {
  getData: PropTypes.func,
  isLoading: PropTypes.bool,
  isProcessing: PropTypes.bool,
  sessions: PropTypes.array
};
const table = ({ getData, isLoading, isProcessing, sessions }) => {
  const [processedData, setProcessedData] = useState(null);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (Array.isArray(sessions)) {
      const arr = [];
      const length = sessions.length;
      for (let idx = 0; idx < length; idx++) {
        if (typeof sessions[idx] === 'object') {
          const { distanceMiles, seconds, ...other } = sessions[idx];
          const splitTime = splitTextKeyToArray(sessions[idx], 'startTime', 'T');
          const obj = {
            date: splitTime[0],
            time: splitTime[1] ? splitTime[1].substring(0, 5) : '',
            duration: formatSeconds(seconds),
            distance: formatMiles(distanceMiles),
            ...other
          };
          arr.push(obj);
        }
      }
      setProcessedData(arr);
    }
  }, [sessions]);

  return (
    <SimpleTable
      columns={columns}
      details={details}
      detailsTitle={title}
      downloadEndpoint={downloadEndpoint}
      downloadText={downloadText}
      includeDetails={true}
      isLoading={isLoading || isProcessing}
      rowsData={processedData}
      titles={titles}
    />
  );
};

table.propTypes = propTypes;
const mapStateToProps = state => ({
  isLoading: state.cardioMachineSessions.isLoadingCardioSessions,
  isProcessing: state.cardioMachineSessions.isProcessingCardioSession,
  sessions: state.cardioMachineSessions.cardioSessionGetPayload
});
export default connect(mapStateToProps, { getData: getCardioSessionList })(table);

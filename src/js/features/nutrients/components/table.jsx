import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SimpleTable from '../../../components/simpleTable';
import { orderByDateKey } from '../../../lib/sorts';
import { splitZuluStringToLocalDayTime } from '../../../lib/time';

const columns = ['day', 'name', 'amountDisplay', 'userName'];
const details = [
  'day',
  'time',
  'name',
  'description',
  'amount',
  'amountType',
  'userName',
  'comment'
];
const title = 'Nutrients dose details';
const titles = {
  amount: 'Amt',
  amountDisplay: 'Amount',
  amountType: 'Type',
  comment: 'Comments',
  day: 'Day',
  description: 'Description',
  name: 'Name',
  time: 'Time',
  userName: 'User'
};

const propTypes = {
  nutrients: PropTypes.array,
  isLoading: PropTypes.bool
};
const table = ({ nutrients = null, isLoading = false }) => {
  const [processedData, setProcessedData] = useState(null);

  useEffect(() => {
    if (Array.isArray(nutrients)) {
      const arr = [];
      const { length } = nutrients;
      for (let idx = 0; idx < length; idx++) {
        if (typeof nutrients[idx] === 'object') {
          const zuluConvert = splitZuluStringToLocalDayTime(
            nutrients[idx].intakeTime
          );
          const obj = {
            amountDisplay: `${nutrients[idx]?.amount} ${
              nutrients[idx]?.amountType
            }${nutrients[idx]?.amount > 1 ? '(s)' : ''}`,
            day: zuluConvert.day,
            time: zuluConvert.time,
            ...nutrients[idx]
          };
          arr.push(obj);
        }
      }
      setProcessedData(arr.sort((a, b) => orderByDateKey(a, b, 'intakeTime')));
    }
  }, [nutrients]);

  return (
    <SimpleTable
      columns={columns}
      details={details}
      detailsTitle={title}
      downloadEndpoint={'object/nutrientReports'}
      downloadText={'Download Intakes in JSON file.'}
      includeDetails={true}
      isLoading={isLoading}
      isPaginated={true}
      rowsData={processedData}
      titles={titles}
    />
  );
};

const mapStateToProps = (state) => ({
  nutrients: state.nutrientsData.reportsPayload,
  isLoading: state.nutrientsData.isLoadingReports
});
const mapDispatchToProps = null;
table.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(table);

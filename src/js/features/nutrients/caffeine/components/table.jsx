import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SimpleTable from '../../../../components/simpleTable';
import { orderByDateKey } from '../../../../lib/sorts';
import { splitTextKeyToArray } from '../../../../lib/splits';

const columns = ['day', 'amountDisplay', 'userName'];
const details = ['day', 'time', 'amount', 'amountType', 'userName', 'comment'];
const title = 'Caffiene dose details';
const titles = {
  day: 'Day',
  time: 'Time',
  amount: 'Amt',
  amountDisplay: 'Amount',
  amountType: 'Type',
  userName: 'User',
  comments: 'Comments'
};

const propTypes = {
  caffeine: PropTypes.array,
  getData: PropTypes.func,
  isLoading: PropTypes.bool
};
const table = ({ caffeine = null, getData = null, isLoading = false }) => {
  const [processedData, setProcessedData] = useState(null);

  useEffect(() => {
    if (Array.isArray(caffeine)) {
      const arr = [];
      const length = caffeine.length;
      for (let idx = 0; idx < length; idx++) {
        if (typeof caffeine[idx] === 'object') {
          const splitTime = splitTextKeyToArray(caffeine[idx], 'intakeTime', 'T');
          const obj = {
            amountDisplay: `${caffeine[idx]?.amount} ${caffeine[idx]?.amountType}`,
            day: splitTime[0],
            time: splitTime[1] ? splitTime[1].substring(0, 5) : '',
            ...caffeine[idx]
          };
          arr.push(obj);
        }
      }
      setProcessedData(arr.sort((a, b) => orderByDateKey(a, b, 'intakeTime')));
    }
  }, [caffeine]);

  return (
    <SimpleTable
      columns={columns}
      details={details}
      detailsTitle={title}
      downloadEndpoint={'object/caffeine'}
      downloadText={'Download Intakes in JSON file.'}
      includeDetails={true}
      isLoading={isLoading}
      rowsData={processedData}
      titles={titles}
    />
  );
};

const mapStateToProps = state => ({
  caffeine: state.caffeineIntakes.caffeineGetPayload,
  isLoading: state.caffeineIntakes.isLoadingCaffeine
});
const mapDispatchToProps = null;
table.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(table);

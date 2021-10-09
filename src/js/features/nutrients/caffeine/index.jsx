import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IntakeCreator from './components/creator';
import IntakeTable from './components/table';
import SimpleCard from '../../../components/simpleCard';
import { getCaffeineList } from '../state/actions';
import { handleFunction } from '../../../../lib/eventHandler';

const propTypes = { getData: PropTypes.func };
const CaffeinePanel = ({ getData }) => {
  useEffect(() => {
    handleFunction(getData);
  }, [getData]);

  const renderSessionContent = () => {
    return (
      <div className="card-content columns is-multiline is-tablet">
        <div className="content column is-two-fifths">
          <SimpleCard child={<IntakeCreator />} title={'Caffeine Intake Creator'} />
        </div>
        <div className="content column is-three-fifths">
          <SimpleCard child={<IntakeTable />} title={'Caffeine Intake Display'} />
        </div>
      </div>);
  };
  return (<SimpleCard child={renderSessionContent()} title={'Caffeine Page'} />);
};

CaffeinePanel.propTypes = propTypes;
const mapStateToProps = null;
const mapDispatchToProps = { getData: getCaffeineList };
export default connect(mapStateToProps, mapDispatchToProps)(CaffeinePanel);

import React from 'react';
import PropTypes from 'prop-types';

function RateDataView(props) {
    return (
        <span>
            <span style={{color: 'green'}}>{props.success}</span>
            &nbsp;/&nbsp;
            <span style={{color: 'red'}}>{props.failure}</span>
            &nbsp;(Total: {props.success + props.failure})
        </span>
    );
}

RateDataView.propTypes = {
    success: PropTypes.number.isRequired,
    failure: PropTypes.number.isRequired
}

export default RateDataView;

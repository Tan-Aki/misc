import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  // console.log('spinner')
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;

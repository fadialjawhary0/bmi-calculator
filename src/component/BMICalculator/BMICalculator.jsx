import React, { useState } from 'react';

import Metric from './Metric/Metric';
import Imperial from './Imperial/Imperial';

const BMICalculator = () => {
  const [metricOrImperial, setMetricOrImperial] = useState('metric');

  const onRadioChange = e => setMetricOrImperial(e.target.value);

  const showMetricOrImperial =
    metricOrImperial === 'metric' ? <Metric /> : <Imperial />;

  return (
    <div className='hero-function-container'>
      <h3 className='heading-m'>Enter your details below</h3>

      {/* Radio Buttons (Metric / Imperial) */}
      <div className='radio-buttons-container'>
        <div className='radio-button'>
          <input
            type='radio'
            value='metric'
            checked={metricOrImperial === 'metric'}
            onChange={onRadioChange}
          />
          <label className='body-m'>Metric</label>
        </div>
        <div className='radio-button'>
          <input
            type='radio'
            value='imperial'
            checked={metricOrImperial === 'imperial'}
            onChange={onRadioChange}
          />
          <label className='body-m'>Imperial</label>
        </div>
      </div>

      {/* Input fields (Weight / Height) */}
      {showMetricOrImperial}
    </div>
  );
};

export default BMICalculator;

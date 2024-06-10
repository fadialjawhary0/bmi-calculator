import React, { useEffect, useState } from 'react';

import Result from '../Result/Result';
import { MetricInputFields } from '../../../constants';
import { MetricBMI } from '../../../helpers/metricBmi.helper';

const Metric = () => {
  const [units, setUnits] = useState({ height: null, weight: null });
  const [result, setResult] = useState(null);
  const [idealWeight, setIdealWeight] = useState({ min: null, max: null });

  const onInputChange = (key, e) => {
    setUnits(prevState => ({
      ...prevState,
      [key]: Number(e.target.value),
    }));
  };

  useEffect(() => {
    const { result, idealWeight } = MetricBMI(units);
    setResult(result);
    setIdealWeight(idealWeight);
  }, [units]);

  const renderInputField = (label, key, unit) => (
    <div className='metric-inputs__box'>
      <label className='body-s'>{label}</label>
      <input className='heading-m' type='number' placeholder='0' onChange={e => onInputChange(key, e)} />
      <span className='heading-m metric-unit'>{unit}</span>
    </div>
  );

  return (
    <React.Fragment>
      <div className='metric-inputs'>
        {MetricInputFields.map((field, index) => (
          <React.Fragment key={index}>{renderInputField(field?.label, field?.key, field?.unit)}</React.Fragment>
        ))}
      </div>
      <Result result={result} idealWeight={idealWeight} weight={units?.weight} />
    </React.Fragment>
  );
};

export default Metric;

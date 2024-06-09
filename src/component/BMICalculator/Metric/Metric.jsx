import React, { useEffect, useState } from 'react';

import Result from '../Result/Result';
import { BmiLimits } from '../../../constants/bmiLimits';

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
    const { height, weight } = units;

    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / Math.pow(heightInMeters, 2);
      const formattedNumber = bmi.toFixed(1);
      setResult(Number(formattedNumber));

      const minIdealWeight =
        BmiLimits.HEALTHY.min * Math.pow(heightInMeters, 2);
      const maxIdealWeight =
        BmiLimits.HEALTHY.max * Math.pow(heightInMeters, 2);

      setIdealWeight({
        min: minIdealWeight.toFixed(0),
        max: maxIdealWeight.toFixed(0),
      });
    }
  }, [units]);

  return (
    <React.Fragment>
      <div className='metric-inputs'>
        <div className='metric-inputs__box'>
          <label className='body-s'>Height</label>
          <input
            className='heading-m'
            type='number'
            placeholder='0'
            onChange={e => onInputChange('height', e)}
          />
          <span className='heading-m metric-unit'>cm</span>
        </div>
        <div className='metric-inputs__box'>
          <label className='body-s'>Weight</label>
          <input
            className='heading-m'
            type='number'
            placeholder='0'
            onChange={e => onInputChange('weight', e)}
          />
          <span className='heading-m metric-unit'>kg</span>
        </div>
      </div>
      <Result
        result={result}
        idealWeight={idealWeight}
        weight={units?.weight}
      />
    </React.Fragment>
  );
};

export default Metric;

import React, { useEffect, useState } from 'react';
import { GetWeightLabel } from '../../../helpers/index';

const Result = ({ result, idealWeight, weight, unitType }) => {
  const [weightLabel, setWeightLabel] = useState('');

  useEffect(() => {
    setWeightLabel(GetWeightLabel(result));
  }, [result]);

  const convertKgToStonePounds = kg => {
    const totalPounds = kg / 0.453592;
    const stones = Math.floor(totalPounds / 14);
    const pounds = Math.round(totalPounds % 14);
    return `${stones}st ${pounds}lbs`;
  };

  const displayIdealWeight = () => {
    if (unitType === 'imperial') {
      return `${convertKgToStonePounds(
        idealWeight.min,
      )} - ${convertKgToStonePounds(idealWeight.max)}`;
    }
    return `${idealWeight.min}kgs - ${idealWeight.max}kgs`;
  };

  return result === 'NaN' || result > 100 || result < 1 || weight === 0 ? (
    <div className='welcome-container'>
      <h4 className='heading-m'>Welcome!</h4>
      <p className='body-s'>
        Enter your height and weight and you'll see your BMI result here
      </p>
    </div>
  ) : (
    <div className='result-container'>
      <div className='result-container__content'>
        <div>
          <p className='body-m'>Your BMI is...</p>
          <h4 className='heading-xl'>{result}</h4>
        </div>
        <p className='body-s weight-suggestion'>
          Your BMI suggests you're {weightLabel}. Your ideal weight is between{' '}
          <span>{displayIdealWeight()}</span>.
        </p>
      </div>
    </div>
  );
};

export default Result;

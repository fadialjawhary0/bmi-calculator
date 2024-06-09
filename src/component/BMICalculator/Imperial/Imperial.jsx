import React, { useEffect, useState } from 'react';
import Result from '../Result/Result';
import { BmiLimits } from '../../../constants/bmiLimits';

const Imperial = () => {
  const [units, setUnits] = useState({
    heightFeet: null,
    heightInches: null,
    weightStones: null,
    weightPounds: null,
  });
  const [result, setResult] = useState(null);
  const [idealWeight, setIdealWeight] = useState({ min: null, max: null });

  const onInputChange = (key, e) => {
    setUnits(prevState => ({
      ...prevState,
      [key]: Number(e.target.value),
    }));
  };

  useEffect(() => {
    const { heightFeet, heightInches, weightStones, weightPounds } = units;

    if (
      heightFeet > 0 &&
      heightInches > 0 &&
      weightStones > 0 &&
      weightPounds > 0
    ) {
      const heightInInches = heightFeet * 12 + heightInches;
      const heightInCm = heightInInches * 2.54;

      const weightInPounds = weightStones * 14 + weightPounds;
      const weightInKg = weightInPounds * 0.453592;

      const heightInMeters = heightInCm / 100;
      const bmi = weightInKg / Math.pow(heightInMeters, 2);
      const formattedNumber = bmi.toFixed(1);
      setResult(Number(formattedNumber));

      const minIdealWeightKg =
        BmiLimits.HEALTHY.min * Math.pow(heightInMeters, 2);
      const maxIdealWeightKg =
        BmiLimits.HEALTHY.max * Math.pow(heightInMeters, 2);

      setIdealWeight({
        min: minIdealWeightKg,
        max: maxIdealWeightKg,
      });
    }
  }, [units]);

  return (
    <React.Fragment>
      <div className='imperial-inputs'>
        <div className='imperial-inputs__group'>
          <label className='body-s'>Height</label>
          <div className='imperial-inputs__box'>
            <div className='imperial-inputs__input-container'>
              <input
                className='heading-m'
                type='number'
                placeholder='0'
                onChange={e => onInputChange('heightFeet', e)}
              />
              <span className='heading-m imperial-unit'>ft</span>
            </div>
            <div className='imperial-inputs__input-container'>
              <input
                className='heading-m'
                type='number'
                placeholder='0'
                onChange={e => onInputChange('heightInches', e)}
              />
              <span className='heading-m imperial-unit'>in</span>
            </div>
          </div>
        </div>
        <div className='imperial-inputs__group'>
          <label className='body-s'>Weight</label>
          <div className='imperial-inputs__box'>
            <div className='imperial-inputs__input-container'>
              <input
                className='heading-m'
                type='number'
                placeholder='0'
                onChange={e => onInputChange('weightStones', e)}
              />
              <span className='heading-m imperial-unit'>st</span>
            </div>
            <div className='imperial-inputs__input-container'>
              <input
                className='heading-m'
                type='number'
                placeholder='0'
                onChange={e => onInputChange('weightPounds', e)}
              />
              <span className='heading-m imperial-unit imperial-unit-lbs'>
                lbs
              </span>
            </div>
          </div>
        </div>
      </div>
      <Result
        result={result}
        idealWeight={idealWeight}
        weight={units?.weightStones * 14 + units?.weightPounds}
        unitType='imperial'
      />
    </React.Fragment>
  );
};

export default Imperial;

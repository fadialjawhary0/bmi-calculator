import React, { useEffect, useState } from 'react';

import Result from '../Result/Result';
import { ImperialBMI } from '../../../helpers';
import { ImperialInputFields } from '../../../constants/imperialInputFields.const';

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
    const { result, idealWeight } = ImperialBMI(units);
    setResult(result);
    setIdealWeight(idealWeight);
  }, [units]);

  const renderInputField = (key, unit) => (
    <div className='imperial-inputs__input-container'>
      <input
        className='heading-m'
        type='number'
        placeholder='0'
        value={units[key] || ''}
        onChange={e => onInputChange(key, e)}
      />
      <span className='heading-m imperial-unit'>{unit}</span>
    </div>
  );

  return (
    <React.Fragment>
      <div className='imperial-inputs'>
        {ImperialInputFields.map((group, groupIndex) => (
          <div key={groupIndex} className='imperial-inputs__group'>
            <label className='body-s'>{group.label}</label>
            <div className='imperial-inputs__box'>
              {group.fields.map((field, fieldIndex) => (
                <React.Fragment key={fieldIndex}>{renderInputField(field.key, field.unit)}</React.Fragment>
              ))}
            </div>
          </div>
        ))}
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

import React from 'react';

import { HealthTips } from '../../../constants/healthTips.const';

const HealthTipSection = () => {
  return (
    <section className='health-container'>
      {HealthTips.map(tip => (
        <div key={tip?.key} className='tip-group'>
          <img src={tip?.img} alt={tip?.title} />
          <div className='tip-group__text'>
            <h4 className='heading-m'>{tip?.title}</h4>
            <p className='body-m'>{tip?.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HealthTipSection;

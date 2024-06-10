import React from 'react';

import { Limitations } from '../../../constants/limitations.const';

const LimitationsSection = () => {
  return (
    <section className='limitations-container'>
      <div className='limitations-text-container'>
        <h2 className='heading-l'>Limitations of BMI</h2>
        <p className='body-m'>
          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
          groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className='limitations-cards'>
        {Limitations.map(limit => (
          <div key={limit?.key} className={`${limit?.title.toLowerCase()}-card card`}>
            <div className='card__header'>
              <img src={limit?.img} alt={`${limit?.title}`} />
              <h5 className='heading-s'>{limit?.title}</h5>
            </div>
            <p className='body-m'>{limit?.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitationsSection;

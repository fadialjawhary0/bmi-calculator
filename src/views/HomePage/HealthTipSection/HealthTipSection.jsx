import React from 'react';

import eatingIcon from '../../../assets/icon-eating.svg';
import exerciseIcon from '../../../assets/icon-exercise.svg';
import sleepIcon from '../../../assets/icon-sleep.svg';

const HealthTipSection = () => {
  return (
    <section className='health-container'>
      <div className='tip-group'>
        <img src={eatingIcon} alt='eating' />
        <div className='tip-group__text'>
          <h4 className='heading-m'>Healthy eating</h4>
          <p className='body-m'>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
      <div className='tip-group'>
        <img src={exerciseIcon} alt='exercise' />
        <div className='tip-group__text'>
          <h4 className='heading-m'>Regular exercise</h4>
          <p className='body-m'>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>
      <div className='tip-group'>
        <img src={sleepIcon} alt='sleep' />
        <div className='tip-group__text'>
          <h4 className='heading-m'>Adequate sleep</h4>
          <p className='body-m'>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthTipSection;

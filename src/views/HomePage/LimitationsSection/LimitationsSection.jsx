import React from 'react';

import genderIcon from '../../../assets/icon-gender.svg';
import ageIcon from '../../../assets/icon-age.svg';
import muscleIcon from '../../../assets/icon-muscle.svg';
import pregnancyIcon from '../../../assets/icon-pregnancy.svg';
import raceIcon from '../../../assets/icon-race.svg';

const LimitationsSection = () => {
  return (
    <section className='limitations-container'>
      <div className='limitations-text-container'>
        <h2 className='heading-l'>Limitations of BMI</h2>
        <p className='body-m'>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className='limitations-cards'>
        <div className='gender-card card'>
          <div className='card__header'>
            <img src={genderIcon} alt='gender' />
            <h5 className='heading-s'>Gender</h5>
          </div>
          <p className='body-m'>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className='age-card card'>
          <div className='card__header'>
            <img src={ageIcon} alt='age' />
            <h5 className='heading-s'>Age</h5>
          </div>
          <p className='body-m'>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className='muscle-card card'>
          <div className='card__header'>
            <img src={muscleIcon} alt='muscle' />
            <h5 className='heading-s'>Muscle</h5>
          </div>
          <p className='body-m'>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className='pregnancy-card card'>
          <div className='card__header'>
            <img src={pregnancyIcon} alt='pregnancy' />
            <h5 className='heading-s'>Pregnancy</h5>
          </div>
          <p className='body-m'>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className='race-card card'>
          <div className='card__header'>
            <img src={raceIcon} alt='race' />
            <h5 className='heading-s'>Race</h5>
          </div>
          <p className='body-m'>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;

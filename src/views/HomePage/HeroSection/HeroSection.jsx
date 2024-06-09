import React from 'react';

import Logo from '../../../assets/logo.svg';
import BMICalculator from '../../../component/BMICalculator/BMICalculator';

const HeroSection = () => {
  return (
    <section className='hero-container'>
      <img className='hero-logo' src={Logo} alt='Logo' />

      <div className='hero-text-container'>
        <h1 className='heading-xl'>Body Mass Index Calculator</h1>
        <p className='body-m'>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>

      <BMICalculator />
    </section>
  );
};

export default HeroSection;

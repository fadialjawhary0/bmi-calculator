import React from 'react';

import manEatingImg from '../../../assets/image-man-eating.webp';

const DescriptionSection = () => {
  return (
    <section className='description-container'>
      <img src={manEatingImg} alt='man eating' />
      <div className='description-text-container'>
        <h2 className='heading-l'>What your BMI result means</h2>
        <p className='body-m'>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;

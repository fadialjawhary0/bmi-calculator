import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import HealthTipSection from './HealthTipSection/HealthTipSection';
import LimitationsSection from './LimitationsSection/LimitationsSection';

const HomePage = () => {
  return (
    <main className='home-page-main'>
      <HeroSection />
      <DescriptionSection />
      <HealthTipSection />
      <LimitationsSection />
    </main>
  );
};

export default HomePage;

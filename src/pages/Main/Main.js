import React from 'react';

// styles
import { Wrapper } from './styles';

// components
import Header from '../../components/Header';
import KoolMainSection from '../../components/KoolMainSection';
import TokenStats from '../../components/TokenStats';
import HowItWorks from '../../components/HowItWorks';
import News from '../../components/News';
import Footer from '../../components/Footer';

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <KoolMainSection />
      <TokenStats />
      <HowItWorks />
      <News />
      <Footer />
    </Wrapper>
  );
};

export default MainPage;

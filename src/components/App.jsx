import React from 'react';
import { Top } from '@components/Top';
import { Header } from '@components/Header';
import { Slider } from '@components/Slider';
import { AboutUs } from '@components/AboutUs';
import { Gallery } from '@components/Gallery';
import { Blog } from '@components/Blog';
import { Footer } from '@components/Footer';
import '@styles/global.css';

const App = () => {
  return (
    <>
      <Top />
      <Header />
      <Slider />
      <AboutUs />
      <Gallery />
      <Blog />
      <Footer />
    </>
  )
}

export default App;
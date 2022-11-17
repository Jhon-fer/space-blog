import React from 'react'
import '@styles/Slider.css'

const Slider = () => {
  return (
    <section className='slider'>
      <div className="slider-container">
        <h1 className='slider--title'>The Universe</h1>
        <p className='slider-paragraph'>The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S. contractors, academia, and international and commercial partners to explore, discover, and expand knowledge for the benefit of humanity.</p>
        <a className='slider--button' href='#about'>Let's go</a>
      </div>
    </section>
  )
}

export { Slider };
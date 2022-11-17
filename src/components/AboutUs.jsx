import React from 'react'
import '@styles/AboutUs.css'

const AboutUs = () => {
  return (
    <section id="about" className='about'>
      <div className="about__container">
        <h2 className="about--title">About Us</h2>
        <div className="about__content">
          <p className="about__content-paragraph">The National Aeronautics and Space Administration is America’s civil space program and the global leader in space exploration. The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S. contractors, academia, and international and commercial partners to explore, discover, and expand knowledge for the benefit of humanity. With an annual budget of $23.2 billion in Fiscal Year 2021, which is less than 0.5% of the overall U.S. federal budget, NASA supports more than 312,000 jobs across the United States, generating more than $64.3 billion in total economic output (Fiscal Year 2019). </p>
          <img src="../assets/images/about.png" alt="about us" className="about__content-image" />
        </div>
      </div>
    </section>
  )
}

export { AboutUs }
import React from 'react'
import '@styles/Blog.css'

const Blog = () => {
  return (
    <section id="blog" className='blog'>
      <h2 className="blog--title">Blog</h2>
      <div className="blog__container">
        <article className="blog__card">
          <img src="../assets/images/image-blog-01.png" alt="" className="blog__card--image" />
          <h3 className="blog__card--title">NASA’s Webb Catches Fiery Hourglass as New Star Forms</h3>
          <p className="blog__card--paragraph">NASA’s James Webb Space Telescope has revealed the once-hidden features of the protostar within the dark cloud L1527, providing insight into the beginnings of a new star. These blazing clouds within the Taurus star-forming region are only visible in infrared light, making it an ideal target for Webb’s Near-Infrared Camera (NIRCam).</p>
          <a href="" className="blog__card--readMore">Read more...</a>
          {/* 
          link of article:
          https://www.nasa.gov/feature/goddard/2022/nasa-s-webb-catches-fiery-hourglass-as-new-star-forms */}
        </article>
        <article className="blog__card">
          <img src="../assets/images/image-blog-02.jpg" alt="" className="blog__card--image" />
          <h3 className="blog__card--title">NASA’s Artemis I Cameras to Offer New Views of Orion, Earth, Moon</h3>
          <p className="blog__card--paragraph">During Artemis I, NASA’s Space Launch System (SLS) rocket will send the agency’s Orion spacecraft on a trek 40,000 miles beyond the Moon before returning to Earth. To capture the journey, the rocket and spacecraft are equipped with cameras that will collect valuable engineering data and share a unique perspective of humanity’s return to the Moon.</p>
          <a href="" className="blog__card--readMore">Read more...</a>
          {/* https://www.nasa.gov/feature/nasa-s-artemis-i-cameras-to-offer-new-views-of-orion-earth-moon */}
        </article>
        <article className="blog__card">
          <img src="../assets/images/image-blog-03.jpg" alt="" className="blog__card--image" />
          <h3 className="blog__card--title">NASA Awards SpaceX Second Contract Option for Artemis Moon Landing</h3>
          <p className="blog__card--paragraph">“Returning astronauts to the Moon to learn, live, and work is a bold endeavor. With multiple planned landers, from SpaceX and future partners, NASA will be better positioned to accomplish the missions of tomorrow: conducting more science on the surface of the Moon than ever before and preparing for crewed missions to Mars,”.</p>
          <a href="" className="blog__card--readMore">Read more...</a>
          {/* https://www.nasa.gov/press-release/nasa-awards-spacex-second-contract-option-for-artemis-moon-landing-0 */}
        </article>
        <article className="blog__card">
          <img src="../assets/images/image-blog-04.jpg" alt="" className="blog__card--image" />
          <h3 className="blog__card--title">We Are Going: Artemis I Launches</h3>
          <p className="blog__card--paragraph">Artemis I is the first integrated flight test of the agency’s deep space exploration systems: the Orion spacecraft, SLS rocket, and ground systems. The mission is a critical part of our Moon to Mars exploration approach—an important test before flying astronauts on the Artemis II mission.</p>
          <a href="" className="blog__card--readMore">Read more...</a>
          {/* https://www.nasa.gov/image-feature/we-are-going-artemis-i-launches */}
        </article>
        <article className="blog__card">
          <img src="../assets/images/image-blog-05.jpg" alt="" className="blog__card--image" />
          <h3 className="blog__card--title">NASA Plans Coverage of Roscosmos Spacewalks at Space Station</h3>
          <p className="blog__card--paragraph">During the spacewalks, Expedition 68’s Sergey Prokopyev and Dmitri Petelin will venture outside of the Poisk module to oversee the transfer of a radiator, an airlock, and to make electrical and hydraulic connections. Inside the orbital complex, cosmonaut Anna Kikina will control the ESA (European Space Agency).</p>
          <a href="" className="blog__card--readMore">Read more...</a>
          {/* https://www.nasa.gov/press-release/nasa-plans-coverage-of-roscosmos-spacewalks-at-space-station */}
        </article>
        <article className="blog__card">
          <img src="../assets/images/image-blog-06.jpg" alt="" className="blog__card--image" />
          <h3 className="blog__card--title">Jet Engine Installed on NASA’s X-59</h3>
          <p className="blog__card--paragraph">NASA’s X-59 is the centerpiece of the agency’s Quesst mission. The aircraft is designed to reduce the sound of sonic booms, which occur when an aircraft flies at supersonic speeds, to a quiet sonic “thump.” This will be demonstrated when NASA flies the X-59 over communities around the U.S. starting in 2025.</p>
          <a href="" className="blog__card--readMore">Read more...</a>
          {/* https://www.nasa.gov/feature/jet-engine-installed-on-nasa-s-x-59 */}
        </article>
      </div>
    </section>
  )
}

export  { Blog }
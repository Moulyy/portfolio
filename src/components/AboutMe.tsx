import Me from '../assets/me.png'
import Card from './Card'

export default function AboutMe() {
  return ( 
    <section id="about-me" className="scroll-mt-24 mb-12 animate-zoom-back">
      <Card>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <img src={Me} alt="Racoon coding a website" className="rounded-sm w-64 h-64" />
          <div className="flex flex-col gap-4 md:justify-center">
            <h2 className="text-2xl font-bold">Hello <span className='text-primary'>World,</span></h2>
            <p className="text-lg">
              I'm Théo a front-end engineer passionate about crafting 
              sleek and responsive user interfaces.
            </p>
            <p className="text-lg">
              Specializing in Vue.js and React, 
              I am committed to designing optimal user experiences with a particular focus on UX 
              and responsive design.
            </p>
            <p className="text-lg">
              Discover how I turn ideas into functional 
              and visually appealing applications.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

import BasicTimelineRoadMap from '@/components/BasicTimelineRoadMap'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowToBuy from '@/components/HowToBuy'
import JaboEcosystem from '@/components/JaboEcosystem'
import MoveToTop from '@/components/MoveToTop'

import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='relative'>

      <Hero />
      <JaboEcosystem />
      <BasicTimelineRoadMap />
      <HowToBuy />
      <MoveToTop />
      {/* <Footer /> */}
      </div>
    </>
  )
}

export default HomePage
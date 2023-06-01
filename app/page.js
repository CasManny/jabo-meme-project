
import BasicTabs from '@/components/BasicTabs'
import BasicTimelineRoadMap from '@/components/BasicTimelineRoadMap'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowToBuy from '@/components/HowToBuy'

import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <BasicTabs /> */}
      <BasicTimelineRoadMap />
      <HowToBuy />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage
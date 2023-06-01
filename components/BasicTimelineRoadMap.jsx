import React from 'react'

const BasicTimelineRoadMap = () => {
  return (
    <div id='roadmap' className='w-full my-10 h-max p-4'>
      <div className="container">
        <h1 className="text-center text-white font-extrabold text-2xl">Roadmap</h1>
        <div className="card-container grid lg:grid-cols-3 sm:grid-cols-1 mt-5 gap-4">

      <div className="card p-6 rounded-sm">
        <h1 className='jabo-white text-2xl'>Stage 1</h1>
        <p>- Pinksale Presale.</p>
        <p>- Launch and liquidity deposit.</p>
        <p>- CoinGecko & CoinMarketCap Listings.</p>
        <p>- Grow the $JAGO to 1000+ members.</p>
        <p>- Let's get $JAGO Trending on Twitter and other social networks!</p>
      </div>
      <div className="card p-6 rounded-sm">
        <h1 className='jabo-white text-2xl'>Stage 2</h1>
        <p>- Community Partnerships.</p>
        <p>- CEX listing at 8,000+ holders.</p>
        <p>- $JAGO PFP NFT release.</p>
        <p>- Creation of token gated Discord for $JAGO NFT holders.</p>
       
      </div>
      <div className="card p-6 rounded-sm">
        <h1 className='jabo-white text-2xl'>Stage 3</h1>
        <p>- Staking to earn $BNB.</p>
        <p>- Grow to 100,000+ holders.</p>
        <p>- Further exchange and cross-network expansion so we can ruffle more feathers with $JAGO.</p>
        <p>- $JAGO takeover.</p>
     
      </div>
        </div>

      </div>
    </div>
  )
}

export default BasicTimelineRoadMap
"use client"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import jagoImage from '../public/assets/1683568734640.png'
import Image from 'next/image';

const HowToBuy = () => {
  return (
      <div id='howtobuy' className='container my-6 mx-auto h-max '>
          <h1 className="text-center text-white capitalize font-extrabold text-2xl">How to buy $JAGOcoin</h1>
          <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Image src={jagoImage} />}
  >
    <h3 className="vertical-timeline-element-title">Step 1</h3>
    <h4 className="vertical-timeline-element-subtitle">Create Wallet</h4>
    <p>
      Download Metamax, Trustwallet, or another wallet of your choice from the app store or their official website. Make sure to confirm it's the real one to avoid scams!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<Image src={jagoImage} />}
  >
    <h3 className="vertical-timeline-element-title">Step 2</h3>
    <h4 className="vertical-timeline-element-subtitle">Get Some BNB</h4>
    <p>
     Now you need some BNB! You can buy BNB in most exchanges or purchase it on another wallets and send it to your new wallet before getting $JAGO!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<Image src={jagoImage} />}
  >
    <h3 className="vertical-timeline-element-title">Step 3</h3>
    <h4 className="vertical-timeline-element-subtitle">Swap BNB to JAGO</h4>
    <p>
      Connect to one of the dApps that supports $JAGO/BSC markets like pancakeswap. You can then swap your BSC to $JAGO. You may need to adjust slippage!
    </p>
  </VerticalTimelineElement>

        
</VerticalTimeline>
    </div>
  )
}

export default HowToBuy
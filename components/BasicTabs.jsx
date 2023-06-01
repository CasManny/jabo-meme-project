"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BoltIcon from '@mui/icons-material/Bolt';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id='about' className="h-fit grid place-items-center mt-10 p-4 w-full">
      <div className="mx-auto place-items-center ">
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white' }}>
        <Tabs scrollButtons={true}  allowScrollButtonsMobile variant="scrollable" textColor='white' value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
    style: {
      backgroundColor: "#E1282E"
    }
  }}>
          <Tab className='text-red' label="Jagocoin" {...a11yProps(0)} />
          <Tab label="JAGONOMICS" {...a11yProps(1)} />
          <Tab label="BSC" {...a11yProps(2)} />
          <Tab label="CONTACT ADDRESS" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <p className='text-white text-xl sm:text-base '>
            $JAGO is a meme coin that lacks any inherent worth, but with prospects of financial gain, it has no official plan or speculative commitments.t has a structured team but serves no practical purpose. Our presence solely revolves around providing entertainment.
            </p>
            <p className='mt-4 text-xl text-white'>Don't be a chicken - invest in Jago.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className='text-white text-xl '><span><BoltIcon /></span> 5 Billion total supply forever</p>
        <p className='text-white text-xl '><span><BoltIcon /></span> 90% for Liquidity pool</p>
        <p className='text-white text-xl '><span><BoltIcon /></span> 5% for Exchanges</p>
        <p className='text-white text-xl '><span><BoltIcon /></span> 4% for Marketing/Community</p>
        <p className='text-white text-xl '><span><BoltIcon /></span> 1% for Team</p>
      </TabPanel>
          <TabPanel value={value} index={2}>
            <p className='text-white mb-4 text-2xl'>For cheaper fees and fast transactions</p>
            <div className="tab-container text-white">
              <h1 className='font-extrabold'>Max Liquidity</h1>
              <p>90 percent of $JAGO is sentenced on that LP</p>
            </div>
            <div className="tab-container text-white">
              <h1 className='font-extrabold'>Zero Taxes</h1>
              <p>Them roosters don't love no taxes, $JAGO ain't different?</p>
            </div>
      </TabPanel>
          <TabPanel value={value} index={3}>
            <p className='text-white text-xl'>Contract address will be send to you after token is created</p>
      </TabPanel>
    </Box>

      </div>

    </div>
  );
}
"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function JaboEcosystem() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <div id='about' className='container my-12'>
          <h1 className="text-center font-extrabold text-white my-10 text-3xl">JAGOcoin Ecosystem</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Jagocoin</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            $JAGO is a meme coin that lacks any inherent worth, but with prospects of financial gain, it has no official plan or speculative commitments.It has a structured team but serves no practical purpose. Our presence solely revolves around providing entertainment.
          </Typography>
          <Typography>
           Don't be a chicken - invest in Jago.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>JAGONOMICS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           5 Billion total supply forever
          </Typography>
          <Typography>
           90% for Liquidity pool
          </Typography>
          <Typography>
           5% for Exchanges
          </Typography>
          <Typography>
           4% for Marketing/Community
          </Typography>
          <Typography>
           1% for Team
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>BSC</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           For cheaper fees and fast transactions
          </Typography>
          <Typography>
           Max Liquidity
          </Typography>
          <Typography>
           90 percent of $JAGO is sentenced on that LP
          </Typography>
          <Typography>
           Zero Taxes
          </Typography>
          <Typography>
           Them roosters don't love no taxes, $JAGO ain't different?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Contract address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography noWrap='false'>
            {/* 0xA0EcE74981AF3eD84D4659fe1F469E7c47e5Ed33 */}
            0x4aa2dd3a305c7250ca8833f97b7aee1d42d2b58d
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Cards from '../components/cards';
import CTA from '../components/cta';
import CTA2 from '../components/cta2';
import SmokeAlarms from '../components/smoke-alarms';
import WaterEfficiency from '../components/water-efficiency';
import PSPCare from '../components/pinkslip-priority-care';
import SafetyCheck from '../components/safety-check';
import CTA3 from '../components/cta3';
import CTA4 from '../components/cta4';
import Pricing from '../components/pricing';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO
      keywords={[
        `pinkslip property`,
        `domestic smoke alarm test certificate`,
        `heat and smoke detector tester`,
        `mains smoke alarm test`,
        `smoke alarm annual test`,
        `smoke alarm fire test`,
        `smoke alarm inspection and test annual verification report`,
        `smoke alarm test certificate nsw`,
        `smoke alarm test cost`,
        `smoke alarm test gas`,
        `smoke alarm test report`,
        `smoke alarm test schedule`,
        `smoke alarm tester`,
        `smoke alarm testing cost`,
        `smoke alarm testing services port macquarie`,
        `smoke alarm testing services`,
        `smoke alarm testing`,
        `smoke and carbon monoxide alarm test certificate`,
        `smoke detector fire test`,
        `smoke detector test alarm`,
        `smoke detector test certificate`,
        `smoke detector test gas`,
        `smoke detector test report`,
      ]}
    />
    <Hero />
    <Cards />
    <CTA />
    <CTA2 />
    <SmokeAlarms />
    <WaterEfficiency />
    <PSPCare />
    <SafetyCheck />
    <CTA3 />
    <CTA4 />
    <Pricing />
    <Contact />
  </Layout>
);

export default IndexPage;

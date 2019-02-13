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
        'pinkslip property',
        'plumbers port macquarie nsw',
        'plumber in port macquarie',
        'affordable plumbing port macquarie',
        'plumbing jobs port macquarie',
        'emergency plumber port macquarie',
        'gas plumber port macquarie',
        'roof plumber port macquarie',
        'plumbing supplies port macquarie',
        'plumbing supplies port macquarie nsw',
        'b j crowley plumbing port macquarie',
        'laser plumbing port macquarie',
        'wallis plumbing port macquarie',
        'hanna plumbing port macquarie',
        't & t plumbing port macquarie',
        'reece plumbing port macquarie',
        'reece plumbing port macquarie nsw',
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

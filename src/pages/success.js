import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Success = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center leading-normal py-16 text-center">
      <Link className="no-underline" to="/">
        <h1 className="font-condensed text-grey-darkest text-5xl uppercase">
          Message received!
        </h1>
        <p className="font-bold no-underline text-pink text-lg">
          Click to return to the home page
        </p>
      </Link>
    </div>
  </Layout>
);

export default Success;

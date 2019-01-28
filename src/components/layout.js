import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import '../css/style.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon.png?v=Kmn7JO7BvE"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=Kmn7JO7BvE"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=Kmn7JO7BvE"
          />
          <link rel="manifest" href="/site.webmanifest?v=Kmn7JO7BvE" />
          <link rel="shortcut icon" href="/favicon.ico?v=Kmn7JO7BvE" />
          <meta name="apple-mobile-web-app-title" content="Pinkslip Property" />
          <meta name="application-name" content="Pinkslip Property" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#fe7bac" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex flex-col flex-1 md:justify-start w-full">
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

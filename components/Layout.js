import React from 'react';
import Head from 'next/head';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <title>{pageTitle}</title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

		    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/logo/favicon.ico"/>
        <meta name="google-site-verification" content="ccshWgoBzF7eQvUMB4QTQBaYo3n94acz1gEIF7WQUn0" />
      </Head>
      
        {children}

    </div>
  );
};

export default Layout;

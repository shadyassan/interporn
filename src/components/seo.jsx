import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { siteMetadata } from 'site-settings/site-metadata';

export const SEO = ({ title, description, canonical, css, js }) => (
  <Head>
    <title>
      {siteMetadata.title}
      {' | '}
      {title}
    </title>
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="InterPorn" />
    <meta property="og:url" content={`${canonical}`} />
    {css && <link rel="stylesheet" href={`${css}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {js && <Script src={`${js}`}></Script>}
  </Head>
);

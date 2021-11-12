import React from 'react';
import { HeadLinkWrapper, Legend, LinkButton } from './head-link.style';

const HeadLink = ({ legend, href, children }) => {
  return (
    <HeadLinkWrapper>
      {legend && <Legend>{legend}</Legend>}
      <LinkButton href={href}>{children}</LinkButton>
    </HeadLinkWrapper>
  );
};

export default HeadLink;

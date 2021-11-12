import React from 'react';
import { LayoutWrapper } from './app-layout.style';
import Header from '../header/header';
import PageFooter from '../footer/footer';
import ModalPlayer from 'features/modal-player';
import MobileNavigation from 'layouts/mobile-navigation/mobile-navigation';

const SiteLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <PageFooter />
      <ModalPlayer />
      <MobileNavigation />
    </LayoutWrapper>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;

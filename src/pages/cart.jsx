import { SEO } from 'components/seo';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import { getLayout } from 'layouts/app-layout/app-layout';
import PageHeader from 'layouts/page-header/page-header';
import Section from 'layouts/section/section';
import Checkout from 'features/checkout/checkout';

import bgImage1 from 'assets/images/bg-image-1.jpg';
import bgImage3 from 'assets/images/bg-image-3.jpg';

import {
  MainContentArea,
  MainSection,
  Heading,
  SubHeading,
} from 'assets/styles/pages.style';

export default function Cart() {
  return (
    <>
      <SEO title="Cart" description="Cart page" />

      <PageHeader
        background={{
          backgroundImage: `url(${bgImage3.src})`,
        }}>
        <MainSection height={1} size={2}>
          <Heading size={2}>Shopping</Heading>
          <SubHeading size={1}>Cart</SubHeading>
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section
          background={{
            backgroundImage: `url(${bgImage1.src})`,
          }}>
          <MainSection size={1}>
            <ProfileProvider>
              <Checkout />
            </ProfileProvider>
          </MainSection>
        </Section>
      </MainContentArea>
    </>
  );
}

Cart.getLayout = getLayout;

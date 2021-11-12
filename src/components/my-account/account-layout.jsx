import { SEO } from 'components/seo';
import PageHeader from 'layouts/page-header/page-header';
import Section from 'layouts/section/section';
import bgImage2 from 'assets/images/bg-image-2.jpg';

import {
  MainContentArea,
  MainSection,
  Heading,
  SubHeading,
} from 'assets/styles/pages.style';

import AccountNav from 'components/my-account/account-nav/account-nav';
import { Grid, GridColumn } from 'assets/styles/framework.style';

const AccountLayout = ({ children }) => {
  return (
    <>
      <SEO title="My account" description="My account" />

      <PageHeader
        grid
        background={{
          backgroundImage: `url(${bgImage2.src})`,
        }}>
        <MainSection height={2} size={2}>
          <Heading size={2}>Welcome</Heading>
          <SubHeading size={1}>Personal Account</SubHeading>
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section>
          <MainSection>
            <Grid gap={10}>
              <GridColumn gridColumn="span 3">
                <AccountNav />
              </GridColumn>
              <GridColumn gridColumn="span 9">{children}</GridColumn>
            </Grid>
          </MainSection>
        </Section>
      </MainContentArea>
    </>
  );
};

export default AccountLayout;

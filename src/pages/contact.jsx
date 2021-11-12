import { SEO } from 'components/seo';
import PageHeader from 'layouts/page-header/page-header';
import Section from 'layouts/section/section';
import { getLayout } from 'layouts/app-layout/app-layout';
import { Grid, GridColumn } from 'assets/styles/framework.style';

import {
  MainContentArea,
  MainSection,
  Divider,
  Heading,
  SubHeading,
} from 'assets/styles/pages.style';

import HeadLink from 'components/head-link/head-link';
import ImageWrapper from 'components/image-wrapper/image-wrapper';
import ContactForm from 'features/contact-form/contact-form';
import bgImage1 from 'assets/images/bg-image-1.jpg';
import bgImage2 from 'assets/images/bg-image-2.jpg';
import contactImage from 'assets/images/contact-image.jpg';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Contact page" />

      <PageHeader
        grid
        background={{
          backgroundImage: `url(${bgImage2.src})`,
        }}>
        <MainSection height={2} size={2}>
          <Heading size={2}>Angel the drimgirl</Heading>
          <SubHeading size={1}>Contact</SubHeading>
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section
          background={{
            backgroundImage: `url(${bgImage1.src})`,
          }}>
          <MainSection size={1}>
            <Grid gap={12}>
              <GridColumn gridColumn="span 5">
                <Divider pos="top" />
                <HeadLink legend="E-mail" href="mailto:interport@.com">
                  interport@.com
                </HeadLink>
                <HeadLink legend="Skype" href="mailto:interport@.com">
                  interport@.com
                </HeadLink>
                <Divider />
              </GridColumn>
              <GridColumn gridColumn="span 7">
                <ImageWrapper
                  name="Our contacts"
                  src={contactImage.src}
                  width={900}
                  height={490}
                />
              </GridColumn>
            </Grid>
          </MainSection>
          <MainSection size={0}>
            <ContactForm
              heading="We make"
              subheading="your dream"
              title="You Can Order Your Clip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pellentesque amet gravida bibendum Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque pellentesque amet gravida
              bibendum
            </ContactForm>
          </MainSection>
        </Section>
      </MainContentArea>
    </>
  );
}

Contact.getLayout = getLayout;

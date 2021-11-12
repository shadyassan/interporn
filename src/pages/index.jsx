import { SEO } from 'components/seo';
import {
  MainContentArea,
  MainSection,
  Paragraph,
  Heading,
  SubHeading,
} from 'assets/styles/pages.style';

import { getLayout } from 'layouts/app-layout/app-layout';
import { usePopularGamesQuery } from '@framework/games/get-popular-games';
import { Grid, GridColumn } from 'assets/styles/framework.style';
import Section from 'layouts/section/section';
import PageHeader from 'layouts/page-header/page-header';
import HomeSlider from 'components/home-slider/home-slider';
import CountUpContainer from 'components/count-up/count-up';
import ImageWrapper from 'components/image-wrapper/image-wrapper';
import OverlayGrid from 'components/overlay-grid/overlay-grid';
import CategoryCarousel from 'components/carousel/carousel';

import Gallery from 'features/gallery/gallery';
import ContactForm from 'features/contact-form/contact-form';

import Image1 from 'assets/images/image-1.jpg';
import bgImage1 from 'assets/images/bg-image-1.jpg';
import bgImage2 from 'assets/images/bg-image-2.jpg';
import bgImage3 from 'assets/images/bg-image-3.jpg';
import bgImage4 from 'assets/images/bg-image-4.jpg';

export default function Home() {
  const { data, isLoading } = usePopularGamesQuery();

  return (
    <>
      <SEO title="Home" description="Home page" />

      <PageHeader
        grid
        background={{
          backgroundImage: `url(${bgImage4.src})`,
        }}>
        <MainSection height={[3, 1]} size={2}>
          <HomeSlider />
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section>
          <MainSection>
            <Gallery
              data={data}
              isLoading={isLoading}
              direction="vertical"
              heading="Popular"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium arcu commodo dignissim"
            />
          </MainSection>
        </Section>
        <Section
          background={{
            backgroundAttachment: 'fixed',
            backgroundImage: `url(${bgImage1.src})`,
          }}>
          <MainSection height={0}>
            <CountUpContainer />
          </MainSection>
        </Section>
        <Section
          background={{
            backgroundImage: `url(${bgImage2.src})`,
          }}>
          <OverlayGrid />
          <MainSection>
            <CategoryCarousel title="Categories" />
          </MainSection>
        </Section>
        <Section
          background={{
            backgroundImage: `url(${bgImage3.src})`,
          }}>
          <MainSection>
            <Grid mb={9} gap={10} align={'center'}>
              <GridColumn gridColumn="span 5">
                <ImageWrapper src={Image1} />
              </GridColumn>
              <GridColumn gridColumn="span 7">
                <Heading size={1}>No compromise</Heading>
                <SubHeading size={1}>You own rules.</SubHeading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque pellentesque amet gravida bibendum pellentesque et
                  curabitur pharetra. Volutpat proin tellus, vitae est. Eu
                  tellus luctus sit lobortis. Iaculis sit scelerisque aliquam
                  condimentum morbi.
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque pellentesque amet gravida bibendum pellentesque et
                  curabitur pharetra. Volutpat proin tellus, vitae est. Eu
                  tellus luctus sit lobortis. Iaculis sit scelerisque aliquam
                  condimentum morbi.
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque pellentesque amet gravida bibendum
                </Paragraph>
              </GridColumn>
            </Grid>
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

Home.getLayout = getLayout;

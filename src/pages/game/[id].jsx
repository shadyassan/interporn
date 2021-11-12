import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SEO } from 'components/seo';
import { getLayout } from 'layouts/app-layout/app-layout';
import PageHeader from 'layouts/page-header/page-header';
import Section from 'layouts/section/section';
import { Grid, GridColumn } from 'assets/styles/framework.style';
import ContactForm from 'features/contact-form/contact-form';
import GalleryCarousel from 'components/gallery-carousel/gallery-carousel';
import { useGameQuery } from '@framework/games/get-game';
import { truncateString } from 'utils';
import { Button } from 'components/common/button/button';
import { CART_PAGE } from 'site-settings/site-navigation';
import { useCart } from 'contexts/cart/use-cart';
import { useUI } from 'contexts/ui.context';
import bgImage2 from 'assets/images/bg-image-2.jpg';

import {
  MainContentArea,
  MainSection,
  AbsoluteSection,
  TitleHolder,
  TitleWithLine,
  SubTitle,
  Text,
  Heading,
  SubHeading,
  ButtonsGroup,
} from 'assets/styles/pages.style';

const PopupLink = dynamic(() => import('components/popup-link/popup-link'));

const VideoListTwo = dynamic(() =>
  import('components/video-grid/video-list-two')
);

export { getStaticPaths, getStaticProps } from '@framework/ssr/game';
export default function GamePage({ data }) {
  const { addItem, isInCart } = useCart();
  const { openVideo, setVideo, setActiveGame } = useUI();

  const runVideo = (payload) => {
    setVideo(payload);
    openVideo();
  };

  return (
    <>
      <SEO
        title={data.title}
        description={truncateString(data.description, 100)}
      />

      <PageHeader
        grid
        background={{
          backgroundImage: data?.background_image
            ? `url(${data.background_image})`
            : '',
        }}>
        <MainSection height={1} size={2}>
          <Grid gap={6}>
            <GridColumn gridColumn="span 5">
              <Heading size={2}>Video</Heading>
              <SubHeading size={1}>{data.title}</SubHeading>
              <ButtonsGroup>
                {data.bay ? (
                  <Button
                    onClick={() => setActiveGame(data)}
                    radius="large"
                    size="big">
                    Start Game
                  </Button>
                ) : !isInCart(data.id) ? (
                  <Button
                    onClick={() => addItem(data)}
                    radius="large"
                    size="big">
                    Buy Now
                  </Button>
                ) : (
                  <Link href={CART_PAGE} passHref>
                    <Button radius="large" size="big">
                      Cart
                    </Button>
                  </Link>
                )}
                <Button
                  onClick={() => runVideo(data.trailer)}
                  variant="outlined"
                  radius="large"
                  size="big">
                  View trailer
                </Button>
              </ButtonsGroup>
            </GridColumn>
            <GridColumn gridColumn="span 7">
              {data?.featured_image_single && data?.title && data?.trailer && (
                <PopupLink
                  handler={() => setActiveGame(data)}
                  image={data.featured_image_single}
                  name={data.title}
                  width={930}
                  height={525}
                />
              )}
            </GridColumn>
          </Grid>
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section>
          <MainSection size={2}>
            <Grid gap={6}>
              <GridColumn gridColumn="span 5">
                <TitleHolder mb={9} direction="column">
                  <TitleWithLine alignSelf="flex-start">Photos</TitleWithLine>
                  <SubTitle>from the video</SubTitle>
                </TitleHolder>
                {data?.description && (
                  <Text
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                )}
              </GridColumn>
              <GridColumn gridColumn="span 7">
                <AbsoluteSection>
                  {data?.gallery && data.gallery.length > 0 && (
                    <GalleryCarousel data={data.gallery} />
                  )}
                </AbsoluteSection>
              </GridColumn>
            </Grid>
          </MainSection>
        </Section>
        <Section
          background={{
            backgroundImage: `url(${bgImage2.src})`,
          }}>
          {data?.relative_games && (
            <MainSection size={2}>
              <VideoListTwo
                title="You might like it"
                limit={4}
                data={data.relative_games}
              />
            </MainSection>
          )}

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

GamePage.getLayout = getLayout;

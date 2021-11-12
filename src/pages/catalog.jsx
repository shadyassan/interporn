import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import PageHeader from 'layouts/page-header/page-header';
import Section from 'layouts/section/section';
import { SEO } from 'components/seo';
import { getLayout } from 'layouts/app-layout/app-layout';
import { useRefScroll } from 'utils/use-ref-scroll';
import { sortBy } from 'utils';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import { useNewGamesQuery } from '@framework/games/get-new-games';

import OverlayGrid from 'components/overlay-grid/overlay-grid';
import Gallery from 'features/gallery/gallery';
import ContactForm from 'features/contact-form/contact-form';
import bgImage1 from 'assets/images/bg-image-1.jpg';
import bgImage2 from 'assets/images/bg-image-2.jpg';

import {
  MainContentArea,
  MainSectionWithSidebar,
  MainSection,
  ContentSection,
  Heading,
  SubHeading,
} from 'assets/styles/pages.style';

const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const VideoList = dynamic(() => import('components/video-grid/video-list'));
const Dropdown = dynamic(() =>
  import('components/common/form/dropdown/dropdown')
);

const initialState = 'Choose your category';
export default function Catalog() {
  const { query } = useRouter();
  const [heading, setHeading] = useState(initialState);
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -65,
  });

  const { data, isLoading } = useNewGamesQuery();
  const { data: categories, isLoading: isLoadingCategories } =
    useCategoriesQuery({ limit: 50 });

  useEffect(() => {
    if (query.category || query.search) {
      scroll();
    }
    if (query.category) {
      if (categories?.length > 0) {
        const category = categories.find(({ id }) => id === query.category);
        if (Object.keys(category).length > 0) {
          setHeading(category?.title);
        }
      }
    } else {
      setHeading(initialState);
    }
  }, [query.category, query.search, categories]);

  return (
    <>
      <SEO title="Catalog" description="Video catalog" />

      <PageHeader
        grid
        background={{
          backgroundImage: `url(${bgImage1.src})`,
        }}>
        <MainSection height={2} size={2}>
          <Heading size={2}>{heading}</Heading>
          <SubHeading size={1}>Video</SubHeading>
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section>
          <MainSectionWithSidebar size={1}>
            <Sidebar data={categories} isLoading={isLoadingCategories} />
            <ContentSection ref={targetRef}>
              <VideoList
                title="Video"
                columns={3}
                border
                titleWithLine
                component={() => <Dropdown options={sortBy} />}
              />
            </ContentSection>
          </MainSectionWithSidebar>
        </Section>
        <Section
          background={{
            backgroundImage: `url(${bgImage2.src})`,
          }}>
          <OverlayGrid />
          <MainSection size={1}>
            <Gallery
              data={data}
              isLoading={isLoading}
              heading="New"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium arcu commodo dignissim"
            />
          </MainSection>
        </Section>
        <Section>
          <MainSection>
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

Catalog.getLayout = getLayout;

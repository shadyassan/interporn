import { SEO } from 'components/seo';
import { themeGet } from '@styled-system/theme-get';
import { getLayout } from 'layouts/app-layout/app-layout';
import PageHeader from 'layouts/page-header/page-header';
import Section from 'layouts/section/section';
import Link from 'next/link';
import styled from 'styled-components';

import {
  MainContentArea,
  MainSection,
  Heading,
  Paragraph,
} from 'assets/styles/pages.style';

import bgImage2 from 'assets/images/bg-image-2.jpg';
import { Button } from 'components/common/button/button';

const NotFoundHeading = styled.h2`
  font-family: ${themeGet('fonts.optional')};
  font-weight: ${themeGet('fontWeights.semibold')};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default function Custom404() {
  return (
    <>
      <SEO title="Not found" description="404 page" />

      <PageHeader
        grid
        background={{
          backgroundImage: `url(${bgImage2.src})`,
        }}>
        <MainSection size={2}>
          <Heading size={2}>Not found</Heading>
        </MainSection>
      </PageHeader>

      <MainContentArea>
        <Section>
          <MainSection>
            <NotFoundHeading>Looks like you are lost</NotFoundHeading>
            <Paragraph>
              We can&apos;t find the page you&apos;re looking for
            </Paragraph>
            <Link href="/" passHref>
              <Button>Go to main</Button>
            </Link>
          </MainSection>
        </Section>
      </MainContentArea>
    </>
  );
}

Custom404.getLayout = getLayout;

import { useRouter } from 'next/router';
import StickyBox from 'react-sticky-box';
import Loader from 'components/loader/loader';
import { useWindowSize } from 'utils/use-window-size';

import {
  SidebarWrapper,
  WidgetWrapper,
  WidgetList,
  WidgetListItem,
  Title,
} from './sidebar.style';

import { WidgetTitle } from 'assets/styles/pages.style';

const CategoryWidget = ({ title = 'Categories', data, isLoading }) => {
  const router = useRouter();
  const { pathname, query } = router;
  const selectedQueries = query.category ?? '';

  const onCategoryClick = (e, id) => {
    e.preventDefault();

    if (query.category === id) {
      delete query.category;
    } else {
      query.category = id;
    }

    const { ...rest } = query;

    router.push(
      {
        pathname,
        query: { ...rest },
      },
      null,
      { scroll: false }
    );
  };

  if (isLoading) return <Loader />;

  if (data.length === 0) return null;

  return (
    <WidgetWrapper>
      <WidgetTitle>{title}</WidgetTitle>
      <WidgetList>
        {data.map(({ id, title }) => {
          return (
            <WidgetListItem key={id}>
              <Title
                active={selectedQueries === id}
                onClick={(e) => onCategoryClick(e, id)}>
                {title}
              </Title>
            </WidgetListItem>
          );
        })}
      </WidgetList>
    </WidgetWrapper>
  );
};

const Sidebar = ({ ...rest }) => {
  const { isMobile } = useWindowSize(767);
  return isMobile ? (
    <SidebarWrapper>
      <CategoryWidget {...rest} />
    </SidebarWrapper>
  ) : (
    <StickyBox offsetTop={80}>
      <SidebarWrapper>
        <CategoryWidget {...rest} />
      </SidebarWrapper>
    </StickyBox>
  );
};

export default Sidebar;

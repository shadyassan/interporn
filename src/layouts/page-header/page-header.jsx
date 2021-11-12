import { PageHeaderWrapper } from './page-header.style';
import OverlayImage from 'components/overlay-image/overlay-image';
import OverlayGrid from 'components/overlay-grid/overlay-grid';

const PageHeader = ({ background, opacity, grid, children }) => {
  return (
    <PageHeaderWrapper>
      <OverlayImage background={background} opacity={opacity} />
      {grid && <OverlayGrid />}
      {children && children}
    </PageHeaderWrapper>
  );
};

export default PageHeader;

import { OverlayGridWrapper, GridDivider } from './overlay-grid.style';

const OverlayGrid = () => {
  return (
    <OverlayGridWrapper>
      {[20, 30, 90, 80, 13].map((value, index) => (
        <GridDivider key={index} value={value} />
      ))}
    </OverlayGridWrapper>
  );
};

export default OverlayGrid;

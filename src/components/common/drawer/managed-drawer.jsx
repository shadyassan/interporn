import { useUI } from 'contexts/ui.context';
import { Drawer } from './drawer';
// import AuthenticationForm from 'features/authentication-form';

const ManagedDrawer = () => {
  const { displaySidebar, closeSidebar } = useUI();
  return (
    <Drawer
      open={displaySidebar}
      placement="left"
      onClose={closeSidebar}
      handler={false}
      showMask={true}
      level={null}>
      test
    </Drawer>
  );
};

export default ManagedDrawer;

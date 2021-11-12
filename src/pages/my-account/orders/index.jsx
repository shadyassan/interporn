import { getLayout } from 'layouts/app-layout/app-layout';
import AccountLayout from 'components/my-account/account-layout';
import OrdersTable from 'components/my-account/orders-table';

const OrdersTablePage = () => {
  return (
    <AccountLayout>
      <OrdersTable />
    </AccountLayout>
  );
};

OrdersTablePage.authenticate = true;

OrdersTablePage.getLayout = getLayout;

export default OrdersTablePage;

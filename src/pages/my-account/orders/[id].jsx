import { getLayout } from 'layouts/app-layout/app-layout';
import AccountLayout from 'components/my-account/account-layout';
import OrderDetails from 'components/order/order-details';

const OrderPage = () => {
  return (
    <AccountLayout>
      <OrderDetails />
    </AccountLayout>
  );
};

OrderPage.authenticate = true;

OrderPage.getLayout = getLayout;

export default OrderPage;

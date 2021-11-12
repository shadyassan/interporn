import { getLayout } from 'layouts/app-layout/app-layout';
import AccountLayout from 'components/my-account/account-layout';
import AccountDetails from 'components/my-account/account-details';

const AccountPage = () => {
  return (
    <AccountLayout>
      <AccountDetails />
    </AccountLayout>
  );
};

AccountPage.authenticate = true;

AccountPage.getLayout = getLayout;

export default AccountPage;

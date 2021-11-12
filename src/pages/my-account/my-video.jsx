import { getLayout } from 'layouts/app-layout/app-layout';
import AccountLayout from 'components/my-account/account-layout';
import AccountMyVideo from 'components/my-account/account-my-video';

const AccountPageMyVideo = () => {
  return (
    <AccountLayout>
      <AccountMyVideo />
    </AccountLayout>
  );
};

AccountPageMyVideo.authenticate = true;

AccountPageMyVideo.getLayout = getLayout;

export default AccountPageMyVideo;

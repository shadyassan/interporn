import { BorderWrapper } from 'assets/styles/pages.style';

import ChangeEmail from './change-email';
import ChangePassword from './change-password';

const AccountDetails = () => {
  return (
    <BorderWrapper borderLeft>
      <ChangeEmail />
      <ChangePassword />
    </BorderWrapper>
  );
};

export default AccountDetails;

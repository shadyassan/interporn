import { useUI } from 'contexts/ui.context';
import styled from 'styled-components';
import useUser from '@framework/auth/use-user';
import Loader from 'components/loader/loader';
import Login from 'features/authentication-form/login';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
`;

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUI();
  const { me } = useUser();

  const isUser = !!me;
  if (!isUser && !isAuthenticated) {
    return (
      <LoginWrapper>
        <Login logo={true} />
      </LoginWrapper>
    );
  }
  if (isUser && isAuthenticated) {
    return <>{children}</>;
  }

  return <Loader />;
};

export default PrivateRoute;

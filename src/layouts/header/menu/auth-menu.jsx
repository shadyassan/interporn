import React from 'react';
import Popover from 'components/popover/popover';
import { AuthorizedMenu } from './authorized-menu';
import { LogInMenuItem, SignInMenuItem } from './right-menu/right-menu.style';

const AuthMenu = ({ onLogout, handler, onJoin, isAuthenticated }) => {
  return !isAuthenticated ? (
    <>
      <LogInMenuItem onClick={() => onJoin('SIGNIN_VIEW')}>
        Log In
      </LogInMenuItem>
      <SignInMenuItem onClick={() => onJoin('SIGNUP_VIEW')}>
        Sign up
      </SignInMenuItem>
    </>
  ) : (
    <Popover
      direction="right"
      handler={handler}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;

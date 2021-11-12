import React, { memo } from 'react';
import Router from 'next/router';
import { isFunction } from 'lodash';
import { MenuIconHolder, LogoBox, LogoImage } from './logo.style';
import MenuIcon from 'components/icons/MenuIcon';

const Logo = ({ showIcon = true, handler, imageUrl, alt, onClick }) => {
  const onLogoClick = () => {
    Router.push('/');
    if (onClick) {
      onClick();
    }
  };

  return (
    <LogoBox className="logo-box">
      {showIcon && (
        <MenuIconHolder onClick={isFunction(handler) ? handler : undefined}>
          <MenuIcon />
        </MenuIconHolder>
      )}
      <LogoImage onClick={onLogoClick} src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default memo(Logo);

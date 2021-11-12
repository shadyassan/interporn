import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { isFunction } from 'lodash';
import { withRouter } from 'next/router';
import cx from 'classnames';

const NavLinkWrapper = styled.div`
  padding: 3px 0;

  a {
    display: block;
    &.current-page {
      color: #fff;
    }
  }

  .label {
    font-size: ${(props) => props.theme.fontSizes['sm']}px;
  }
`;

const NavLink = ({ href, label, router, className, onClick }) => {
  const isCurrentPath = router.pathname === href;
  return (
    <NavLinkWrapper
      onClick={isFunction(onClick) ? onClick : undefined}
      className={className ? className : ''}>
      <Link href={href}>
        <a className={cx({ ['current-page']: isCurrentPath })}>
          <span className="label">{label}</span>
        </a>
      </Link>
    </NavLinkWrapper>
  );
};

export default withRouter(NavLink);

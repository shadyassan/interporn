import Link from 'next/link';
import { useRouter } from 'next/router';
import { ACCOUNT_MENU } from 'site-settings/site-navigation';
import { WidgetTitle } from 'assets/styles/pages.style';
import { AccountNavWrapper, NavLink } from './account-nav.style';

export default function AccountNav() {
  const router = useRouter();
  const { pathname, query } = router;
  const newPathname = pathname.split('/').slice(2, 3);
  const mainPath = `/${newPathname[0]}`;

  const onClick = (e, pathname) => {
    e.preventDefault();
    const { ...rest } = query;
    router.push(
      {
        pathname,
        query: { ...rest },
      },
      null,
      { scroll: false }
    );
  };

  return (
    <AccountNavWrapper>
      <WidgetTitle>Menu</WidgetTitle>
      {ACCOUNT_MENU.map((item) => {
        const menuPathname = item.href.split('/').slice(2, 3);
        const menuPath = `/${menuPathname[0]}`;
        return (
          <Link key={item.href} href={item.href}>
            <NavLink
              onClick={(e) => onClick(e, item.href)}
              active={mainPath === menuPath}
              passHref>
              {item.defaultMessage}
            </NavLink>
          </Link>
        );
      })}
    </AccountNavWrapper>
  );
}

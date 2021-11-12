import {
  FooterWrapper,
  FooterRow,
  FooterOverlay,
  FooterCol,
  SubTitle,
  Copyright,
} from './footer.style';

import FooterBgImage from 'assets/images/double-bubble-dark.png';

import Widget from './widget';
import WidgetList from './widget-list';
import Logo from 'layouts/logo/logo';
import LogoImage from 'assets/images/big-logo.svg';
import { widget1, widget2 } from 'data';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterOverlay bgImage={FooterBgImage.src} />
      <FooterRow>
        <FooterCol>
          <Widget title="Product">
            <WidgetList values={widget1} />
          </Widget>
        </FooterCol>
        <FooterCol padding={'0 7%'}>
          <Widget>
            <Logo showIcon={false} imageUrl={LogoImage.src} />
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubTitle>
          </Widget>
        </FooterCol>
        <FooterCol>
          <Widget title="Contact">
            <WidgetList values={widget2} />
          </Widget>
        </FooterCol>
      </FooterRow>
      <Copyright>
        <p>Copyright © 2021 Interporn. All Rights Reserved.</p>
      </Copyright>
    </FooterWrapper>
  );
};
export default Footer;

import Link from 'next/link';
import cx from 'classnames';
import { useState } from 'react';
import { useCart } from 'contexts/cart/use-cart';
import { useUI } from 'contexts/ui.context';
import { CART_PAGE, GAME_PAGE } from 'site-settings/site-navigation';
import { truncateString } from 'utils';
import { CardWrapper, Overlay, VideoInfo, Actions } from './card.style';
import { ImgWrapper, VideoLink } from 'assets/styles/pages.style';
import { Button } from 'components/common/button/button';
import PlayBigIcon from 'components/icons/PlayBigIcon';
import ImageWrapper from 'components/image-wrapper/image-wrapper';

const Card = ({ data }) => {
  const { addItem, isInCart } = useCart();
  const { setVideo, openVideo, setActiveGame } = useUI();
  const [active, setActive] = useState(false);
  const { id, title, trailer, small_text, description, featured_image } = data;

  const handleView = (e) => {
    e.stopPropagation();
    setVideo(trailer);
    openVideo();
  };

  return (
    <CardWrapper
      className={cx({
        ['active']: active,
      })}>
      <ImgWrapper
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}>
        {featured_image && (
          <ImageWrapper
            name={title}
            src={featured_image}
            width={400}
            height={240}
          />
        )}
        <Link href={`${GAME_PAGE}/${id}`} passHref>
          <VideoLink>
            <PlayBigIcon color="#fff" />
          </VideoLink>
        </Link>
        <Overlay>
          <h5 className="title">
            <Link href={`${GAME_PAGE}/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </h5>
          {description && (
            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: truncateString(description, 300),
              }}
            />
          )}
          <Actions>
            {data?.bay ? (
              <div className="action-button">
                <Button
                  onClick={() => setActiveGame(data)}
                  radius="large"
                  size="big"
                  fullwidth>
                  Start Game
                </Button>
              </div>
            ) : !isInCart(id) ? (
              <div className="action-button">
                <Button
                  onClick={() => addItem(data)}
                  radius="large"
                  size="big"
                  fullwidth>
                  Buy Now
                </Button>
              </div>
            ) : (
              <div className="action-button">
                <Link href={CART_PAGE} passHref>
                  <Button radius="large" size="big" fullwidth>
                    Cart
                  </Button>
                </Link>
              </div>
            )}

            <div className="action-button">
              <Button
                onClick={handleView}
                variant="outlined"
                radius="large"
                size="big"
                fullwidth>
                view trailer
              </Button>
            </div>
          </Actions>
        </Overlay>
      </ImgWrapper>
      <VideoInfo>
        <h5 className="title">
          <Link href={`${GAME_PAGE}/${id}`} passHref>
            <a>{title}</a>
          </Link>
        </h5>
        {small_text && (
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: small_text }}
          />
        )}
      </VideoInfo>
    </CardWrapper>
  );
};

export default Card;

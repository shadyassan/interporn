import Link from 'next/link';
import cx from 'classnames';
import { useState } from 'react';
import { useUI } from 'contexts/ui.context';
import { GAME_PAGE } from 'site-settings/site-navigation';
import { truncateString } from 'utils';
import { CardWrapper, Overlay, VideoInfo, Actions } from './card.style';
import { ImgWrapper, VideoLink } from 'assets/styles/pages.style';
import { Button } from 'components/common/button/button';
import PlayBigIcon from 'components/icons/PlayBigIcon';
import ImageWrapper from 'components/image-wrapper/image-wrapper';

const Card = ({ data }) => {
  const { setActiveGame } = useUI();
  const [active, setActive] = useState(false);
  const { id, title, small_text, description, featured_image } = data;

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
            width={440}
            height={260}
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
            <div className="action-button">
              <Button
                onClick={() => setActiveGame(data)}
                radius="large"
                size="big"
                fullwidth>
                Start game
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

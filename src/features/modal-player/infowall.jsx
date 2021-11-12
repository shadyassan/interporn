import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fadeInOut } from 'utils/motion/fade-in-out';
import { CART_PAGE } from 'site-settings/site-navigation';
import { Button } from 'components/common/button/button';
import { useCart } from 'contexts/cart/use-cart';
import { useUI } from 'contexts/ui.context';

import { EndScreen, EndScreenContent, MaxContent } from './player.style';

const InfoWall = () => {
  const router = useRouter();
  const { addItem, isInCart } = useCart();
  const { active_game, closePlayer } = useUI();
  const { id } = active_game;

  const goToCart = () => {
    router.push(
      {
        pathname: CART_PAGE,
      },
      null,
      { scroll: false }
    );
    closePlayer();
  };

  return (
    <motion.div initial="from" animate="to" exit="from" variants={fadeInOut()}>
      <EndScreen>
        <EndScreenContent>
          <MaxContent>
            {!isInCart(id) ? (
              <Button
                onClick={() => addItem(active_game)}
                radius="large"
                size="big"
                fullwidth>
                Buy Now
              </Button>
            ) : (
              <Button onClick={goToCart} radius="large" size="big" fullwidth>
                Cart
              </Button>
            )}
          </MaxContent>
        </EndScreenContent>
      </EndScreen>
    </motion.div>
  );
};

export default InfoWall;

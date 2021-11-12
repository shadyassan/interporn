import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import usePrice from 'utils/use-price';
import { ProfileContext } from 'contexts/profile/profile.context';
import { useCart } from 'contexts/cart/use-cart';
import { useUI } from 'contexts/ui.context';
import { motion } from 'framer-motion';
import { fadeInOut } from 'utils/motion/fade-in-out';
import { truncateString } from 'utils';

import { Button } from 'components/common/button/button';
import { GAME_PAGE } from 'site-settings/site-navigation';

import PaymentGroup from 'components/payment-group/payment-group';
import ImageWrapper from 'components/image-wrapper/image-wrapper';

import { Grid, GridColumn } from 'assets/styles/framework.style';
import {
  OrderInfo,
  NoProductMsg,
  ItemImage,
  Item,
  ItemInfoHolder,
  ItemInfo,
  Description,
  Price,
  TextWrapper,
  Text,
  Bold,
  TotalPrice,
  InformationBox,
  Heading,
} from './checkout.style';

const OrderItem = ({ item }) => {
  const { removeItem } = useCart();
  const { id, title, featured_image, description } = item;

  const { price } = usePrice({
    amount: item.price,
  });

  return (
    <motion.div
      layout
      initial="from"
      animate="to"
      exit="from"
      variants={fadeInOut(0.25)}>
      <Item key={id}>
        {featured_image && (
          <ItemImage>
            <ImageWrapper
              domain={false}
              name={title}
              src={featured_image}
              width={240}
              height={160}
            />
          </ItemImage>
        )}
        <ItemInfoHolder>
          <ItemInfo>
            <h5 className="title">
              <Link href={`${GAME_PAGE}/${id}`}>
                <a>{title}</a>
              </Link>
            </h5>
            {description && (
              <Description
                dangerouslySetInnerHTML={{
                  __html: truncateString(description, 80),
                }}
              />
            )}
            <Price>{price}</Price>
          </ItemInfo>
          <Button
            onClick={() => removeItem(item)}
            size="small"
            radius="medium"
            variant="outlined">
            Remove
          </Button>
        </ItemInfoHolder>
      </Item>
    </motion.div>
  );
};

const Checkout = () => {
  const { isAuthenticated, toggleSignInForm, setModalView, openModal } =
    useUI();
  const { items, cartItemsCount, calculatePrice } = useCart();
  const { state, dispatch } = useContext(ProfileContext);
  const [isValid, setIsValid] = useState(false);

  const { card } = state;
  const { price: totalPrice } = usePrice({ amount: Number(calculatePrice()) });

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      toggleSignInForm();
      openModal();
      return;
    }
    if (isValid) {
      setModalView('PAYMENT_VIEW');
      openModal();
    }
  };

  useEffect(() => {
    calculatePrice() > 0 &&
    cartItemsCount > 0 &&
    card.length &&
    card.some((item) => item?.type === 'primary')
      ? setIsValid(true)
      : setIsValid(false);
  }, [cartItemsCount, card]);

  return (
    <Grid gap={10}>
      <GridColumn gridColumn="span 7">
        <OrderInfo>
          {cartItemsCount > 0 ? (
            items.map((item) => (
              <OrderItem key={`cartItem-${item.id}`} item={item} />
            ))
          ) : (
            <NoProductMsg>No cart items found</NoProductMsg>
          )}
        </OrderInfo>
      </GridColumn>
      <GridColumn gridColumn="span 5">
        <InformationBox>
          <TextWrapper>
            <Bold>Quantity</Bold>
            <Text>{cartItemsCount}</Text>
          </TextWrapper>

          <TextWrapper>
            <Bold>Total</Bold>
            <TotalPrice>{totalPrice}</TotalPrice>
          </TextWrapper>
        </InformationBox>

        <InformationBox>
          <Heading>Payment method</Heading>
          <PaymentGroup
            name="payment"
            items={card}
            onChange={(item) =>
              dispatch({
                type: 'SET_PRIMARY_CARD',
                payload: item.id.toString(),
              })
            }
          />
        </InformationBox>

        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid}
          size="big"
          radius="large"
          fullwidth>
          Order
        </Button>
      </GridColumn>
    </Grid>
  );
};

export default Checkout;

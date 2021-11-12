import Link from 'next/link';
import { useRouter } from 'next/router';
import { useOrderQuery } from '@framework/order/get-order';
import Loader from 'components/loader/loader';
import usePrice from 'utils/use-price';
import { Headline } from 'assets/styles/pages.style';
import { Table } from 'assets/styles/pages.style';
import { GAME_PAGE } from 'site-settings/site-navigation';
import { Button } from 'components/common/button/button';
import LeftArrowIcon from 'components/icons/LeftArrowIcon';

const OrderItemCard = ({ item }) => {
  const { price: itemTotal } = usePrice({
    amount: item.price,
    currencyCode: 'USD',
  });
  return (
    <tr>
      <td>
        <Link href={`${GAME_PAGE}/${item.id}`}>{item.title}</Link>
      </td>
      <td>{itemTotal}</td>
    </tr>
  );
};

const OrderDetails = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const { data, isLoading } = useOrderQuery(id?.toString());
  const { price: total } = usePrice(
    data && {
      amount: data.order_price,
      currencyCode: 'USD',
    }
  );

  if (isLoading) return <Loader />;

  return (
    <div>
      <Headline>Order Details</Headline>

      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data?.order_game.length > 0 ? (
            data?.order_game.map((item, i) => (
              <OrderItemCard key={i} item={item} />
            ))
          ) : (
            <tr>
              <td>No results found</td>
            </tr>
          )}
        </tbody>
        {data?.order_game.length > 0 && (
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        )}
      </Table>
      <Button onClick={router.back} variant="secondary">
        <LeftArrowIcon width={7} height={15} />
        Back
      </Button>
    </div>
  );
};

export default OrderDetails;

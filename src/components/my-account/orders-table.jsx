import Link from 'next/link';
import { useRouter } from 'next/router';
import { useOrdersQuery } from '@framework/order/get-all-orders';
import { Headline } from 'assets/styles/pages.style';
import Loader from 'components/loader/loader';
import { Table } from 'assets/styles/pages.style';
import { YOUR_ORDERS_PAGE } from 'site-settings/site-navigation';
import usePrice from 'utils/use-price';
import { Button } from 'components/common/button/button';

const OrderItem = ({
  row: { id, url_id, created_at, status, order_products, order_price },
}) => {
  const router = useRouter();

  const { price } = usePrice({
    amount: order_price,
  });

  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  const onClick = (e, pathname) => {
    e.preventDefault();
    router.push(
      {
        pathname: `${YOUR_ORDERS_PAGE}/${pathname}`,
      },
      null,
      { scroll: false }
    );
  };

  return (
    <tr>
      <td data-title="Order">#{id}</td>
      <td data-title="Date">{formatter.format(Date.parse(created_at))}</td>
      <td data-title="Status">{status}</td>
      <td data-title="Total">{`${price} for ${order_products} items`}</td>
      <td data-title="Actions">
        <Button
          variant="outlined"
          size="small"
          onClick={(e) => onClick(e, url_id)}>
          View
        </Button>
      </td>
    </tr>
  );
};

const OrdersTable = () => {
  const { data, isLoading } = useOrdersQuery();

  if (isLoading) return <Loader />;

  return (
    <>
      <Headline>Orders</Headline>

      <Table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => <OrderItem key={i} row={row} />)
          ) : (
            <tr>
              <td>No results found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default OrdersTable;

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderSummary from "../components/Orders/OrderSummary";

const StatusScreen = () => {
  const location = useLocation();
  const { orderSuccess, order } = location.state || {};

  const lastOrder = useSelector((state) => state.orders?.order) || order;

  console.log('Order Success:', orderSuccess);
  console.log('Order from location state:', order);
  console.log('Order from Redux state:', lastOrder);

  return (
    <div>
      {orderSuccess ? (
        <div>
          <h1>Order Successful!</h1>
          <p>Your order has been placed successfully!</p>
          {lastOrder ? (
            <OrderSummary
              itemsPrice={lastOrder.itemsPrice}
              shippingPrice={lastOrder.shippingPrice}
              taxPrice={lastOrder.taxPrice}
              totalPrice={lastOrder.totalPrice}
              currency={lastOrder.currency}
            />
          ) : (
            <p>Loading order details...</p>
          )}
        </div>
      ) : (
        <div>
          <h1>Order Failed!</h1>
          <p>Oops! Insufficient tokens to complete purchase!</p>
        </div>
      )}
    </div>
  );
};

export default StatusScreen;
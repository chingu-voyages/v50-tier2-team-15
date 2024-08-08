import { useLocation } from "react-router-dom";
import OrderSummary from "../components/Orders/OrderSummary";

const StatusScreen = () => {
  const location = useLocation();
  const { orderSuccess } = location.state || {};

  return (
    <div>
    <div>
      {orderSuccess ? (

        <div>
          <h1>Order Successful!</h1>
          <p>Your order has been placed successfully!</p>
          <OrderSummary itemsPrice={itemsPrice}
            shippingPrice={shippingPrice}
            taxPrice={taxPrice}
            totalPrice={totalPrice}
            currency={currency} />
        </div>

      ) : (

        <div>
          <h1>Order Failed!</h1>
          <p>Oops! Insufficient tokens to complete purchase!</p>
        </div>

      )}
    </div>
    </div>
  );
};

export default StatusScreen;
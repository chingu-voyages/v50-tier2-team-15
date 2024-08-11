import PropTypes from "prop-types";
import { Icon } from '@iconify/react';
import starFilled from '@iconify/icons-mdi/star'; // Import star icon

const CartItems = ({ items }) => {
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          icon={starFilled}
          className={i < rate ? 'text-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };


  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="flex-1">
                <div className="text-lg font-semibold">{item.dsc}</div>
                <div className="text-sm text-gray-600">From: {item.name}</div>
                <div className="flex mb-4 m-auto p-auto justify-center align-center">{renderStars(item.rate)}</div>
              </div>
              <div className="mt-2 sm:mt-0 text-lg font-semibold text-right">
                x {item.qty}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items in your cart</p>
      )}
    </div>
  );
};

CartItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItems;
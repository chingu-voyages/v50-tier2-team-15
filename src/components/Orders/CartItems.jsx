import PropTypes from 'prop-types';

const CartItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <div>
            <div>{item.dsc}</div>
            <div>From: {item.name}</div>
            <div>Rating: {item.rate}</div>
          </div>
          <div>x {item.qty}</div>
        </div>
      ))}
    </div>
  );
};

CartItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItems;
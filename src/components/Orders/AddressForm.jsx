import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../slices/cartSlice";
import PropTypes from "prop-types";
import { useState } from "react";

const AddressForm = ({ initialAddress, onSave }) => {
  const [userAddress, setUserAddress] = useState(initialAddress || {});
  const dispatch = useDispatch();

  const handleAddressChange = (e) => {
    setUserAddress({ ...userAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(userAddress));
    onSave(userAddress);
  };

  return (
    <form onSubmit={handleSaveAddress} className="space-y-4">
      <input
        type="text"
        name="address"
        value={userAddress.address || ""}
        onChange={handleAddressChange}
        placeholder="Address"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="city"
        value={userAddress.city || ""}
        onChange={handleAddressChange}
        placeholder="City"
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        name="postalCode"
        value={userAddress.postalCode || ""}
        onChange={handleAddressChange}
        placeholder="Postal Code"
        className="p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-purple-500 text-white rounded-full"
      >
        Save Address
      </button>
    </form>
  );
};

AddressForm.propTypes = {
  initialAddress: PropTypes.object,
  onSave: PropTypes.func,
};

export default AddressForm;
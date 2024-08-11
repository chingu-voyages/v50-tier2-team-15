import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../../slices/cartSlice";
import PropTypes from "prop-types";
import { useState } from "react";

const AddressForm = ({ initialAddress, onSave }) => {
  const [userAddress, setUserAddress] = useState(initialAddress || {});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};

    if (!userAddress.address) {
      newErrors.address = "Street address is required";
    }
    if (!userAddress.city) {
      newErrors.city = "City is required";
    }
    if (!userAddress.postalCode) {
      newErrors.postalCode = "Postal Code is required";
    } else if (!/^\d+$/.test(userAddress.postalCode)) {
      newErrors.postalCode = "Postal Code must be a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddressChange = (e) => {
    setUserAddress({ ...userAddress, [e.target.name]: e.target.value });
  };

    const handleSaveAddress = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(saveShippingAddress(userAddress));
      onSave(userAddress);
    }
  };

  return (
    <form onSubmit={handleSaveAddress} className="space-y-4">
      <div>
        <input
          type="text"
          name="address"
          value={userAddress.address || ""}
          onChange={handleAddressChange}
          placeholder="Street Address"
          className="p-2 border rounded"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
      <div>
        <input
          type="text"
          name="city"
          value={userAddress.city || ""}
          onChange={handleAddressChange}
          placeholder="City"
          className="p-2 border rounded"
        />
        {errors.city && <p className="text-red-500">{errors.city}</p>}
      </div>
      <div>
        <input
          type="text"
          name="postalCode"
          value={userAddress.postalCode || ""}
          onChange={handleAddressChange}
          placeholder="Postal Code"
          className="p-2 border rounded"
        />
        {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-purple-500 text-white rounded-full"
        disabled={Object.keys(errors).length > 0}
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
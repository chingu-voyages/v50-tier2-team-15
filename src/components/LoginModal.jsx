import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import PropTypes from "prop-types";

import chickenAvatar from "../assets/chicken-avatar.svg";
import pigAvatar from "../assets/pig-avatar.svg";
import cowAvatar from "../assets/cow-avatar.svg";

const LoginModal = ({ toggler }) => {
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(chickenAvatar); // Default avatar
  const [error, setError] = useState(""); // manage error messages.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation: check if the username is at least 3 characters long
    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    // Clear any previous error
    setError("");

    // Dispatch setCredentials action with the entered username
    dispatch(setCredentials({ username, tokens: 100, avatar: selectedAvatar }));

    // Close the modal
    toggler();

    // Navigate to the UserDashboard screen
    navigate("/user");
  };

  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button
              onClick={toggler}
              className="border-2 text-red-900 px-2 m-2"
            >
              X
            </button>
          </div>
          <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
              <h2 className="text-3xl font-bold mb-6 text-white text-center">
                Login
              </h2>
              <h2 className="text-lg font-bold text-white text-center">
                Choose your avatar
              </h2>
              <div className="flex justify-around">
                <img
                  src={chickenAvatar}
                  alt="Chicken Avatar"
                  className={`w-24 h-24 cursor-pointer ${
                    selectedAvatar === chickenAvatar
                      ? "border-2 border-white"
                      : ""
                  }`}
                  onClick={() => setSelectedAvatar(chickenAvatar)}
                />
                <img
                  src={cowAvatar}
                  alt="Cow Avatar"
                  className={`w-24 h-24 cursor-pointer ${
                    selectedAvatar === cowAvatar ? "border-2 border-white" : ""
                  }`}
                  onClick={() => setSelectedAvatar(cowAvatar)}
                />
                <img
                  src={pigAvatar}
                  alt="Pig Avatar"
                  className={`w-24 h-24 cursor-pointer ${
                    selectedAvatar === pigAvatar ? "border-2 border-white" : ""
                  }`}
                  onClick={() => setSelectedAvatar(pigAvatar)}
                />
              </div>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-700 rounded-md text-gray-900 focus:outline-none focus:border-gray-600"
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                onClick={handleLogin}
                className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  toggler: PropTypes.func.isRequired,
};

export default LoginModal;

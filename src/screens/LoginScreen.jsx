//There is no database. There is no need for a RegisterScreen.
//Users can just enter some sort of username and start ordering/seeing the rest of the app.

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
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
    dispatch(setCredentials({ username, tokens: 100 }));

    // Navigate to the UserDashboard screen
    navigate("/user");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Login</h2>
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
  );

}

export default LoginScreen;
import PropTypes from 'prop-types';
import LoginScreen from '../screens/LoginScreen';

const Modal = ({ toggler }) => {
  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button
              onClick={() => toggler()}
              className="border-2 text-red-900 px-2 m-2"
            >
              X
            </button>
          </div>
          <LoginScreen />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggler: PropTypes.func.isRequired,
};

export default Modal;
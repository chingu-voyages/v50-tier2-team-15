import { useState } from "react";

const useToggle = () => {
  const [modal, setModal] = useState(null);

  const toggler = (modalType) => {
    setModal((prevModal) => (prevModal === modalType ? null : modalType));
  };

  return {
    modal,
    toggler,
  };
};

export default useToggle;
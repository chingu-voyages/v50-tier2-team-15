import { useState, useCallback } from "react";

const useToggle = (initialState = false) => {
  const [on, setOn] = useState(initialState);

  const toggler = useCallback(() => {
    setOn(prevOn => !prevOn);
  }, []);

  return { on, toggler };
};

export default useToggle;
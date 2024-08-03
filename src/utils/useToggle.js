import { useState } from "react";

const useToggle = () => {
  const [on, setOn] = useState(false);

  const toggler = () => setOn(!on);

  return { on, toggler };
};

export default useToggle;
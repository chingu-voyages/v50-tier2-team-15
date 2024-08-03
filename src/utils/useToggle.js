import { useState } from "react";

const useToggle = () => {
  const [on, setOn] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggler = (food) => {
    setSelectedFood(food || null);
    setOn(!on);
  };

  return { on, toggler, selectedFood };
};

export default useToggle;
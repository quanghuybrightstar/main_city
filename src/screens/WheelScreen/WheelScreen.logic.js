import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const wheelScreenLogic = (props) => {
  const [dataWheel, setDataWheel] = useState({ tickets_remaining: 3 });

  const handleSpinWheel = () => {
    setDataWheel({
      tickets_remaining: dataWheel.tickets_remaining - 1,
    });
  };

  return { dataWheel, handleSpinWheel };
};

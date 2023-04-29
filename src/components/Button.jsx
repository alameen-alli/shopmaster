import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ color, icon, bgColor, text, borderRadius, size }) => {
  const {setIsClicked, initialState} = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-1.5 hover:drop-shadow-xl`}
    >
      {icon}

      {text}
    </button>
  )
}
export default Button;
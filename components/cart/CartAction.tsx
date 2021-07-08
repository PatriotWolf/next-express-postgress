import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const CartAction: React.FC = () => {
  const [state, setState] = useState({ counter: 1 });

  const handleIncrement = () => {
    setState((state) => ({ counter: state.counter + 1 }));
  };

  const handleDecrement = () => {
    setState((state) => ({ counter: state.counter - 1 }));
  };

  const displayCounter = state.counter > 0;

  return (
    <ButtonGroup aria-label="small outlined button group">
      <Button onClick={handleIncrement}>+</Button>
      {displayCounter && <Button disabled>{state.counter}</Button>}
      {displayCounter && <Button onClick={handleDecrement}>-</Button>}
    </ButtonGroup>
  );
};

export default CartAction;

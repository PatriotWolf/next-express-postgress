import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

interface CartActionProps {
  amount: number;
  handleAddQuatity: () => void;
  handleReduceQuatity: () => void;
}

const CartAction: React.FC<CartActionProps> = ({
  amount,
  handleAddQuatity,
  handleReduceQuatity,
}) => {
  const displayCounter = amount > 0;

  return (
    <ButtonGroup aria-label="small outlined button group">
      <Button onClick={handleAddQuatity}>+</Button>
      {displayCounter && <Button disabled>{amount}</Button>}
      {displayCounter && <Button onClick={handleReduceQuatity}>-</Button>}
    </ButtonGroup>
  );
};

export default CartAction;

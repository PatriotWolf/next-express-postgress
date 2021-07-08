import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { observer } from "mobx-react";

import CartAction from "./CartAction";
import ShoppingCartEntry from "store/cartStore/cartEntry";

interface CartListComponentProps {
  productList: ShoppingCartEntry[];
  removeCart: (arg: string) => void;
}

const CartList: React.FC<CartListComponentProps> = observer(
  ({ productList, removeCart }) => {
    return (
      <List>
        {productList.length > 0 ? (
          productList.map((entry: ShoppingCartEntry) => (
            <ListItem key={`cart-${entry.product.id}`}>
              <ListItemText
                primary={entry.product.name}
                secondary={`$${entry.price.toFixed(2)}`}
              />
              <ListItemSecondaryAction>
                <CartAction
                  amount={entry.amount}
                  handleAddQuatity={() => entry.increaseAmount()}
                  handleReduceQuatity={() =>
                    entry.amount > 1
                      ? entry.decreaseAmount()
                      : removeCart(entry.product.id)
                  }
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="Cart is Empty" />
          </ListItem>
        )}
      </List>
    );
  }
);

export default CartList;

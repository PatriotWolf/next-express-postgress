import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { observer } from "mobx-react";

import { ProductProps } from "store/productStore";
import CartAction from "./CartAction";

interface CartListComponentProps {
  productList: ProductProps[];
}

const CartList: React.FC<CartListComponentProps> = observer(
  ({ productList }) => {
    return (
      <List>
        {productList.length > 0 ? (
          productList.map((product: ProductProps) => (
            <ListItem key={`cart-${product.id}`}>
              <ListItemText
                primary={product.name}
                secondary={`$${product.price}`}
              />
              <ListItemSecondaryAction>
                <CartAction />
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

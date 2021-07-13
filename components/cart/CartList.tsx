import React from "react";
import Image from "next/image";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Badge,
  makeStyles,
  Theme,
} from "@material-ui/core";

import CartAction from "./CartAction";
import ShoppingCartEntry from "store/cartStore/cartEntry";

interface CartListComponentProps {
  productList: ShoppingCartEntry[];
  removeCart: (arg: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: 100,
    height: 100,
    marginRight: theme.spacing(1),
  },
  listText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const CartList: React.FC<CartListComponentProps> = ({
  productList,
  removeCart,
}) => {
  const style = useStyles();
  return (
    <List>
      {productList.length > 0 ? (
        productList.map((entry: ShoppingCartEntry) => (
          <ListItem key={`cart-${entry.product.id}`}>
            <ListItemAvatar className={style.avatar}>
              <Badge badgeContent={entry.amount} color="primary">
                <Image
                  src={
                    entry.product.image || `https://i.imgflip.com/58zlrv.jpg`
                  }
                  alt={`Picture of ${entry.product.name}`}
                  width={100}
                  height={100}
                />
              </Badge>
            </ListItemAvatar>
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
};
export default CartList;

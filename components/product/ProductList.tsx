import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCartRounded } from "@material-ui/icons";
import { ProductProps } from "store/productStore";

interface ProductListComponentProps {
  productList: ProductProps[];
}

const ProductList: React.FC<ProductListComponentProps> = ({ productList }) => {
  return (
    <List>
      {productList.map((product: ProductProps) => (
        <ListItem key={product.id}>
          <ListItemText
            primary={product.name}
            secondary={`$${product.price}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <AddShoppingCartRounded />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;

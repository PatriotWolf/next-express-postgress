import React from "react";
import Image from "next/image";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { AddShoppingCartRounded } from "@material-ui/icons";
import { ProductProps } from "store/productStore";

interface ProductListComponentProps {
  productList: ProductProps[];
  onAddToCard: (arg: ProductProps) => void;
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

const ProductList: React.FC<ProductListComponentProps> = ({
  productList,
  onAddToCard,
}) => {
  const style = useStyles();
  return (
    <List>
      {productList.map((product: ProductProps) => (
        <ListItem key={product.id} alignItems="center">
          <ListItemAvatar className={style.avatar}>
            <Image
              src={product.image || `https://i.imgflip.com/58zlrv.jpg`}
              alt={`Picture of ${product.name}`}
              width={100}
              height={100}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`$${product.price}`}
            className={style.listText}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onAddToCard(product)}
            >
              <AddShoppingCartRounded />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;

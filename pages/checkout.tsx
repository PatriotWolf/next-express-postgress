import React from "react";
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  Divider,
  useTheme,
} from "@material-ui/core";
import { observer } from "mobx-react";

import ProductList from "components/product/ProductList";
import CartList from "components/cart/CartList";
import { useStores } from "store";
import { ProductProps } from "store/productStore";

const CheckoutPage: React.FC = observer(() => {
  const { productStore, cartStore } = useStores();
  const theme = useTheme();
  const onAddToCart = (product: ProductProps) => {
    cartStore.addToCart(product);
  };
  return (
    <Container component="main">
      <Grid
        container
        spacing={2}
        style={{
          boxSizing: `border-box`,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            boxSizing: `border-box`,
          }}
        >
          <Paper
            style={{
              padding: theme.spacing(1),
            }}
          >
            <Typography variant="h4">Product</Typography>
            <ProductList
              productList={productStore.productList}
              onAddToCard={onAddToCart}
            />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            boxSizing: `border-box`,
          }}
        >
          <Paper
            style={{
              padding: theme.spacing(1),
            }}
          >
            <Typography variant="h4">Summary</Typography>

            <CartList
              productList={cartStore.entryList}
              removeCart={(id: string) => cartStore.removeFromCart(id)}
            />
            <Divider />
            <Box
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                padding: `${theme.spacing(1)}px`,
              }}
            >
              <Typography variant="body1">Total</Typography>
              <Typography>${cartStore.total.toFixed(2)}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
export default CheckoutPage;

import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import { observer } from "mobx-react";

import { useStores } from "store";
import ProductList from "components/product/ProductList";
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
            {cartStore.entryList.map((product: ProductProps) => (
              <Typography key={product.id}>{product.name}</Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
export default CheckoutPage;

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

const CheckoutPage: React.FC = observer(() => {
  const { productStore } = useStores();
  const theme = useTheme();
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
            <ProductList productList={productStore.productList} />
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
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
export default CheckoutPage;

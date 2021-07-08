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
import { ProductProps } from "store/productStore";

const CheckoutPage: React.FC = observer(() => {
  const { productStore } = useStores();
  const theme = useTheme();
  return (
    <Container component="main">
      <Grid
        container
        spacing={2}
        style={{
          alignItems: `center`,
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
            {productStore.productList.map((product: ProductProps) => (
              <Typography key={product.id}>{product.name}</Typography>
            ))}
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

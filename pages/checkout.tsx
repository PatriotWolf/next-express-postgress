import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useStores } from "store";

const CheckoutPage: React.FC = () => {
  const store = useStores();
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
            <Typography variant="subtitle1">{store.obj.data}</Typography>
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
};
export default CheckoutPage;

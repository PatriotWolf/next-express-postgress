import React from "react";
import { Container, Grid, Paper, useTheme } from "@material-ui/core";

const CheckoutPage: React.FC = () => {
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
            Section 1
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
            Section 2
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CheckoutPage;

import { Box, Grid } from "@material-ui/core";
import React from "react";

const Layout: React.FC = ({ children }) => (
  <Grid
    container
    direction="column"
    style={{ height: `100vh`, paddingTop: `20vh` }}
  >
    <Grid item>
      <Box>{children}</Box>
    </Grid>
  </Grid>
);

export default Layout;

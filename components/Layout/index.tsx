import React from "react";
import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Button,
  useTheme,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Sidebar from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };
  return (
    <Box component="div" style={{ display: `flex` }}>
      <Sidebar
        isMobileDrawerOpen={isMobileDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Hidden smUp implementation="css">
        <AppBar position="absolute">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Lockdown
            </Typography>
            <Button color="inherit" onClick={handleDrawerToggle}>
              <Menu />
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Grid
        container
        direction="column"
        style={{
          height: `100vh`,
          padding: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
        }}
      >
        <Grid item>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;

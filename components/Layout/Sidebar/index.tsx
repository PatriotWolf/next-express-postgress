import React from "react";
import {
  Hidden,
  Drawer,
  useTheme,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import DrawerNavigationList from "./DrawerNavigationList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up(`sm`)]: {
        width: 240,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: 240,
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  })
);

export interface SidebarProps {
  isMobileDrawerOpen: boolean;
  handleDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobileDrawerOpen,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={isMobileDrawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerNavigationList />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerNavigationList />
        </Drawer>
      </Hidden>
    </nav>
  );
};
export default Sidebar;

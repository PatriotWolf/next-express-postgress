import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@material-ui/core";
import { Home, Shop } from "@material-ui/icons";
import { useRouter } from "next/router";

const ListItemStyled = styled(ListItem)({
  "&:hover": {
    background: `#ff9e25`,
  },
});

const DrawerNavigationList: React.FC = () => {
  const router = useRouter();
  return (
    <List>
      <ListItemStyled button onClick={() => router.push(`/`)}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary={`Home`} />
      </ListItemStyled>
      <ListItemStyled button onClick={() => router.push(`/checkout`)}>
        <ListItemIcon>
          <Shop />
        </ListItemIcon>
        <ListItemText primary={`Checkout`} />
      </ListItemStyled>
    </List>
  );
};

export default DrawerNavigationList;

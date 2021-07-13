import { Box, Typography, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { PromotionRedeemedProps } from "store/cartStore";

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    borderRadius: theme.spacing(1),
  },
  listText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Banner: React.FC<PromotionRedeemedProps> = ({ name, effect }) => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle2">{effect}</Typography>
    </Box>
  );
};
export default Banner;

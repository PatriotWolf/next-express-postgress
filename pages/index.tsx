import React from "react";
import { Container, Typography } from "@material-ui/core";

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm" component="main">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Welcome!!
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        Let&lsquo;s have some fun!!!
      </Typography>
    </Container>
  );
};
export default Home;

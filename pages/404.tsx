import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Paper, Typography, useTheme } from "@material-ui/core";

const NotFound: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <Container maxWidth="sm" component="main">
      <Paper
        style={{
          padding: `${theme.spacing(3)}px`,
        }}
      >
        <Typography variant="h1">Ooops...</Typography>
        <Typography variant="h2">That page cannot be found :(</Typography>
        <Typography variant="subtitle1">
          Going back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>{" "}
          is 3 seconds...
        </Typography>
      </Paper>
    </Container>
  );
};

export default NotFound;

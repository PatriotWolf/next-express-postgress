import { Container, Typography} from '@material-ui/core';


export default function Home() {
  return (
    <Container maxWidth="sm" component="main">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome!!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Let's have some fun!!!
        </Typography>
      </Container>
  )
}

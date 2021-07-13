import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  useTheme,
} from "@material-ui/core";
import request from "util/request";

interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

const Home: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const theme = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addUser = async () => {
    try {
      const requestOption: RequestInit = {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
        },
        body: JSON.stringify({ ...userData }),
      };
      const response = await request<User[]>(`/user`, requestOption);
      if (response.parsedBody) {
        setUserData({
          username: "",
          email: "",
          phone: "",
        });
        requestUser();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const requestUser = async () => {
    try {
      const requestOption: RequestInit = {
        method: `GET`,
      };
      const response = await request<User[]>(`/user`, requestOption);
      if (response.parsedBody) {
        setUserList(response.parsedBody);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    requestUser();
  }, []);
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
      <Paper style={{ marginBottom: `${theme.spacing(2)}px` }}>
        <form noValidate autoComplete="off">
          <TextField
            id="name"
            name="username"
            placeholder="Name"
            label="Name"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={userData.username}
            onChange={handleChange}
          />
          <TextField
            id="email"
            name="email"
            placeholder="E-mail"
            label="E-mail"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            id="phone"
            name="phone"
            placeholder="Phone No."
            label="Phone No."
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={userData.phone}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => addUser()}
          >
            Add
          </Button>
        </form>
      </Paper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.length > 0 &&
              userList.map((user: User) => (
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone || `not available`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Home;

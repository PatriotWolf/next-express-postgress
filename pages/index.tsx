import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import request from "util/request";

interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

const Home: React.FC = () => {
  let [userList, setUserList] = useState<User[]>([]);
  useEffect(() => {
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

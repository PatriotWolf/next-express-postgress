import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, Paper, useTheme } from "@material-ui/core";

import request from "util/request";
import UserFormPaper from "components/user/UserFormPaper";
import UserListPaper from "components/user/UserListPaper";

export interface UserData {
  id: string;
  username: string;
  email: string;
  phone: string;
}

const Home: React.FC = () => {
  const [userList, setUserList] = useState<UserData[]>([]);
  const [userData, setUserData] = useState({
    id: "",
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
      const response = await request<UserData[]>(`/user`, requestOption);
      if (response.parsedBody) {
        setUserData({
          id: "",
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

  const deleteUser = async (id: string) => {
    try {
      const requestOption: RequestInit = {
        method: `DELETE`,
        headers: {
          "Content-Type": `application/json`,
        },
      };
      const response = await request<UserData[]>(`/user/${id}`, requestOption);
      if (response.parsedBody) {
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
      const response = await request<UserData[]>(`/user`, requestOption);
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
      <Paper
        style={{
          marginBottom: `${theme.spacing(2)}px`,
          padding: `${theme.spacing(2)}px`,
        }}
      >
        <UserFormPaper
          userData={userData}
          handleChange={handleChange}
          onSubmit={addUser}
        />
      </Paper>
      <UserListPaper
        userList={userList}
        onDelete={(userId: string) => deleteUser(userId)}
      />
    </Container>
  );
};
export default Home;

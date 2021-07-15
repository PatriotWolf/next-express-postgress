import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from "@material-ui/core";

import { User } from "server/db/query/userQuery";
import { Delete } from "@material-ui/icons";

export interface UserFormPaperProps {
  userList: User[];
  onDelete: (args1: string) => void;
}

const UserListPaper: React.FC<UserFormPaperProps> = ({
  userList,
  onDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.length > 0 &&
            userList.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone || `not available`}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onDelete(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserListPaper;

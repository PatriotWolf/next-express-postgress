import React, { ChangeEvent } from "react";
import { Grid, TextField, Button, styled } from "@material-ui/core";

import { User } from "server/db/query/userQuery";

export interface UserFormPaperProps {
  userData: User;
  handleChange: (arg: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
}));

const UserFormPaper: React.FC<UserFormPaperProps> = ({
  userData,
  handleChange,
  onSubmit,
}) => {
  return (
    <form noValidate autoComplete="off">
      <Grid spacing={2} container>
        <Grid item md={12} lg={5}>
          <TextFieldStyled
            id="name"
            name="username"
            placeholder="Name"
            label="Name"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={userData.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={12} lg={5}>
          <TextFieldStyled
            id="email"
            name="email"
            placeholder="E-mail"
            label="E-mail"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={userData.email}
            onChange={handleChange}
          />
        </Grid>

        <Grid item md={12} lg={5}>
          <TextFieldStyled
            id="phone"
            name="phone"
            placeholder="Phone No."
            label="Phone No."
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={userData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={12} lg={5}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{
              height: "100%",
            }}
            onClick={() => onSubmit()}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserFormPaper;

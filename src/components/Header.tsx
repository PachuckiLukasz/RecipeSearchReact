import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const HeaderBar = styled(AppBar)({
  marginBottom: "1rem",
});

const Header: React.FC = () => {
  return (
    <HeaderBar position="static">
      <Toolbar>
        <Typography variant="h6">Recipe Finder</Typography>
      </Toolbar>
    </HeaderBar>
  );
};

export default Header;

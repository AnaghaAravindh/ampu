import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                React
              </Link>
            </Typography> */}
            <Button color="inherit" variant="text">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                VEIW
              </Link>
            </Button>
            <Button color="inherit" variant="text">
              <Link
                to="/add"
                style={{ color: "white", textDecoration: "none" }}>
                ADD
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;

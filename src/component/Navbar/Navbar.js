import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Toolbar from "@mui/material/Toolbar";
import styles from "../../styles/Navbar.module.scss";

const drawerWidth = 240;

function Navbar(props) {
  return (
    <Box>
      <CssBaseline />
      <AppBar className={styles.NavbarContainer}>
        <Toolbar>
          <Box className={styles.logo}>
            <LocalPostOfficeIcon />
          </Box>
          <Box component="div" className={styles.systemName}>
            <p>POST ME BUDDY</p>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import AppIcon from "../UtilComponents/AppIcon";
import { AppName, pages, settings } from "../../Utils/constants";
import { Link, useNavigate } from "react-router-dom";

/**************************         DASHBOARD STYLES        ******************/
const dashboardStyles = {
  appIconCustomStyles: { display: { xs: "none", sm: "flex" } },

  menuMobileBox: { flexGrow: 1, display: { xs: "flex", sm: "none" } },
  mobileMenu: {
    display: { xs: "block", sm: "none" },
  },

  mobileMenuItem: {
    color: "black",
    textDecoration: "none",
    display: "block",
  },
  appNameOnMobile: {
    display: { xs: "flex", sm: "none" },
    flexGrow: 1,

    marginRight: "2rem",
  },
  desktopDashboardLinks: {
    p: 1,
    ml: 2,
    flexGrow: 1,
    gap: 3,
    display: { xs: "none", sm: "flex" },
  },
  desktopDashboardLinkItems: {
    my: 1,
    ml: 1,
    color: "white",
    display: "block",
    textDecoration: "none",
  },

  profileLinks: {
    my: 1,
    ml: 1,
    color: "black",
    display: "block",
    textDecoration: "none",
  },
};

function DashboardNavbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ p: 1 }}>
          <AppIcon
            noMarginTop={true}
            customStyles={dashboardStyles.appIconCustomStyles}
          ></AppIcon>

          <Box sx={dashboardStyles.menuMobileBox}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={dashboardStyles.mobileMenu}
            >
              {pages.map((page, index) => {
                return (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link
                      to={`/${page?.name?.replace(/\s+/g, "").toLowerCase()}`}
                      style={dashboardStyles.mobileMenuItem}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Typography variant="h6" sx={dashboardStyles.appNameOnMobile}>
            {AppName}
          </Typography>

          <Box sx={dashboardStyles.desktopDashboardLinks}>
            {pages.map((page) => (
              <Link
                key={page.id}
                onClick={handleCloseNavMenu}
                to={`/${page?.name?.replace(/\s+/g, "").toLowerCase()}`}
                style={dashboardStyles.desktopDashboardLinkItems}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => {
                handleCloseUserMenu();
              }}
            >
              {settings.map((setting) => {
                return (
                  <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <Link
                      to={`/${setting?.name
                        ?.replace(/\s+/g, "")
                        .toLowerCase()}`}
                      style={dashboardStyles.profileLinks}
                    >
                      {setting.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DashboardNavbar;

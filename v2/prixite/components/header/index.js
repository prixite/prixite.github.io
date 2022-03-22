// import Container from "@mui/material/Container";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logoImg from "../../public/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const pages = ["Home", "Careers", "Contact Us"];

export default function Header({ children, bgImg }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();
  return (
    <Box
      sx={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000000",
          opacity: "0.55",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      ></Box>
      <AppBar
        position="static"
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              <Image src={logoImg} alt="Prixite" />
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ flexGrow: 50, display: { xs: "flex", md: "none" } }}>
              <Image src={logoImg} alt="Prixite" />
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Typography
                  sx={{
                    mx: 2,
                    color:
                      router.asPath == "/" ? "var(--primary-green)" : "white",
                    display: "block",
                    cursor: "pointer",
                    transition: "all .2s linear",
                    "&:hover": {
                      color: "var(--primary-green)",
                    },
                  }}
                  textAlign="center"
                >
                  Home
                </Typography>
              </Link>
              <Link href="/careers">
                <Typography
                  sx={{
                    mx: 2,
                    color:
                      router.asPath == "/careers"
                        ? "var(--primary-green)"
                        : "white",
                    display: "block",
                    cursor: "pointer",
                    transition: "all .2s linear",
                    "&:hover": {
                      color: "var(--primary-green)",
                    },
                  }}
                  textAlign="center"
                >
                  Careers
                </Typography>
              </Link>
              <Link href="/contact-us">
                <Button
                  sx={{
                    mx: 2,
                    textAlign: "center",
                    backgroundColor: "var(--primary-green)",
                    color: "white",
                    borderRadius: "30px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingRight: "25px",
                    paddingLeft: "25px",
                    fontWeight: "bold",
                    ":hover": {
                      backgroundColor: "var(--primary-green)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </Box>
  );
}

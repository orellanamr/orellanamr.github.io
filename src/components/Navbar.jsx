import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Button,
  Box,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import logoRolando from "../assets/images/logoRolando.svg";
import RolandoCV from "../assets/docs/Rolando_Orellana_CV.pdf";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsDrawerOpen(false); // Cierra el menú móvil
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ px: 2, zIndex: 1300, backgroundColor: "#FFFFFF" }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img src={logoRolando} alt="Logo" style={{ height: 40 }} />
        </Box>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("home")}
            >
              {t("home")}
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("projects")}
            >
              {t("projects")}
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("contact")}
            >
              {t("contact")}
            </Button>
            <IconButton color="inherit" onClick={toggleLanguage}>
              <LanguageIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<DescriptionOutlinedIcon />}
              href={RolandoCV}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                backgroundColor: "#EFEFEF",
                color: "#000000",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#FFFFFF",
                },
              }}
            >
              {t("download_cv")}
            </Button>
          </Box>
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => toggleDrawer(true)}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: theme.palette.background.default,
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <MenuItem onClick={() => handleScrollToSection("home")}>
                  <Typography variant="h6">{t("home")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleScrollToSection("projects")}>
                  <Typography variant="h6">{t("projects")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleScrollToSection("contact")}>
                  <Typography variant="h6">{t("contact")}</Typography>
                </MenuItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    py: 8,
                  }}
                >
                  <Button
                    color="inherit"
                    size="small"
                    onClick={toggleLanguage}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <LanguageIcon sx={{ mr: 1 }} />
                    {i18n.language === "en" ? "Español" : "English"}
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<DescriptionOutlinedIcon />}
                    href={RolandoCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#EFEFEF",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {t("download_cv")}
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

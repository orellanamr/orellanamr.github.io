import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
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
  const [menuAnchor, setMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta pantallas pequeñas

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ px: 2 }}>
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
          // Links para pantallas grandes
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 600 }}>
              {t("home")}
            </Button>
            <Button color="inherit" sx={{ fontWeight: 600 }}>
              {t("about")}
            </Button>
            <Button color="inherit" sx={{ fontWeight: 600 }}>
              {t("projects")}
            </Button>
            <Button color="inherit" sx={{ fontWeight: 600 }}>
              {t("contact")}
            </Button>
            <IconButton color="inherit" onClick={toggleLanguage}>
              <LanguageIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DescriptionOutlinedIcon />}
              href={RolandoCV}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              {t("download_cv")}
            </Button>
          </Box>
        ) : (
          // Menú desplegable para pantallas pequeñas
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>{t("home")}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t("about")}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t("projects")}</MenuItem>
              <MenuItem onClick={handleMenuClose}>{t("contact")}</MenuItem>
              <MenuItem onClick={toggleLanguage}>
                {i18n.language === "en" ? "Español" : "English"}
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

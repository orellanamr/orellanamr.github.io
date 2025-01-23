import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
        px: 2,
      }}
    >
      <Typography variant="h6" sx={{ letterSpacing: 2, mb: 2 }}>
        {t("hero.name").toUpperCase()}
      </Typography>

      <Typography variant="h1" sx={{ fontWeight: "bold", mb: 1 }}>
        {t("hero.title.developer")}{" "}
        <Typography
          component="span"
          variant="h1"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          {`+ ${t("hero.title.designer")}`}
        </Typography>
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
        {t("hero.description")}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        size="large"
        sx={{ borderRadius: "50px", textTransform: "none", px: 4 }}
      >
        {t("hero.scrollDown")}
      </Button>
    </Box>
  );
};

export default HeroSection;

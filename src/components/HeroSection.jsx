import { Typography, Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        justifyContent: "center",
        height: "100vh",
        color: "text.primary",
        px: {
          xs: 2,
          md: 32,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{ letterSpacing: 2, mb: 2, textAlign: "left" }}
      >
        {t("hero.name").toUpperCase()}
      </Typography>

      <Typography variant="h1" color="black" sx={{ fontWeight: "bold", mb: 1 }}>
        {t("hero.title.developer")}{" "}
      </Typography>
      <Typography
        component="span"
        variant="h1"
        color="#00DA94"
        sx={{ fontWeight: "bold" }}
      >
        {t("hero.title.designer")}
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
        {t("hero.description")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 16,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{
            maxWidth: "200px",
            borderRadius: "50px",
            textTransform: "none",
            px: 4,
          }}
        >
          <Box>{t("hero.scrollDown")}</Box>
          <Box>
            <ExpandMoreIcon
              sx={{
                ml: 1,
                animation: "bounce 2s infinite",
              }}
            />
          </Box>
        </Button>
        <style>
          {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
        </style>
      </Box>
    </Box>
  );
};

export default HeroSection;

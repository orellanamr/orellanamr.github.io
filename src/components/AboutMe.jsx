import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import profilePic from "../assets/images/profileRolandoOrellana.png";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 20 },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: { xs: 225, md: 225, lg: 300 },
              height: { xs: 180, md: 180, lg: 250 },
              //mx: "auto",
              borderRadius: "150px",
              border: "10px solid #ddf247",
              overflow: "hidden",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            <img
              src={profilePic}
              alt="Rolando Orellana"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            textAlign="left"
            sx={{
              //mx: "auto",
              fontSize: { xs: "2rem", md: "2.5rem" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            {t("about_me_title")}
          </Typography>
          <Typography
            variant="body1"
            textAlign="left"
            sx={{
              maxWidth: 700,
              //mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            {t("about_me_description")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;

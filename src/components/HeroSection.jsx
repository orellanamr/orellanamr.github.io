import { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import ReactTypingEffect from "react-typing-effect";

const HeroSection = () => {
  const [showButton, setShowButton] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          md: 50,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          letterSpacing: 7,
          mb: 2,
          textAlign: "left",
          fontSize: {
            xs: "1rem",
            md: "1.5rem",
          },
        }}
      >
        {t("hero.name").toUpperCase()}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography
          variant="h1"
          color="black"
          sx={{
            fontWeight: "bold",
            mr: 2,
            fontSize: {
              xs: "3.5rem",
              md: "5.5rem",
            },
          }}
        >
          {t("hero.title.developer")}
        </Typography>
        <Box sx={{ borderBottom: "2px solid black", width: "100%" }} />
      </Box>
      <Box>
        <Typography
          component="span"
          variant="h1"
          color="#6E6E6E"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "3.5rem",
              md: "5.5rem",
            },
          }}
        >
          +
        </Typography>
        <Typography
          component="span"
          variant="h1"
          color="#00DA94"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "3.5rem",
              md: "5.5rem",
            },
          }}
        >
          <ReactTypingEffect
            text={[
              t("hero.title.innovative"),
              t("hero.title.creative"),
              t("hero.title.passionate"),
            ]}
            speed={100}
            eraseSpeed={80}
            eraseDelay={2000}
          />
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            fontSize: {
              xs: "1rem",
              md: "1.25rem",
            },
          }}
        >
          {t("hero.description")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 16,
        }}
      >
        <Box
          sx={{
            opacity: showButton ? 1 : 0,
            transition: "opacity 0.75s ease-in-out",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              borderRadius: "50px",
              px: 4,
            }}
          >
            <Box></Box>
            <Box>
              <ExpandMoreIcon
                sx={{
                  ml: 1,
                  animation: "bounce 2s infinite",
                }}
              />
            </Box>
          </Button>
        </Box>
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

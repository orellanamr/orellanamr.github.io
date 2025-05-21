import { Fab, Zoom, Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const whatsappNumber = "50259427558";

const WhatsAppFloat = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={show}>
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          textAlign="left"
          color="#000000"
          sx={{
            background: "#fff",
            px: 2,
            py: 1,
            borderRadius: 2,
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
            fontSize: 14,
            display: { xs: "none", sm: "block" },
          }}
        >
          {t("whatsapp_cta")}
        </Typography>
        <Fab
          color="success"
          aria-label="whatsapp"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener"
          sx={{
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default WhatsAppFloat;

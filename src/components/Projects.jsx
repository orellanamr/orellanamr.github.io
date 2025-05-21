import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import byteCode from "../assets/images/byteCode_landing.jpg";
import Reco from "../assets/images/reco_desktop.jpg";
import RecoApp from "../assets/images/RecoApp_RolandoOrellana_Developer.jpg";
import portfolioRolando from "../assets/images/portfolio_Rolando.jpg";
import byteCode_logo from "../assets/images/byteCode_logo.svg";
import Reco_logo from "../assets/images/reco_logo.svg";
import TODo_logo from "../assets/images/todo_logo.svg";
import todo_logo from "../assets/images/todo_logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import reactLogo from "../assets/images/logos/react.svg";
import gitLogo from "../assets/images/logos/git.svg";
import reduxLogo from "../assets/images/logos/redux.svg";
import materialUILogo from "../assets/images/logos/mui.svg";
import expoLogo from "../assets/images/logos/expo.svg";
import focusTimeCover from "../assets/images/FocusTimeApp.png";

const projects = [
  {
    id: 1,
    title: "Reco Web",
    description: "Reco_description",
    repoLink:
      "https://github.com/andrea-calderon/Web_App_Chispudos/tree/development",
    liveLink: "https://recolatam.com",
    image: Reco,
    logo: Reco_logo,
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    id: 2,
    title: "Reco APP",
    description: "RecoApp_description",
    repoLink: "https://github.com/orellanamr/reco-app",
    liveLink: "",
    image: RecoApp,
    logo: Reco_logo,
    technologies: [
      { name: "React Native", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Expo", logo: expoLogo },
    ],
  },
  {
    id: 3,
    title: "Focus Time",
    description: "FocusTime_description",
    repoLink: "https://github.com/orellanamr/focusTime",
    liveLink: "",
    image: focusTimeCover,
    logo: TODo_logo,
    technologies: [
      { name: "React Native", logo: reactLogo },
      { name: "Expo", logo: expoLogo },
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    id: 4,
    title: "byteCode",
    description: "byteCode_description",
    repoLink: "https://github.com/orellanamr/bytecode_landing",
    liveLink: "https://bytecodelatam.com",
    image: byteCode,
    logo: byteCode_logo,
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Material UI", logo: materialUILogo },
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    id: 5,
    title: "Portfolio",
    description: "Portfolio_description",
    repoLink: "https://github.com/orellanamr/orellanamr.github.io",
    liveLink: "https://orellanamr.github.io/",
    image: portfolioRolando,
    logo: todo_logo,
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Material UI", logo: materialUILogo },
      { name: "Git", logo: gitLogo },
    ],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 12, px: 4 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          px: { xs: 2, md: 16, lg: 22 },
          paddingBottom: 4,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#000000"
            sx={{
              textAlign: "left",
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
            }}
            gutterBottom
          >
            {t("Projects")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            color="#000000"
            sx={{
              textAlign: "left",
              fontSize: { xs: "1.1rem", md: "1.5rem", lg: "1.5rem" },
            }}
            gutterBottom
          >
            {t("projects_subtitle")}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{
          px: { xs: 2, md: 5, lg: 20 },
        }}
      >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 4,
                boxShadow: "none",
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={project.image}
                alt={project.title}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end ",
                  alignItems: "flex-start",
                  textAlign: "left",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  padding: 2,
                  boxSizing: "border-box",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <img
                    src={project.logo}
                    href={project.liveLink}
                    alt={`${project.title} logo`}
                    style={{ marginRight: "8px", verticalAlign: "sub" }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  {t(project.description)}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Button
                    variant="text"
                    size="small"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      "&:hover": {
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                      },
                    }}
                    startIcon={<GitHubIcon />}
                  >
                    {t("view_repo")}
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    href={project.liveLink || "#"}
                    target={project.liveLink ? "_blank" : "_self"}
                    rel={project.liveLink ? "noopener noreferrer" : ""}
                    disabled={!project.liveLink}
                    sx={{
                      color: "white",
                      "&:hover": {
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {t("live_preview")}
                  </Button>
                </Box>
              </Box>
            </Card>
            <Box sx={{ mt: 2 }}>
              <Stack direction="row" spacing={1}>
                {project.technologies.map((tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      border: "1px solid #ccc",
                      borderRadius: "16px",
                      padding: "4px 8px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        borderColor: "#00DA94",
                        backgroundColor: "rgba(0, 218, 148, 0.1)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography variant="body2">{tech.name}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

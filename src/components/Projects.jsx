import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import byteCode from "../assets/images/byteCode_landing.jpg";
import Reco from "../assets/images/reco_desktop.jpg";
import ToDo from "../assets/images/todo_list.jpg";
import byteCode_logo from "../assets/images/byteCode_logo.svg";
import Reco_logo from "../assets/images/reco_logo.svg";
import todo_logo from "../assets/images/todo_logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    id: 1,
    title: "byteCode",
    description: "byteCode_description",
    repoLink: "https://github.com/orellanamr/bytecode_landing",
    liveLink: "https://orellanamr.github.io/bytecode_landing/",
    image: byteCode,
    logo: byteCode_logo,
    technologies: ["React.js", "Material UI", "JavaScript"],
  },
  {
    id: 2,
    title: "Reco",
    description: "Reco_description",
    repoLink:
      "https://github.com/andrea-calderon/Web_App_Chispudos/tree/development",
    liveLink: "",
    image: Reco,
    logo: Reco_logo,
    technologies: ["React.js", "Git", "JavaScript"],
  },
  {
    id: 3,
    title: "ToDo List",
    description: "ToDo_description",
    repoLink: "",
    liveLink: "",
    image: ToDo,
    logo: todo_logo,
    technologies: ["React.js", "Material UI", "CSS"],
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
          paddingLeft: {
            xs: 2,
            md: 24,
          },
          paddingRight: {
            xs: 2,
            md: 24,
          },
          paddingBottom: 4,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#000000"
            sx={{ textAlign: "left" }}
            gutterBottom
          >
            {t("Projects")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            color="#000000"
            sx={{ textAlign: "left" }}
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
          paddingLeft: {
            xs: 2,
            md: 24,
          },
          paddingRight: {
            xs: 2,
            md: 24,
          },
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
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <Chip key={index} label={tech} variant="outlined" />
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

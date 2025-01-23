import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import byteCode from "../assets/images/byteCode_landing.jpg";
import Reco from "../assets/images/reco_desktop.jpg";
import ToDo from "../assets/images/todo_list.jpg";

const projects = [
  {
    id: 1,
    title: "byteCode",
    description: "byteCode_description",
    image: byteCode,
    technologies: ["React.js", "Material UI", "JavaScript"],
  },
  {
    id: 2,
    title: "Reco",
    description: "Reco_description",
    image: Reco,
    technologies: ["React.js", "Git", "JavaScript"],
  },
  {
    id: 3,
    title: "ToDo List",
    description: "ToDo_description",
    image: ToDo,
    technologies: ["React.js", "Material UI", "CSS"],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: 4 }}>
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
            variant="h1"
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
                overflow: "auto",
                height: 400,
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
                  justifyContent: "center",
                  alignItems: "flex-start",
                  textAlign: "left",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">
                  {t(project.description)}
                </Typography>
              </Box>
              <CardContent
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  pt: 2,
                }}
              ></CardContent>
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

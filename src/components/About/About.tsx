import { Box, Grid } from "@mui/material";

const About: React.FC = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              "& img": {
                maxWidth: "100px",
                height: "100px",
                borderRadius: "50px",
              },
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/profilePicture.jpeg"}
              alt="profile pic"
            />
          </Box>
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            margin: "20px 0 0 10px",
          }}
        >
          <p style={{ margin: 0, color: "var(--header-color)" }}>
            Marcin Wrzoś
          </p>
          <p style={{ margin: 0 }}>Full Stack Developer</p>
        </Grid>

        <Grid item xs={12}>
          <h5>About</h5>
          <p>
            I am a{" "}
            <span style={{ color: "var(--role-color)" }}>
              Full Stack Developer
            </span>{" "}
            with a background in the{" "}
            <span style={{ color: "var(--role-color)" }}>
              financial industry
            </span>
            , combining engineering and domain knowledge. I work across{" "}
            <span style={{ color: "var(--role-color)" }}>
              React, TypeScript and Angular
            </span>{" "}
            on the frontend, and{" "}
            <span style={{ color: "var(--role-color)" }}>
              Java/Spring Boot and Node.js
            </span>{" "}
            on the backend, with hands-on experience in{" "}
            <span style={{ color: "var(--role-color)" }}>
              AWS, Terraform and CI/CD
            </span>
            .
          </p>
          <p>
            Recent work spans a{" "}
            <span style={{ color: "var(--role-color)" }}>
              serverless SaaS platform
            </span>
            , an{" "}
            <span style={{ color: "var(--role-color)" }}>
              IoT monitoring platform
            </span>{" "}
            with a full mobile release pipeline (live on the App Store and
            Google Play), and{" "}
            <span style={{ color: "var(--role-color)" }}>
              enterprise systems for the public sector
            </span>{" "}
            with strict security and documentation requirements.
          </p>
          <p>
            I care about clean, maintainable code and clear technical
            documentation as much as I care about shipping features. See the
            case studies below for more detail on each project.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

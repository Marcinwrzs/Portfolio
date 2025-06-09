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
          <p style={{ margin: 0 }}>Frontend Developer</p>
        </Grid>

        <Grid item xs={12}>
          <h5>About</h5>
          <p>
            I am a{" "}
            <span style={{ color: "var(--role-color)" }}>
              Front-End Developer
            </span>{" "}
            specializing in{" "}
            <span style={{ color: "var(--role-color)" }}>React.js </span>{" "}
            including{" "}
            <span style={{ color: "var(--role-color)" }}>
              Hooks and Redux, TypeScript, Jest testing library
            </span>
            . I build cloud-based telemetry systems and vending machine
            interfaces (e.g.,{" "}
            <span style={{ color: "var(--role-color)" }}>“Kwiatomaty”</span>
            ).
          </p>
          <p>
            At
            <span style={{ color: "var(--company-color)" }}> Exa22</span>, I
            develop and maintain web applications while collaborating with
            back-end developers to define API endpoints and application flow.
          </p>
          <p>
            I also integrate front-end applications with{" "}
            <span style={{ color: "var(--role-color)" }}>
              AWS services (Amazon S3){" "}
            </span>
            and write unit tests using Jest to ensure software reliability.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

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
          <p style={{ margin: 0 }}>Frontend developer</p>
        </Grid>

        <Grid item xs={12}>
          <h5>About</h5>
          <p>
            Hello, I'm Marcin,{" "}
            <span style={{ color: "var(--role-color)" }}>
              frontend developer{" "}
            </span>
            at
            <span style={{ color: "var(--company-color)" }}> Exa22</span> with 5
            years of experience in the investment banking section and process
            automation role.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

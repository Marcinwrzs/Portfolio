import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { Grid } from "@mui/material";
import CV from "Marcin Wrzos CV.pdf";

const Contact: React.FC = () => {
  return (
    <>
      <h5>Get In Touch</h5>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <div>
            <p style={{ display: "inline", color: "var(--article-color)" }}>
              <GoMarkGithub /> Github
            </p>
          </div>
          <div>
            <p style={{ display: "inline", color: "var(--article-color)" }}>
              <BsLinkedin /> Linkedin
            </p>
          </div>
        </Grid>
        <Grid item sm={9}>
          <p
            style={{
              margin: 0,
              color: "var(--header-color)",
              display: "inline",
            }}
          >
            <a
              href="https://github.com/Marcinwrzs/"
              target="_blank"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "var(--header-color)",
              }}
            >
              @Marcinwrzs
            </a>
          </p>
          <p
            style={{
              margin: 0,
              color: "var(--header-color)",
            }}
          >
            <a
              href="https://linkedin.com/in/marcin-wrzoś"
              target="_blank"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "var(--header-color)",
              }}
            >
              @Marcin-Wrzoś
            </a>
          </p>

          <p
            style={{
              margin: 0,
              color: "var(--header-color)",
            }}
          >
            <a
              href={CV}
              target="_blank"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "var(--header-color)",
              }}
            >
              CV
            </a>
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;

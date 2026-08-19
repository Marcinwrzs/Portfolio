import { Container } from "@mui/material";
import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Experience from "components/Experience/Experience";
import Projects from "components/Projects/Projects";

const App = () => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: 630 }}>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Container>
  );
};

export default App;

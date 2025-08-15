import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json";

const Section = styled.section`
  padding: 4rem 2rem;
  font-family: "Poppins", "Inter", sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const Hero = styled(motion.section)`
  text-align: center;
  background-color: var(--card-bg-color);
  padding-top: 6rem;
  padding-bottom: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: var(--text-color);
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: var(--secondary-text-color);
  max-width: 600px;
  margin: 1rem auto;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--button-bg-color);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 3rem auto;

  &:hover {
    background-color: var(--button-hover-bg-color);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledH2 = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 3px solid var(--button-bg-color);
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const StyledProjectCard = styled.div`
  background-color: ${(props) =>
    props.index % 2 === 0
      ? "var(--card-bg-color)"
      : "var(--card-bg-color-alt)"};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
`;

const AboutSection = styled(Section)`
  background: linear-gradient(
    135deg,
    var(--card-bg-color),
    var(--background-color)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1.5rem;
`;

const AboutContent = styled.div`
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.125rem;
  color: var(--secondary-text-color);
  line-height: 1.8;
`;

const ResumeDownload = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  background-color: var(--resume-button-bg);
  color: var(--resume-button-text-color);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  border: 2px solid transparent;
  transition: background-color 0.15s ease, transform 0.08s ease;

  &:hover {
    background-color: var(--button-hover-bg-color);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>
          Hi, I'm <span style={{ color: "#3b82f6" }}>Sunny Shikhar</span>
        </Heading>
        <Subheading>
          I build fast, scalable, and modern interfaces using React and its
          ecosystem.
        </Subheading>
        <CTAButton to="/projects" aria-label="View my projects">
          View My Work
        </CTAButton>
      </Hero>

      {/* About Summary */}
      <AboutSection>
        <StyledH2>About Me</StyledH2>
        <AboutContent>
          <p>
            I’m a builder who loves shipping polished web experiences. I combine
            thoughtful UI, pragmatic backend services, and reliable deployments
            to solve practical problems. Whether it's a small utility or a
            full-stack system, I aim for speed, clarity and positive user
            impact.
          </p>
        </AboutContent>
        <ResumeDownload
          href="/Sunny_Shikhar_ReactJs_Latest_Resume.pdf"
          download
          aria-label="Download Sunny Shikhar resume"
        >
          Download Resume (PDF)
        </ResumeDownload>
        <CTAButton to="/about">More About Me</CTAButton>
      </AboutSection>

      {/* Featured Projects */}
      <Section>
        <StyledH2>Featured Projects</StyledH2>
        <Grid>
          {projectData.slice(0, 3).map((project, index) => (
            <StyledProjectCard key={index} index={index}>
              <ProjectCard {...project} />
            </StyledProjectCard>
          ))}
        </Grid>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <CTAButton to="/projects">See All Projects</CTAButton>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section
        style={{ backgroundColor: "var(--card-bg-color)", textAlign: "center" }}
      >
        <StyledH2>Get In Touch</StyledH2>
        <Subheading>
          Want to collaborate or have an opportunity to discuss? Let’s connect.
        </Subheading>
        <CTAButton to="/contact">Contact Me</CTAButton>
      </Section>
    </>
  );
};

export default Home;

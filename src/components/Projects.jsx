import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json";

const Section = styled.section`
  padding: 4rem 2rem;
  font-family: "Poppins", "Inter", sans-serif;
  background-color: var(--background-color);
`;

const Heading = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  text-align: center;
  color: var(--secondary-text-color);
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Projects = () => {
  return (
    <Section>
      <Heading>Projects</Heading>
      <Subheading>
        Here are some of the apps I've built using React and its ecosystem.
      </Subheading>
      <Grid>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;

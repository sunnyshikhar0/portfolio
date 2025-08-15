import styled from "styled-components";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--card-border-color);
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--card-bg-color-alt);
  box-shadow: 0 2px 8px var(--shadow-color);
  min-height: 240px;
`;

const Content = styled.div`
  flex: 1 1 auto;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: var(--secondary-text-color);
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  li {
    background-color: var(--card-bg-color);
    color: var(--text-color);
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 4px;
  }
`;


const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.75rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    text-decoration: none;
    min-width: 100px;
    flex: 1 1 auto;
  }

  a.live {
    background-color: var(--button-bg-color);
    color: white;
  }

  a.github {
    background-color: transparent;
    color: var(--button-bg-color);
    border: 1px solid var(--button-bg-color);
  }

  a.live:hover {
    background-color: var(--button-hover-bg-color);
  }

  a.github:hover {
    color: var(--button-hover-bg-color);
    border-color: var(--button-hover-bg-color);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;

    a {
      min-width: 0;
      width: 100%;
    }
  }
`;

const ProjectCard = ({ title, description, tech = [], link, github }) => {
  return (
    <Card>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechList>
          {tech.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </TechList>
      </Content>

      <Links>
        <a
          className="live"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${title}`}
        >
          Live Demo
        </a>
        <a
          className="github"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for ${title}`}
        >
          GitHub
        </a>
      </Links>
    </Card>
  );
};

export default ProjectCard;
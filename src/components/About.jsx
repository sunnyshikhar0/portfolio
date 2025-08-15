import styled from "styled-components";
import skillList from "../data/skillList.json";


const Section = styled.section`
  padding: 4rem 2rem;
  background-color: var(--background-color);
  font-family: "Poppins", "Inter", sans-serif;
  text-align: center;
  margin-top: 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  text-align: left;
  font-size: 1.125rem;
  color: var(--secondary-text-color);
  line-height: 1.8;

  ul {
    margin-top: 1rem;
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        content: "🌟";
        font-size: 1.25rem;
      }
    }
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--button-bg-color);
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--button-hover-bg-color);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 700px;
  margin: 2rem auto 0;
  text-align: center;
`;

const SkillTag = styled.div`
  background-color: var(--card-bg-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <Section>
      <Title>About Me</Title>
      <Content>
        <p>
          I’m a frontend-focused full‑stack developer who builds
          production-ready web applications. My work spans fast client apps
          (React + Vite + Tailwind), robust backends (Node/Express), and data
          stores (MongoDB). I ship features end-to-end — authentication, file
          uploads, APIs, and integrations with third‑party services.
        </p>

        <ul>
          <li>Built image upload & management systems (Cloudinary + MERN).</li>
          <li>
            Designed secure, scalable REST APIs with JWT auth and role-based
            access.
          </li>
          <li>
            Implemented AI-powered utilities (Anthropic Claude integration).
          </li>
          <li>
            Focus on performance, accessibility, responsive UI and clean
            developer experience.
          </li>
          <li>
            Experience deploying apps to Vercel, Railway, and Netlify with
            CI-friendly builds.
          </li>
        </ul>
      </Content>
      <ResumeButton
        href="/Sunny_Shikhar_ReactJs_Latest_Resume.pdf"
        download
        aria-label="Download Sunny Shikhar resume"
      >
        Download Resume
      </ResumeButton>

      <Title style={{ marginTop: "4rem" }}>Skills</Title>
      <SkillsGrid>
        {skillList.map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </SkillsGrid>
    </Section>
  );
}

export default About;

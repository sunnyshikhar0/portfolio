// src/components/Footer.jsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: var(--card-bg-color);
  padding: 2rem;
  text-align: center;
  font-family: "Poppins", "Inter", sans-serif;
  color: var(--secondary-text-color);
  border-top: 1px solid var(--border-color);
`;

const NavLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const FooterNavLink = styled(NavLink)`
  color: var(--secondary-text-color);
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: var(--button-bg-color);
  }

  &.active {
    color: var(--button-bg-color);
  }
`;

const Small = styled.small`
  display: block;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--secondary-text-color);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <NavLinks>
        <FooterNavLink to="/">Home</FooterNavLink>
        <FooterNavLink to="/about">About</FooterNavLink>
        <FooterNavLink to="/projects">Projects</FooterNavLink>
        <FooterNavLink to="/contact">Contact</FooterNavLink>
        <FooterNavLink
          to="https://www.linkedin.com/in/sunny-shikhar-54972aba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </FooterNavLink>
      </NavLinks>
      <Small>
        © {new Date().getFullYear()} Sunny Shikhar. All rights reserved.
      </Small>
    </FooterWrapper>
  );
};

export default Footer;

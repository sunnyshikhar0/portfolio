import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--background-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 999;
  padding: 1rem 2rem;
  font-family: "Poppins", "Inter", sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: wavy;
  font-style: italic;
  &:hover {
    color: var(--button-bg-color);
  }
  transition: color 0.2s ease;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
  font-size: 1rem;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--button-bg-color);
  }

  &.active {
    color: var(--button-bg-color);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--button-bg-color);
  }
`;

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme

  return (
    <Nav>
      <Logo to="/">Portfolio</Logo>
      <Menu>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/about">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/projects">Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </ThemeToggle>
    </Nav>
  );
}

export default Navbar;

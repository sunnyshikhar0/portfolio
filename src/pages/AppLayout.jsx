import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-x: hidden;
`;

function AppLayout() {
  return (
    <Wrapper>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default AppLayout;

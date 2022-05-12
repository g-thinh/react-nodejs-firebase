import styled from "styled-components";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <Container>
      <Nav />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: #282c34;
`;

const Main = styled.main`
  min-height: 100vh;
`;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Nav from "./components/Nav";
import styled from "styled-components";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Layout>
      <Router>
        <Nav />
        <Main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route
              path="/profile"
              exact
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Main>
      </Router>
    </Layout>
  );
}

const Main = styled.main`
  min-height: 100vh;
  color: white;
`;

const Layout = styled.div`
  background-color: #282c34;
`;

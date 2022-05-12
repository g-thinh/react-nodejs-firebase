import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { signOutUser } from "../utils/firebase";

export default function Nav() {
  const { user } = useAuth();

  return (
    <StyledNav>
      <Links>
        <h1>My App</h1>
        <StyledLink to="/">Home</StyledLink>
        {user && <StyledLink to="/feed">Feed</StyledLink>}
      </Links>
      <Buttons>
        {user && <p>Hello, {user.email}</p>}
        {user ? (
          <>
            <StyledLink to="/profile">Profile</StyledLink>
            <button onClick={() => signOutUser()}>Sign Out</button>
          </>
        ) : (
          <StyledLink to="/signin">Sign In</StyledLink>
        )}
      </Buttons>
    </StyledNav>
  );
}

const Links = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 12px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 12px;
`;

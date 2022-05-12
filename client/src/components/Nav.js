import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { signInUser, signOutUser } from "../utils/firebase";

export default function Nav() {
  const { user } = useAuth();

  return (
    <StyledNav>
      <Links>
        <h1>My App</h1>
        <Link href="/">Home</Link>
        <Link href="/">Another Page</Link>
      </Links>
      <Buttons>
        {user && <p>Hello, {user.email}</p>}
        {user ? (
          <button onClick={() => signOutUser()}>Sign Out</button>
        ) : (
          <button
            onClick={() => signInUser("gthinh.nguyen@gmail.com", "thinh123")}
          >
            Sign In User
          </button>
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

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const Link = styled.a`
  font-size: 18px;
  color: white;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 12px;
`;

import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <Page>
      <h2>My Profile Page</h2>
      {user.uid && <p>My ID: {user.uid}</p>}
      {user.email && <p>My email: {user.email}</p>}
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

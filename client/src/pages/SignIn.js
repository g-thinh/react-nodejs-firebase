import styled from "styled-components";
import { useState } from "react";
import { signInUser } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signInUser(email, password).then(() => navigate("/feed"));
    } catch (error) {
      console.log("signInUser", error);
    }
  };

  return (
    <Page>
      <h2>Sign in Page</h2>
      <p>To login into your account, enter your credentials</p>
      <Form>
        <Field>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </Field>
        <Field>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </Field>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

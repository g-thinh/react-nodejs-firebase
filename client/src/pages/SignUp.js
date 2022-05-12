import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUser } from "../utils/firebase";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createUser(name, email, password).then(() => navigate("/feed"));
    } catch (error) {
      console.log("createUser", error);
    }
  };

  return (
    <Page>
      <h2>Create Account Page</h2>
      <p>To sign up as a new user, enter your credentials</p>
      <Form>
        <Field>
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Field>
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
          Create Account
        </button>
      </Form>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
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
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

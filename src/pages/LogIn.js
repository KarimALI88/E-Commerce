import React, { useState } from "react";
import "../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LogIn() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [trueMessage, setTrueMessage] = useState("");
  // const [login, setLogin] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );

      // Assuming your API returns a success message or user data
      const users = response.data;

      if (users.length > 0) {
        // User exists, you can handle the login success here
        console.log("Login successful");
        setTrueMessage("Login successful");
        login(); // Use the login function from the context
        setTimeout(()=>{
            navigate('/')
        },3000)
      } else {
        // API indicates that the user does not exist
        setMessage("User not found. Please check your credentials.");
      }

      // Set formSubmitted to true after the login attempt
      setFormSubmitted(true);
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error("Error during login:", error.message);
      setMessage("An error occurred during login. Please try again.");
      setFormSubmitted(true);
    }
  };

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">LOGIN</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">
          <i className="fa-solid fa-envelope"></i> Email address
        </Form.Label>
        <Form.Control
          className="input"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label">
          <i className="fa-solid fa-lock"></i> Password
        </Form.Label>
        <Form.Control
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <p className="signup-stmt">if you don't have an account. <Link to={'/signup'}>SignUp</Link></p>
      <Button className="submit" type="submit">
        Submit
      </Button>
      {formSubmitted && login ? (
        <Alert className="alert" key={"success"} variant={"success"}>
          {trueMessage}
        </Alert>
      ) : formSubmitted && !login ? (
        <Alert className="alert" key={"danger"} variant={"danger"}>
          {message}
        </Alert>
      ) : null}
    </Form>
  );
}

export default LogIn;

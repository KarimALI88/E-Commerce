import React, { useState } from "react";
import "../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();

    try {
      axios.post(
        `http://localhost:3000/users`,{
          name : name,
          email : email,
          password : password
        }
      ).then(res => {
        console.log(res.data)
        setMessage('added successfully')
        setTimeout(()=>{
        navigate('/login')
        },2000)
      })

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
      <h1 className="login-title">SIGNUP</h1>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="label">
        <i className="fa-solid fa-user"></i> User Name
        </Form.Label>
        <Form.Control
          className="input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      {/* ************************************************************************************************* */}
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
      {/* ************************************************************************************************* */}
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
      <Button className="submit" type="submit">
        Submit
      </Button>
      {formSubmitted && (
        <Alert className="alert" key={"success"} variant={"success"}>
          {message}
        </Alert>
      ) }
    </Form>
  );
}

export default SignUp;

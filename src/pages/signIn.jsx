import "./styles/SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
const baseURL = "http://localhost:5000/api/v1/auth/email";
function SignIn() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        baseURL,
        {
          email: email,
          password: "3bc8f72e95a9",
        },
        {
          auth: {
            username: "defaultkey",
          },
          params: { create: false },
        }
      );
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.token);
        localStorage.setItem("jwt", res.data.token);
        console.log(localStorage.getItem("jwt"));
        navigate("/tournments");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <h7> Track your Competators</h7>
        <Container fluid className="form">
          {/* <Form.Group className="mb-3" controlId="name">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="Email">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit">Sign In</Button>
        </Container>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Form>
    </div>
  );
}

export default SignIn;

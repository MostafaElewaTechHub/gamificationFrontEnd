import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
const baseURL = "http://localhost:5000/api/v1/auth/email";

function SignUp() {
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
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        backgroundSize: "cover",
        height: " 100vh",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <div className="mask gradient-custom-3" />
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Log in</h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput wrapperClass="mb-4" label="Password" size="lg" id="form3" type="password" />
            {/* <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="I agree all statements in Terms of service" />
            </div> */}
            <Button type="submit" className="mb-3" size="lg">
              Sign In
            </Button>
          </MDBCardBody>
        </MDBCard>
      </Form>
    </MDBContainer>
  );
}

export default SignUp;

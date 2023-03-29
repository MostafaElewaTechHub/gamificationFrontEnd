import "./styles/SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
const baseURL = "http://localhost:5000/api/v1/tournament";
function CreateTournments() {
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [message, setMessage] = useState("");
  const [joinRequired, setJoinRequired] = useState("");
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(baseURL, {
        notification: {
          subject: "New tournment",
          content: {
            message: "you have been added to a new tournment",
          },
          code: 101,
          persistent: true,
        },
        users: [
          {
            id: "69ca8540-69c4-4f64-985f-1b19c991be03",
            username: "hamza4",
          },
        ],
        filter: {
          location: "Damietta",
        },
        tournament: {
          authoritative: false,
          sortOrder: "descending",
          operator: "best",
          duration: 360000,
          resetSchedule: "0,50 0,59 0,3 ? * * *",
          metadata: {
            weatherConditions: "rain",
          },
          title: title,
          description: description,
          category: 1,
          startTime: 1679178764,
          endTime: 0,
          maxSize: 10000,
          maxNumScore: 2,
          joinRequired: true,
        },
      });
      console.log(res);
      if (res.status === 401) {
        // console.log(res.data.token);
        // localStorage.setItem("jwt", res.data.token);
        // console.log(localStorage.getItem("jwt"));
        navigate("/");
      } else {
        console.log(res);
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Container fluid className="form">
          <Form.Group className="mb-3" controlId="title">
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              type="text"
              placeholder="description"
              onChange={(e) => setDescrption(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="joinRequired">
            <Form.Control
              type="text"
              placeholder="joinRequired"
              onChange={(e) => setJoinRequired(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Subject">
            <Form.Control
              type="text"
              placeholder="Subject"
              onChange={(e) => setJoinRequired(e.target.value)}
            />
          </Form.Group>

          <Button type="submit">create</Button>
        </Container>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </Form>
    </div>
  );
}

export default CreateTournments;

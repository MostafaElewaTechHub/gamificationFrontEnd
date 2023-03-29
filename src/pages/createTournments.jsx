import "./styles/SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, FormLabel } from "react-bootstrap";
const baseURL = "http://localhost:5000/api/v1/tournament";
function CreateTournments() {
  console.log(new Date().getTime());
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [message, setMessage] = useState("");
  const [joinRequired, setJoinRequired] = useState("");
  const [subject, setSubject] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [operator, setOperator] = useState("best");
  const [maxSize, setMaxSize] = useState("");
  const [startTime, setStartTime] = useState(
    Math.floor(new Date().getTime() / 1000)
  );
  const [governorate, setGovernorate] = useState("Giza");
  const [endTime, setEndTime] = useState(0);

  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(baseURL, {
        notification: {
          subject,
          content: {
            message: "you have been added to a new tournment",
          },
          code: 101,
          persistent: true,
        },
        users: [],
        filter: {
          location: governorate,
        },
        tournament: {
          authoritative: false,
          sortOrder,
          operator,
          duration: 360000,
          resetSchedule: "0,50 0,59 0,3 ? * * *",
          metadata: {
            weatherConditions: "rain",
          },
          title,
          description,
          category: 0,
          startTime,
          endTime,
          maxSize,
          maxNumScore: 2,
          joinRequired: true,
        },
      });
      console.log(res);
      if (res.status === 200) {
        // console.log(res.data.token);
        // localStorage.setItem("jwt", res.data.token);
        // console.log(localStorage.getItem("jwt"));
        navigate("/tournments");
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
        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3" controlId="title">
              <FormLabel>title</FormLabel>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={7} id="sidebar-wrapper">
            <Form.Group className="mb-3" controlId="description">
              <FormLabel>description</FormLabel>
              <Form.Control
                type="text"
                placeholder="description"
                onChange={(e) => setDescrption(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3" controlId="maxSize">
              <FormLabel>maximum Size</FormLabel>
              <Form.Control
                type="number"
                placeholder="Max size"
                onChange={(e) => setMaxSize(Number(e.target.value))}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="Subject">
              <FormLabel>Subject</FormLabel>

              <Form.Control
                type="text"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3" controlId="sortOrder">
              <FormLabel>sort order</FormLabel>
              <Form.Control
                type="text"
                as="select"
                placeholder="operator"
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="ascending"> Ascending</option>
                <option value="descending">Descending</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="operator">
              <FormLabel>Operator</FormLabel>

              <Form.Control
                type="text"
                as="select"
                placeholder="operator"
                onChange={(e) => setOperator(e.target.value)}
              >
                <option value="best">Best</option>
                <option value="set">Set</option>
                <option value="incr">Increment</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3" controlId="sortOrder">
              <FormLabel>Start Time</FormLabel>
              <Form.Control
                type="text"
                placeholder="start time"
                onChange={(e) =>
                  setStartTime(
                    Math.floor(new Date(e.target.value).getTime() / 1000)
                  )
                }
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="operator">
              <FormLabel>End Time</FormLabel>
              <Form.Control
                type="text"
                placeholder="end time"
                onChange={(e) =>
                  setEndTime(
                    Math.floor(new Date(e.target.value).getTime() / 1000)
                  )
                }
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3" controlId="sortOrder">
              <Form.Check type="checkbox" label="require join"></Form.Check>
            </Form.Group>
          </Col>
        </Row>
        <h3> Filter </h3>
        <Row>
          <Col xs={5}>
            <Form.Group className="mb-3" controlId="filter">
              <FormLabel>Filter</FormLabel>
              <Form.Control
                type="text"
                as="select"
                placeholder="filter"
                // onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="location"> Location</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-3" controlId="filter">
              <FormLabel>Government</FormLabel>
              <Form.Control
                type="text"
                as="select"
                placeholder="filter"
                onChange={(e) => setGovernorate(e.target.value)}
              >
                <option value="Giza"> Giza</option>
                <option value="Damietta"> Damietta</option>
                <option value="Cairo"> Cairo</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">create</Button>
      </Form>
    </div>
  );
}

export default CreateTournments;

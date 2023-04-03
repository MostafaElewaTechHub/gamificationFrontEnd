import "./styles/SignIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, FormLabel } from "react-bootstrap";
const baseURL = "http://localhost:5000/api/v1/createCompetitionTrueFalse/";
function CreateTournments() {
  console.log(new Date().getTime());
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [theme, setTheme] = useState("");
  const [q1, setQ1] = useState("");
  const [a1, setA1] = useState("");
  const [q2, setQ2] = useState("");
  const [a2, setA2] = useState("");
  const [q3, setQ3] = useState("");
  const [a3, setA3] = useState("");
  const [q4, setQ4] = useState("");
  const [a4, setA4] = useState("");
  const [message, setMessage] = useState("");
  const [joinRequired, setJoinRequired] = useState("");
  const [subject, setSubject] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [operator, setOperator] = useState("best");
  const [maxSize, setMaxSize] = useState("");
  const [startTime, setStartTime] = useState(
    Math.floor(new Date().getTime() / 1000)
  );
  const token = localStorage.getItem("jwt");
  const [governorate, setGovernorate] = useState("Giza");
  const [endTime, setEndTime] = useState(0);


  const [fields, setFields] = useState({});
  function handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    setFields({...fields, [name]: value})
    console.log(fields['revenueGenerated'])
}

  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(baseURL,
        {
        notification: {
          subject: "New tournment",
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
          id:"",
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
        objects: [
          {
          collection: theme,
          key: "",
          value: `{"questions": [{"question": "${q1}","answer": ${a1}},{"question": "${q2}","answer": ${a2}},{"question": "${q3}","answer": ${a3}},{"question": "${q4}","answer": ${a4}}]}`,
          version: null,
          permissionWrite: 1,
          permissionRead: 2
          }
      ]
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
            <Form.Group className="mb-3" controlId="theme">
              <FormLabel>Theme</FormLabel>
              <Form.Control type="text" as="select" placeholder="Theme" name="tuornament-type"

                    onChange={ e=> { handleChange(e) ;setTheme(e.target.value) } }
                    value={fields["tuornament-type"]}>
                <option value="true_false"> True and False </option>
                <option value="points"> Points </option>
                <option value="mcq"> MCQ </option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {

          fields['tuornament-type'] === 'true_false' ?
         <>
         <Row>
              <Col>
                <Form.Group className="mb-3" controlId="question">
                  <FormLabel>Questions</FormLabel>
                  <Form.Control type="text" placeholder="question" onChange={(e) => setQ1(e.target.value)}>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="answer">
                  <FormLabel>Answer</FormLabel>
                  <select name="revenueGenerated"
                    onChange={e => setA1(e.target.value)}
                    value={fields["revenueGenerated"]}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="question">
                    <FormLabel>Questions</FormLabel>
                    <Form.Control type="text" placeholder="question" onChange={(e) => setQ2(e.target.value)}>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="answer">
                    <FormLabel>Answer</FormLabel>
                    <select name="revenueGenerated"
                      onChange={e => setA2(e.target.value)}
                      value={fields["revenueGenerated"]}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>
         <Row>
              <Col>
                <Form.Group className="mb-3" controlId="question">
                  <FormLabel>Questions</FormLabel>
                  <Form.Control type="text" placeholder="question" onChange={(e) => setQ3(e.target.value)}>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="answer">
                  <FormLabel>Answer</FormLabel>
                  <select name="revenueGenerated"
                    onChange={e => setA3(e.target.value)}
                    value={fields["revenueGenerated"]}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="question">
                    <FormLabel>Questions</FormLabel>
                    <Form.Control type="text" placeholder="question" onChange={(e) => setQ4(e.target.value)}>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="answer">
                    <FormLabel>Answer</FormLabel>
                    <select name="revenueGenerated"
                      onChange={e => setA4(e.target.value)}
                      value={fields["revenueGenerated"]}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>
              </>
         :null
        }

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

import BasicExample from "../components/table";
import axios from "axios";
import React from "react";
import { Sidebar } from "../components/sidebar";
import { Col, Container, Row } from "react-bootstrap";
import "../components/sidebarStyle.css";
import { Navigate } from "react-router-dom";
const baseURL = "http://localhost:5000/api/v1/tournament/all";

export default function Tournments() {
  const [post, setPost] = React.useState(null);
  const token = localStorage.getItem("jwt");

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.statusCode === 401) {
          return <Navigate to="/signin" replace />;
        }
        setPost(response.data.tournaments);
      });
  }, [token]);

  if (!post) return "No Tournments!";

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <BasicExample parentToChild={post}></BasicExample>
          </Col>
        </Row>
      </Container>
    </>
  );
}

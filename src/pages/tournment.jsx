import BasicExample from "../components/table";
import axios from "axios";
import React from "react";
import { Sidebar } from "../components/sidebar";
import { Col, Container, Row } from "react-bootstrap";
import "../components/sidebarStyle.css";
const baseURL =
  "http://127.0.0.1:7350/v2/rpc/get_leaderboards?http_key=defaulthttpkey&unwrap";

export default function Tournments() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .post(baseURL, {
        categoryStart: 0,
        categoryEnd: 4,
        limit: 100,
      })
      .then((response) => {
        setPost(response.data.data.leaderboards);
      });
  }, []);

  if (!post) return "No post!";

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <BasicExample parentToChild={post}></BasicExample>;
          </Col>
        </Row>
      </Container>
    </>
  );
}

import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../components/sidebar";

export const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <h1>Home page</h1>
        </Col>
      </Row>
    </Container>
  );
};

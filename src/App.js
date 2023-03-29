import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { Home } from "./pages/Home";
import Tournments from "./pages/tournment";
import SignIn from "./pages/signIn";
import ProtectedRoute from "./components/protectedRoute";
import CreateTournments from "./pages/createTournments";
import { Sidebar } from "./components/sidebar";
import { Col, Container, Row } from "react-bootstrap";
// import BasicExample from "./components/table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/about"
          element={
            <>
              <Container fluid>
                <Row>
                  <Col xs={2} id="sidebar-wrapper">
                    <Sidebar />
                  </Col>
                  <Col xs={10} id="page-content-wrapper">
                    <About />
                  </Col>
                </Row>
              </Container>
            </>
          }
        />
        <Route
          exact
          path="/tournments"
          element={
            <ProtectedRoute>
              <Container fluid>
                <Row>
                  <Col xs={2} id="sidebar-wrapper">
                    <Sidebar />
                  </Col>
                  <Col xs={10} id="page-content-wrapper">
                    <Tournments />
                  </Col>
                </Row>
              </Container>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/create-tournments"
          element={
            <ProtectedRoute>
              <ProtectedRoute>
                <Container fluid>
                  <Row>
                    <Col xs={2} id="sidebar-wrapper">
                      <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                      <CreateTournments />
                    </Col>
                  </Row>
                </Container>
              </ProtectedRoute>
            </ProtectedRoute>
          }
        />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

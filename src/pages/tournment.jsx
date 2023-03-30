import BasicExample from "../components/table";
import axios from "axios";
import React from "react";
import { Sidebar } from "../components/sidebar";
import { Col, Container, Row } from "react-bootstrap";
import "../components/sidebarStyle.css";
import { Navigate } from "react-router-dom";
const baseURL = "http://localhost:5000/api/v1/tournament/all";

export default function Tournments() {
  const [tournment, setTournment] = React.useState(null);
  const token = localStorage.getItem("jwt");
  const keys = [
    "id",
    "title",
    "description",
    "category",
    "sort_order",
    "max_size",
    "max_num_score",
    "can_enter",
    "end_active",
    "next_reset",
    "metadata",
    "create_time",
    "start_time",
    "duration",
    "start_active",
    "prev_reset",
    "operator",
  ];

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.tournaments);
        if (response.statusCode === 401) {
          return <Navigate to="/signin" replace />;
        }
        setTournment(response.data.tournaments);
      });
  }, [token]);

  if (!tournment) return "No Tournments!";

  return (
    <>
      <Container fluid>
        <BasicExample data={tournment} keys={keys}></BasicExample>
      </Container>
    </>
  );
}

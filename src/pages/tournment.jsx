import BasicExample from "../components/table";
import axios from "axios";
import React from "react";
import { Sidebar } from "../components/sidebar";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "../components/sidebarStyle.css";
import image from "../../src/image.jpg";
import { Navigate } from "react-router-dom";
const baseURL = "http://localhost:5000/api/v1/tournament/all";

export default function Tournments() {
  const [tournment, setTournment] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const token = localStorage.getItem("jwt");
  const keys = ["title", "category", "sort_order", "max_size", "start_time", "operator", "Show More", "Delete"];

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.statusCode === 401) {
          return <Navigate to="/signin" replace />;
        }

        setTournment(response.data);
        setLoading(false);
      });
  }, [token]);
  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      {/* <img src={image} /> */}

      {tournment ? <BasicExample data={tournment} keys={keys}></BasicExample> : "No Tournements Available"}
    </>
  );
}

import React from "react";
import { Nav } from "react-bootstrap";
// import { withRouter } from "react-router";
import "./sidebarStyle.css";

export const Sidebar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/tournments">Tournments</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

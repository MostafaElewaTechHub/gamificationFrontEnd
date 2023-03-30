import Table from "react-bootstrap/Table";
import React from "react";
import "./table.css";
import { Button } from "react-bootstrap";

function BasicExample({ data, keys }) {
  return (
    <Table bordered hover className="table" responsive="sm">
      <thead>
        <tr>
          {keys.map((key) => {
            return <th>{key}</th>;
          })}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => {
          return (
            <tr key={data.id}>
              {keys.map((key) => {
                if (
                  key === "end_active" ||
                  key === "next_reset" ||
                  key === "start_active" ||
                  key === "prev_reset"
                ) {
                  const date = new Date(data[key]);
                  const formattedDate = date.toLocaleString();
                  return <td>{formattedDate}</td>;
                }
                return <td>{data[key]}</td>;
              })}
              <td>
                <Button className="button" size="sm" variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default BasicExample;

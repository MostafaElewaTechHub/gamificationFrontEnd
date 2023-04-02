import Table from "react-bootstrap/Table";
import React from "react";
import "./table.css";
import { Button } from "react-bootstrap";

function BasicExample({ data, keys }) {
  return (
    <div className="table">
      <Table bordered hover className="table" size="xxl">
        <thead className="head">
          <tr>
            {keys.map((key) => {
              return <th>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            data.category = "True and False";
            return (
              <tr key={data.id}>
                {keys.map((key) => {
                  if (key === "end_active" || key === "next_reset" || key === "start_active" || key === "prev_reset") {
                    const date = new Date(data[key]);
                    const formattedDate = date.toLocaleString();
                    return <td>{formattedDate}</td>;
                  } else if (key === "Delete") {
                    return (
                      <td>
                        <Button size="sm" variant="danger" className="button">
                          Delete
                        </Button>
                      </td>
                    );
                  } else if (key === "Show More") {
                    return (
                      <td>
                        <Button size="sm" variant="info" className="button">
                          Show More
                        </Button>
                      </td>
                    );
                  }
                  return <td>{data[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default BasicExample;

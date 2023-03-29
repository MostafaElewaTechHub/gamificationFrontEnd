import Table from "react-bootstrap/Table";
import React from "react";

function BasicExample({ data, keys }) {
  return (
    <Table bordered hover className="table">
      <thead>
        <tr>
          {keys.map((key) => {
            return <th>{key}</th>;
          })}
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
                  console.log(formattedDate);
                  return <td>{formattedDate}</td>;
                }
                return <td>{data[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default BasicExample;

import Table from "react-bootstrap/Table";
import React from "react";

function BasicExample({ parentToChild }) {
  return (
    <Table bordered hover className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>operator</th>
          <th>create Time</th>
          <th>sort order</th>
        </tr>
      </thead>
      <tbody>
        {parentToChild.map((parentToChild) => {
          return (
            <tr key={parentToChild.id}>
              <td>{parentToChild.id}</td>
              <td>{parentToChild.createTime}</td>
              <td>{parentToChild.sortOrder}</td>
              <td>{parentToChild.operator}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default BasicExample;

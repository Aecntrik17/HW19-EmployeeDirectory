import React from "react";

function EmployeeTable(props) {
  return (
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">image</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Cell</th>
          <th scope="col">email</th>
          <th scope="col">gender</th>
          <th scope="col">city</th>
        </tr>
      </thead>
      <tbody>
        {props.employeesList.map((employee) => (
          <tr>
            <td>
              {" "}
              <img src={employee.picture.thumbnail} />
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
            <td>{employee.gender}</td>
            <td>
              {employee.location.city}, {employee.location.state}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;

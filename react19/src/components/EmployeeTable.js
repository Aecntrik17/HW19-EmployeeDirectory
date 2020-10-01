import React from "react";
import "./style.css";

function EmployeeTable(props) {
  const filterList = props.employeesList.filter(
    (employee) =>
      employee.name.first.toLowerCase().includes(props.search.toLowerCase()) ||
      employee.name.last.toLowerCase().includes(props.search.toLowerCase())
  );

  return (
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Cell</th>
          <th scope="col">Email</th>
          <th scope="col">City, State</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {/* only search for employees through the filtered list */}
        {filterList.map((employee) => (
          <tr>
            <td>
              {" "}
              <img src={employee.picture.thumbnail} />
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
            <td>
              {employee.location.city}, {employee.location.state}
            </td>
            <td>{employee.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;

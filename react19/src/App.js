import React from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import EmployeeTable from "./components/EmployeeTable";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
  };
  // function to generate api call
  componentDidMount() {
    API.getRandomEmployee()
      .then((res) => {
        console.log(res);
        // setting state
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }
  // taking whatever is in the input box and saving it to state
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  // displaying the html
  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <input
          className="input"
          value={this.state.search}
          onChange={this.handleInputChange}
          type="text"
          placeholder="search name"
          label="Employee Search"
        />
        <EmployeeTable
          employeesList={this.state.employees}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;

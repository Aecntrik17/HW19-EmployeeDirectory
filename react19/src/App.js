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
  // funstion to generate api call
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
        <EmployeeTable employeesList={this.state.employees} />
      </div>
    );
  }
}

export default App;

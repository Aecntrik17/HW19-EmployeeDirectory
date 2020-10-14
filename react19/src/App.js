import React from "react";
import "./App.css";
import API from "./utils/API";
import EmployeeTable from "./components/EmployeeTable";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
  };
  // will run as soon as the page loads, but will only run once. 
  componentDidMount() {
    // calling the function with the api route
    API.getRandomEmployee()
    // sending the response fromt the api call to the state
      .then((res) => {
        console.log(res);
        // setting employee state with the response from the api call 
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }
  // taking whatever is in the input box and saving it to search state
  handleInputChange = (event) => {
    // the state will update with each search performed
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
// provides for other files to access the App
export default App;

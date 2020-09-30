import React from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import EmployeeTable from "./components/EmployeeTable";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getRandomEmployee()
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <div> Employee table </div>;
  }
}

export default App;

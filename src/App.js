import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import API from "./utils/API";


class App extends Component {
  state = {
    presortEmployees: [],
    ascendNameEmployees: [],
    ascendDobEmployees: [],
    descendNameEmployees: [],
    descendDobEmployees: []
  }

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        // this.setState is a JSON objest
        this.setState(
          {
            presortEmployees: this.presort(res)
            ,
            ascendNameEmployees: this.namesortAsc(res)
            ,
            descendNameEmployees: this.namesortDesc(res)
            ,
            ascendDobEmployees: this.dobsortAsc(res)
            ,
            descendDobEmployees: this.dobsortDesc(res)
          }
        )
      })
      .catch(err => console.log(err));
  };

  presort = ((input) => {
    const data = input;
    let employees = data.sort((a, b) => {
      return a.name > b.name ? 1 : (a.name < b.name ? -1 : 0);
    });
    employees = employees.map(employee => {
      return {
        name: employee.name,
        picture: employee.picture,
        phone: employee.phone,
        email: employee.email,
        dob: employee.dob,
        compareDob: employee.compareDob,
        age: employee.dob.age,
        alphaOrder: employee.alphaOrder,
        key: employee.key
      }
    });
    return employees;
  });

  namesortAsc = ((input) => {
    const data = input;
    let employees = data.sort((a, b) => {
      return a.name > b.name ? 1 : (a.name < b.name ? -1 : 0);
    });
    employees = employees.map(employee => {
      return {
        name: employee.name,
        picture: employee.picture,
        phone: employee.phone,
        email: employee.email,
        dob: employee.dob,
        compareDob: employee.compareDob,
        age: employee.age,
        alphaOrder: employee.alphaOrder,
        key: employee.key
      }
    });
    return employees;
  });

  namesortDesc = ((input) => {
    const data = input;
    let employees = data.sort((a, b) => {
      return a.name < b.name ? 1 : (a.name > b.name ? -1 : 0);
    });
    employees = employees.map(employee => {
      return {
        name: employee.name,
        picture: employee.picture,
        phone: employee.phone,
        email: employee.email,
        dob: employee.dob,
        compareDob: employee.compareDob,
        age: employee.age,
        alphaOrder: employees.alphaOrder,
        key: employee.key
      }
    });
    return employees;
  });

  dobsortAsc = ((input) => {
    const data = input;
    let employees = data.sort((a, b) => {
      return a.compareDob > b.compareDob ? 1 : (a.compareDob < b.compareDob ? -1 : 0);
    });
    employees = employees.map(employee => {
      return {
        name: employee.name,
        picture: employee.picture,
        phone: employee.phone,
        email: employee.email,
        dob: employee.dob,
        compareDob: employee.compareDob,
        age: employee.age,
        alphaOrder: employees.alphaOrder,
        key: employee.key
      }
    });
    return employees;
  });

  dobsortDesc = ((input) => {
    const data = input;
    let employees = data.sort((a, b) => {
      return a.compareDob < b.compareDob ? 1 : (a.compareDob > b.compareDob ? -1 : 0);
    });
    employees = employees.map(employee => {
      return {
        name: employee.name,
        picture: employee.picture,
        phone: employee.phone,
        email: employee.email,
        dob: employee.dob,
        compareDob: employee.compareDob,
        age: employee.age,
        alphaOrder: employee.alphaOrder,
        key: employee.key
      }
    });
    return employees;
  });

  render() {
    console.log(this.state);
    return (
      <div>
        <Wrapper>
          <Header />
          <SearchForm />
          {/* <EmployeeList presortEmployees={this.state.presortEmployees} /> */}
          <EmployeeList presortEmployees={this.state.presortEmployees} ascendNameEmployees={this.state.ascendNameEmployees} ascendDobEmployees={this.state.ascendDobEmployees} descendNameEmployees={this.state.descendNameEmployees} descendDobEmployees={this.state.descendDobEmployees} />
          <Footer />
        </Wrapper>
      </div >
    )
  }
}

export default App;





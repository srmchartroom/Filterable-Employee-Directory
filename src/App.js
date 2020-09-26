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
        this.setState({
          presortEmployees: res.data.results,
          ascendNameEmployees: res.data.results.sort((a, b) => {
            return ((a.name.last < b.name.last) ? 1 : ((a.name.last > b.name.last) ? -1 : 0));
          }),
          ascendDobEmployees: res.data.results.sort((a, b) => {
            return ((a.dob < b.dob) ? 1 : ((a.dob > b.dob) ? -1 : 0));
          }),
          descendNameEmployees: res.data.results.sort((a, b) => {
            return ((a.name.last > b.name.last) ? 1 : ((a.name.last < b.name.last) ? -1 : 0));
          }),
          descendDobEmployees: res.data.results.sort((a, b) => {
            return ((a.dob > b.dob) ? 1 : ((a.dob < b.dob) ? -1 : 0));
          })
        })
      })
      .catch(err => console.log(err));
  };


  render() {
    console.log(this.state);
    return (
      <div>
        <Wrapper>
          <Header />
          <SearchForm />
          <EmployeeList presortEmployees={this.state.presortEmployees} ascendNameEmployees={this.state.ascendNameEmployees} ascendDobEmployees={this.state.ascendDobEmployees} descendNameEmployees={this.state.descendNameEmployees} descendDobEmployees={this.state.descendDobEmployees} />
          <Footer />
        </Wrapper>
      </div >
    )
  }
}


export default App;

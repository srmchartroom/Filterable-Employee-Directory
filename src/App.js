import React, { Component } from "react";
import Page from "./components/Page";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // state = {
  //   // Setting this.state.employee to the employees returned json array from the API
  //   employees
  // };

  // Map over this.state.employees and render an EmployeeRow component for each employee object
  render() {
    return (
      <Wrapper>
        <Header />
        <SearchForm />
        <Page />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;

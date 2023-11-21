import React, { Component } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Text from "./Text";
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <div className="section_container"  >
          <Section
            title="Home"
            subtitle={Text}
            dark={true}
            id="home"
          />
          <Section
            title="About"
            subtitle={Text}
            dark={false}
            id="about"
          />
          <Section
            title="Services"
            subtitle={Text}
            dark={true}
            id="services"
          />
          <Section
            title="Contact"
            subtitle={Text}
            dark={false}
            id="contact"
          />
         
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

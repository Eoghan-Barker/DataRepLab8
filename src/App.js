import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  // Render must be defined when you inherit from react.component
  render() {
    return (
      <Router>
        {/* Everything inside return is written in JSX not JS */}
        <div className="App">
          {/*Bootstrap Blue Navbar using react-bootstrap imports */}
          {/* Changes url when clicked, this can be used with routing to swap in components */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* show different component based on url (client side routing using react-router-dom)*/}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/read" element={<Header />} />
            <Route path="/create" element={<Footer />} />
          </Routes>

          {/* Header, Content and Footer are all compenents that have been created as a class and imported */}
          {/* <Header />
        <Content></Content>
        <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;


import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from "react-router-dom"
import Hotellist from './hotel/Hotellist';
import Hotelreg from "./hotel/Hotelreg"
import Additem from "./menu/Additem"
import Viewitem from "./menu/Viewitem"
// import User from './hotel/test.js/test';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Zomato</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item > <Nav.Link> <Link to="/Hotellist"> Hotel List </Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link > <Link to="/Hotelreg"> Hotel Registration </Link></Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link> <Link to="/Additem"> Menu Registration </Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link> <Link to="/Viewitem"> Menu List </Link></Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link> <Link to="/test"> test </Link></Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/Hotellist" element={< Hotellist />} />
        <Route path="/Hotelreg" element={< Hotelreg />} />
        <Route path="/Additem" element={< Additem />} />
        <Route path="/Viewitem" element={< Viewitem />} />
        {/* <Route path="/test" element={< User />} /> */}
      </Routes>
    </>
  );
}

export default App;

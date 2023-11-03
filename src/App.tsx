import mernLogo from "/mern-1.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
    <header>
      <div className="d-flex justify-content-center py-2 mt-2 mb-5">
        <span className="d-flex justify-content-center align-items-center">
          <img src={mernLogo} className="logo fs-4 p-0 m-0" alt="MERN logo" />
          <h1 className="title fs-1 text-white p-0 mt-5 mb-5 ms-2">ALAN CHIBLISCO</h1>
        </span>
      </div>
      
      <Navbar bg="dark" data-bs-theme="dark" className="">
        <Container className="d-flex justify-content-center">          
          <Nav className="">
            <Nav.Link href="#home" className="title fw-bolder">Home</Nav.Link>
            <Nav.Link href="#features"className="title fw-bolder">Features</Nav.Link>
            <Nav.Link href="#pricing"className="title fw-bolder">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      </header>
      <main>

      </main>
    </>
  );
}

export default App;

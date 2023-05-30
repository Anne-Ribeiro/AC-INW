import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavProjeto() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Joe Sandoe Books</Navbar.Brand>
          <Nav className="py-2 me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavProjeto;
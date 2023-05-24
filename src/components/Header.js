import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" style={{position:'fixed', zIndex:'99', background:'white', width:'100%', height:'50px'}} expand="lg">
      <Container>
        <Navbar.Brand style={{fontFamily:'fantasy', fontSize:'24px'}} >Innoura Tech</Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default Header;
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarrosselSobre() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/15811858/pexels-photo-15811858/free-photo-of-livraria-cidade-meio-urbano-idosos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Joe Sandoe Books</h3>
          <p>O melhor lugar para se comprar livros, mais de 40 anos de excelencia!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  );
}

export default CarrosselSobre;
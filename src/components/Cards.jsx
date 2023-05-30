import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function Cards() {
  const dados = [
    {
      titulo:'Biografias',
      descricao:'Biografias de diversas personalidades e intelectuais',
      foto:'https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Promocionais',
      descricao:'Livros que entraram em promoção nesse mês!',
      foto:'https://images.pexels.com/photos/13159182/pexels-photo-13159182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Romances',
      descricao:'Romances clássicos e jovens para todos os públicos!',
      foto:'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, descricao, foto}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={foto}/>
          <Card.Body>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text>{descricao}</Card.Text>
            <Button className='botao'>Visualizar</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>
    
    //return(
    // <CardGroup>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/5669635/pexels-photo-5669635.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Outono</Card.Title>
    //       <Card.Text>
    //       Venha conhecer a nossa nova coleção de Outono!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <br/>
    //   <br/>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/9769852/pexels-photo-9769852.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Verão</Card.Title>
    //       <Card.Text>
    //       Venha conhecer a nossa nova coleção de Verão!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <br/>
    //   <br/>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Inverno</Card.Title>
    //       <Card.Text>
    //         Venha conhecer a nossa nova coleção de Inverno!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>
    //);
  );
}

export default Cards;
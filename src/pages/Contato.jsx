import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';


function Contato() {
   return (
       <>
       <div>
        <NavProjeto/>
          <br/>
          <h1>
            Fale Conosco!
          </h1>
          <br/>
          <br/>
          
          <br />
          <h2>
            Telefone: 4321-0987
          </h2>
          <br/>
          <h2>
            E-mail: johnsandoebooks@gmail.com
          </h2>
          <br/>
          <h2>
            Endereço: Rua John Sandoe, Bairro da Cultura - Sp.
          </h2>
          <br/>
          <br />
         <br />
         <br />
          <Footer/>
          </div>
        </>
       )
   }
  
  export default Contato
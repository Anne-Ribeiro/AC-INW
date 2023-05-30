import Carrossel from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <Carrossel/>
          <br/>
          <Cards/>
          <br/>
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home
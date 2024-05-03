import'./footer.css';
import { Link} from 'react-router-dom';

export  function Footer() {
  return (
    <footer class="footer">

            <h4 class="footer-text">Autor: Carlos Eduardo</h4>
            <Link className='footer-link' to={'/'}>Voltar para o menu de receitas da tia Maria</Link>
    
    </footer>
  )
}

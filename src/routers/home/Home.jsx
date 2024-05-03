import {  Link } from "react-router-dom";
import'./home.css';


export function Home() {

  return (

    <div>
            <header className="header">

                <h1 className="title">Livro de receitas da tia Maria</h1>

                <p className="cover-text">Este livro foi criado com receitas reais no intuito de exercitar o aprendizado em programação,
                    ele é um ingrediente de uma grande receita que estou preparando, um passo a passo até alcancar 
                    o meu objetivo que é me torna um programador. 
                </p>

            </header>

            <main className="container-primary">


                <div className="List-recipes">
                    
                    <h3 className="list-title">Lista de receitas:</h3>
                    
                    <ul className="item">

                        <li className="items"> 
                        <Link className="list-link" to={'strogonoffDeFrango'}>Strogonoff de Frango</Link>
                        </li>

                        <li className="items"> 
                        <Link className="list-link" to={'escondidinhoDeCharque'}>Escondidinho de charque</Link>
                        </li>

                        <li className="items"> 
                        <Link className="list-link" to={'lasanhaDeCarneMoida'}>Lasanha de Carne Moida</Link>
                        </li>

                        <li className="items"> 
                        <Link className="list-link" to={'pizzaDePaoDeForma'}>Pizza de Pão de Forma</Link>
                        </li>

                        <li className="items"> 
                        <Link className="list-link" to={'enroladinhoDeSalsicha'}>Enroladinho de Salsicha</Link>
                        </li>

                    </ul>
                        
                </div>

                <img className="cover-img" src="./imagens/capa.jpg" alt="img de capa"  />
            
            </main>
      
    </div> 
    
)}

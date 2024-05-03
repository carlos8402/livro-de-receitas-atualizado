

export function LasanhaDeCarneMoida() {
  return (

    <div>

         <header className="header-recipes">
            <h1 className="recipes-title">Lasanha de carne moída</h1>
            <p className="recipes-text">Uma receita deliciosa e fácil de preparar</p>
         </header>
          <main>

              <section className="container-1">

                  <div className="ingredients">

                      <h3 className="ingredientes-title">Igredientes (15 Porções)</h3>

                      <table className="ingredientes-table">
                          <tr>
                              <th className="table-title1">Quant</th> <th className="table-title2">Igredientes:</th> 
                          </tr>
                          <tr>
                              <td className="table-quant">500g</td><td className="table-ingredient">de massa de lasanha</td>
                          </tr>
                          <tr>
                              <td className="table-quant">2</td><td className="table-ingredient">caixas de creme de leite</td>
                          </tr>
                              <td className="table-quant">500g</td><td className="table-ingredient"> de mussarela</td>
                          <tr>
                              <td className="table-quant">3</td><td className="table-ingredient">colheres de farinha de trigo</td>
                          </tr>
                              <td className="table-quant">2</td><td className="table-ingredient">copos de leite</td>
                          <tr>
                              <td className="table-quant">3</td><td className="table-ingredient">colheres de óleo</td>
                          </tr>
                              <td className="table-quant">3</td><td className="table-ingredient">dentes de alho amassados</td>
                          <tr>
                              <td className="table-quant">500g</td><td className="table-ingredient">de carne moída</td>
                          </tr>
                              <td className="table-quant">3</td><td className="table-ingredient">colheres de manteiga</td>
                          <tr>
                              <td className="table-quant">500g</td><td className="table-ingredient">de presunto</td>
                          </tr>
                          <tr>
                              <td className="table-quant">add</td><td className="table-ingredient">sal a gosto</td>
                          </tr>
                          <tr>
                              <td className="table-quant">1</td><td className="table-ingredient">cebola ralada</td>
                          </tr>
                          <tr>
                              <td className="table-quant">1</td><td className="table-ingredient">caixa de molho de tomate</td>
                          </tr>
                          <tr>
                              <td className="table-quant">1</td><td className="table-ingredient">pacote de queijo ralado</td>
                          </tr>
                      </table>

                  </div>

                    <img className="recipes-img" src="imagens\lasanha.jpg" alt="" width={'600px'} height={'auto'} />

              </section>

              <section className="container-2">

                  <h3 className="preparation-title">Modo de Preparo:</h3>

                  <ul className="preparation-list">

                      <li className="preparation-items"><span className="num-items">1</span><span className="span" > Lasanha: </span>
                          Cozinhe a massa segundo as orientações do fabricante, despeje em um refratário com água gelada 
                          para não grudar e reserve.</li>

                      <li className="preparation-items"><span className="num-items">2</span><span className="span">  Molho à bolonhesa:</span>
                          Refogue o alho, a cebola, a carne moída, o molho de tomate, deixe cozinhar por 3 minutos e reserve.</li>

                      <li className="preparation-items"><span className="num-items">3</span><span className="span">  Molho branco:</span>
                          Derreta a margarina, coloque as 3 colheres de farinha de trigo e mexa.</li>

                      <li className="preparation-items"><span className="num-items">4</span>Despeje o leite aos poucos e continue mexendo.</li>

                      <li className="preparation-items">Por último, coloque o creme de leite, mexa por 1 minuto e desligue o fogo.</li>

                      <li className="preparation-items"><span className="num-items">5</span><span className="span"> Montagem:</span>
                          Despeje uma parte do molho à bolonhesa em um refratário, a metade da massa, a metade do presunto,
                          a metade da mussarela, todo o molho branco e o restante da massa..</li>

                      <li className="preparation-items"><span className="num-items">6</span>Repita as camadas até a borda do recipiente.</li>

                      <li className="preparation-items"><span className="num-items">7</span>Finalize com o queijo ralado e leve ao forno alto (220° C), preaquecido, por cerca de 20 minutos.</li>
                  </ul>
                
              </section>
              
          </main>
          
    
      
    </div>
  )
}

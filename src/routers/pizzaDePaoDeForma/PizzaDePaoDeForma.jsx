

export function PizzaDePaoDeForma() {
  return (
    <div>
          <header className="header-recipes">
              <h1 className="recipes-title">Pizza de pão de forma</h1>
              <p className="recipes-text">Uma receita deliciosa e fácil de preparar</p>
         </header>

          <main>

              <section className="container-1">

                  <div className="ingredients">
                          
                      <h3 className="ingredientes-title">Igredientes (15 Porções)</h3>

                      <table className="ingredientes-table">
                          <tr>
                              <th className="table-title1">Quant</th><th className="table-title2">Igredientes:</th> 
                          </tr>
                          <tr>
                              <td className="table-quant">2</td><td className="table-ingredient">tomates</td>
                          </tr>
                          <tr>
                              <td className="table-quant">4</td><td className="table-ingredient">dentes de alho</td>
                          </tr>
                              <td className="table-quant">add</td><td className="table-ingredient">Sal a gosto</td>
                          <tr>
                              <td className="table-quant">1</td><td className="table-ingredient">pacote de pão de forma</td>
                          </tr>
                              <td className="table-quant">200g</td><td className="table-ingredient">de queijo mussarela</td>
                          <tr>
                              <td className="table-quant">1</td><td className="table-ingredient">cebola</td>
                          </tr>
                              <td className="table-quant">add</td><td className="table-ingredient">Orégano a gosto</td>
                          <tr>
                              <td className="table-quant">add</td><td className="table-ingredient">Azeite</td>
                          </tr>
                              <td className="table-quant">200g</td><td className="table-ingredient">de presunto</td>
                          
              
                      </table>

                  </div>

                    <img className="recipes-img" src="imagens\paoPizza.webp" alt="" width={'600px'} height={'auto'} />

              </section>

              <section className="container-2">

                  <h3 className="preparation-title">Modo de Preparo:</h3>

                  <ul className="preparation-list">
                      <li className="preparation-items"><span className="num-items">1</span>Refogue o alho juntamente com a cebola no azeite</li>
                      <li className="preparation-items"><span className="num-items">2</span>A seguir, coloque o tomate e o sal até formar um molho cremoso. Reserve.</li>
                      <li className="preparation-items"><span className="num-items">3</span>Coloque os pães numa assadeira, jogue todo o molho em cima dos pães e acrescente o presunto por cima deste molho.</li>
                      <li className="preparation-items"><span className="num-items">4</span>Cubra com bastante queijo e regue com orégano e azeite.</li>
                      <li className="preparation-items"><span className="num-items">5</span>Coloque a assadeira no forno pré-aquecido.</li>
                      <li className="preparation-items"><span className="num-items">6</span>Assim que o queijo derreter estará pronta a pizza.</li>
                
                  </ul>
              </section>
          </main>

    </div>
  )
}

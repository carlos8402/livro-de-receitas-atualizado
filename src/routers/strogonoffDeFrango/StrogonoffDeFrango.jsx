

export function StrogonoffDeFrango() {
  return (

    <div>
         <header className="header-recipes">
            <h1 className="recipes-title">Strogonoff de Frango</h1>
            <p className="recipes-text">Uma receita deliciosa e fácil de preparar</p>
         </header>

            <main>

                <section className="container-1">

                    <div className="ingredients">

                            <h3 className="ingredientes-title">Ingredientes (10 Porções)</h3>

                            <table className="ingredientes-table">
                                <tr>
                                    <th className="table-title1">Quant:</th> <th className="table-title2">Igredientes:</th> 
                                </tr>
                                <tr>
                                    <td className="table-quant">3</td><td className="table-ingredient">Peitos de frango cortados em cubo</td>
                                </tr>
                                    <td className="table-quant">1</td><td className="table-ingredient">Dente de alho picado</td>
                                <tr>
                                    <td className="table-quant">add</td><td className="table-ingredient">Sal a gosto</td>
                                </tr>
                                    <td className="table-quant">add</td><td className="table-ingredient">Pimenta do reino</td>
                                <tr>
                                    <td className="table-quant">1</td><td className="table-ingredient">Cebola picada</td>
                                </tr>
                                    <td className="table-quant">2</td><td className="table-ingredient">Colheres de maionese</td>
                                <tr>
                                    <td className="table-quant">1/2</td><td className="table-ingredient">Copo de ketchup</td>
                                </tr>
                                    <td className="table-quant">1/3</td><td className="table-ingredient">Copo de mostarda</td>
                                <tr>
                                    <td className="table-quant">1</td><td className="table-ingredient">Copo de cogumelos</td>
                                </tr>
                                    <td className="table-quant">1</td><td className="table-ingredient">Copo de creme de leite</td>
                                <tr>
                                    <td className="table-quant">add</td><td className="table-ingredient">Batata palha</td>
                                </tr>
                            </table>

                    </div>

                      <img className="recipes-img" src="imagens\strogonoff.jpg" alt=""  width={'600px'} height={'auto'}/>

                </section>

                <section className="container-2">

                        <h3 className="preparation-title">Modo de Preparo:</h3>

                        <ul className="preparation-list">

                            <li className="preparation-items"><span className="num-items">1</span>Em uma panela, misture o frango, o alho, a maionese, o sal e a pimenta.</li>
                            <li className="preparation-items"><span className="num-items">2</span>Em uma frigideira grande, derreta a manteiga e doure a cebola.</li>
                            <li className="preparation-items"><span className="num-items">3</span>Junte o frango temperado até que esteja dourado.</li>
                            <li className="preparation-items"><span className="num-items">4</span>Adicione os cogumelos, o ketchup e a mostarda.</li>
                            <li className="preparation-items"><span className="num-items">5</span>Incorpore o creme de leite e retire do fogo antes de ferver.</li>
                            <li className="preparation-items"><span className="num-items">6</span>Sirva com arroz branco e batata palha.</li>
                        </ul>
                </section>
                
            </main>
      
    </div>
  )
}

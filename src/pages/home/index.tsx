import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"

import sytles from './home.module.css'
import Card_Produto from "@/components/card-produto/card_produto"
import Lista_Produto from "@/components/lista-produto/lista_produto"

const Home = () => {
    return (
        <>
            <Header/>
            <main id={sytles.main}>
                <section id={sytles.banner}>
                    <h1>BEM-VINDO AO VH BURGUER</h1>
                    <img src="/imgs/foto_de_hamburgueres.png" alt="Três hambúrgueres, um ao lado do outro"/>
                    <div id={sytles.botoes}>
                        <button>Chamar atendente</button>
                        <a href="">Ver cardápio</a>
                    </div>
                </section>
                <section className={sytles.destaques} id="destaques">
                        <div className={sytles.ajustarTexto}>
                            <img src="/imgs/mais_pedidos.png" alt="" />
                            <div className={sytles.texto_sobreposto1}>Os queridinhos da galera</div>
                            <div className={sytles.texto_sobreposto2}>MAIS PEDIDOS</div>
                        </div>
                        <div id={sytles.alinhaImagem}>
                            <div className={sytles.ajustarTexto}>
                                <img src="/imgs/muito_bacon.png" alt="" />
                                <div className={sytles.texto_sobreposto_direita1}>Lanches com</div>
                                <div className={sytles.texto_sobreposto_direita2}>MUITO BACON</div>
                            </div>
                            <div className={sytles.ajustarTexto}>
                                <img src="/imgs/super_combos.png" alt="" />
                                <div className={sytles.texto_sobreposto_direita1}>Se tiver com muita fome</div>
                                <div className={sytles.texto_sobreposto_direita2}>SUPER COMBOS</div>
                            </div>
                        </div>
                </section>
                <section className={sytles.cardapio} id="cardapio">
                    <h2>CARDÁPIO</h2>
                    {/* CHAMAR COMPONENTE DA LISTA */}
                    <Lista_Produto/>
                </section>
                <section className={sytles.unidades} id="unidades">
                    <p id={sytles.titulo}>Nossas Unidades</p>
                    <ul>
                        <li>Centro – Av. Aurora, 742</li>
                        <li>Jardim – Av. das Palmeiras, 1280</li>
                        <li>Norte – Av. Horizonte, 305</li>
                        <li>Sul – Av. Nova Esperança, 910</li>
                    </ul>
                </section>
           </main>
           <Footer/>
        </>
    )
}

export default Home
import './styles/Projects.css'
import clima from '../assets/clima.png'
import users from '../assets/users.png'
import ecommerceReact from '../assets/ecommerceReact.png'
import pokedex from '../assets/pokedex.png'
import rick from '../assets/rick.png'
import ecommerceVanilla from '../assets/ecommerceVanilla.png'
const Projects = () => {
  return (
    <section id="portfolio" className="portfolio">
        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
                <a href='https://timely-pithivier-c21f77.netlify.app/' target='_blank' className="proyecto">
                    <img src={clima} alt=""/>
                    <div className="overlay">
                        <h3>Api Clima</h3>
                        <p>React</p>
                    </div>
                </a>
                <a href='https://inquisitive-donut-734d93.netlify.app/' target='_blank' className="proyecto">
                    <img src={users} alt=""/>
                    <div className="overlay">
                        <h3>Crud-Users</h3>
                        <p>React</p>
                    </div>
                </a>
                <a href='https://leafy-cranachan-d1e61a.netlify.app/' target='_blank' className="proyecto">
                    <img src={ecommerceReact} alt=""/>
                    <div className="overlay">
                        <h3>E-Commerce</h3>
                        <p>React-Redux</p>
                    </div>
                </a>
                <a href='https://timely-nasturtium-1de6f6.netlify.app/' target='_blank' className="proyecto">
                    <img src={pokedex} alt=""/>
                    <div className="overlay">
                        <h3>Pokedex</h3>
                        <p>Redux</p>
                    </div>
                </a>
                <a href='https://fanciful-kitten-910ad2.netlify.app/' target='_blank' className="proyecto">
                    <img src={rick} alt=""/>
                    <div className="overlay">
                        <h3>Rick and Morty Api</h3>
                        <p>React</p>
                    </div>
                </a>
                <a href='https://aquamarine-narwhal-beb11a.netlify.app/' target='_blank' className="proyecto">
                    <img src={ecommerceVanilla} alt=""/>
                    <div className="overlay">
                        <h3>E-Commerce Vanilla</h3>
                        <p>Javascript</p>
                    </div>
                </a>
              
            </div>
        </div>
    </section>
  )
}

export default Projects

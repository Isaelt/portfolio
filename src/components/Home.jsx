import './styles/Home.css'
import whats from '../assets/WhatsApp.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
const Home = () => {
    const [text] = useTypewriter({
        words:['Electronic Engineer', 'Front-end developer', 'Back-end developer', 'Full-Stack developer'],
        loop:{},
    });
  return (
    <section id="inicio" className="inicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
            </div>
            <h1>Isael Terrones</h1>
            <div>
            <h2>{text}<Cursor/></h2>
            </div>
            
            <div className="redes">
                <a href="https://www.linkedin.com/in/isael-terrones-rayo/" target='_blank'><i className='bx bxl-linkedin' ></i></a>
                <a href="https://wa.me/524432649356" target='_blank'><i className='bx bxl-whatsapp' ></i></a>
                <a href="https://github.com/Isaelt" target='_blank'><i className='bx bxl-github' ></i></a>
                <a href="#contacto"><i className='bx bx-envelope' ></i></a>
            </div>
        </div>
        <a className='whats__fixed' href="https://wa.me/524432649356" target='_blank'>
            <img src={whats} className='whats__img' alt="" />
        </a>
    </section>
  )
}

export default Home

import './styles/AboutMe.css'
import cv from '../utils/Curriculum-esp.pdf'
const AboutMe = () => {
  return (
    <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>About Me</h2>
            <p><span>Hi, my name is Isael Terrones.</span> I'm a graduate of the "Instituto Tecnologico de Morelia" in Morelia, Michoacan. 
            I took a course in Academlo for web developer. <br /> I am very serious when we talk about job, I'd like to learn more about programming. 
            I love to be responsable and be proactive.</p>

            <div className="fila">
                {/* <!-- datos personales --> */}
                <div className="col">
                    <h3>Information</h3>
                    <ul>
                        <li>
                            <strong>Birthday</strong>
                            08/28/1990
                        </li>
                        <li>
                            <strong>Cellphone</strong>
                            +524432649356
                        </li>
                        <li>
                            <strong>Email</strong>
                            i.terayo@gmail.com
                        </li>
                        <li>
                            <strong>Adress</strong>
                            Morelia, Michoacan. Mex.
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>FREELANCE</span>
                        </li>
                    </ul>
                </div>

                {/* <!-- intereses --> */}
                <div className="col">
                    <h3>Hobbies</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>V-GAMES</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>MUSIC</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-plane"></i>
                            <span>TRAVEL</span>
                        </div>
                        <div className="interes">
                            <i className="fa-brands fa-apple"></i>
                            <span>GYM</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span>SPORTS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-book"></i>
                            <span>BOOKS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-car"></i>
                            <span>MOVIES</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-camera"></i>
                            <span>PHOTOS</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <a href={cv} target='_blank'>
                Download CV 
                <span className="overlay"></span>
            </a>
        </div>
    </section>
  )
}

export default AboutMe


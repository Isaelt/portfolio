import './styles/Skills.css'
import jslogo from '../assets/jslogo.png'
import htmllogo from '../assets/htmllogo.png'
import csslogo from '../assets/csslogo.png'
import reactlogo from '../assets/reactlog.png'
import clogo from '../assets/clogo.png'
import gitlogo from '../assets/gitlogo.png'
import pythonlogo from '../assets/pythonlogo.png'
import reduxlogo from '../assets/reduxlogo.png'
const Skills = () => {
  return (
    <section className="skills" id="skills">
    <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
            {/* <!-- Technical Skill --> */}
            <div className="col">
                <div className="skill">
                    <span>Javascript</span>
                     <img src={jslogo} alt="" className='logo'/>
                </div>
                <div className="skill">
                    <span>Html</span>
                    <img src={htmllogo} alt="" className='logo'/>
                </div>
                <div className="skill">
                    <span>Css</span>
                    <img src={csslogo} alt="" className='logo'/>
                </div>
                <div className="skill">
                    <span>React</span>
                    <img src={reactlogo} alt="" className='logo'/>
                </div>
            </div>
            <div className="col">
                <div className="skill">
                    <span>GitHub</span>
                    <img src={gitlogo} alt="" className='logo'/>
                </div>
                <div className="skill">
                    <span>Python</span>
                    <img src={pythonlogo} alt="" className='logo'/>
                </div>
                <div className="skill">
                    <span>C#</span>
                    <img src={clogo} alt="" className='logo'/>
                </div>
                <div className="skill">
                    <span>Redux</span>
                    <img src={reduxlogo} alt="" className='logo'/>
                </div> 
            </div>
        </div>
    </div>
</section>

  )
}

export default Skills

import './styles/Contact.css'
const Contact = () => {
  return (
    <section id="contacto" className="contacto">
    <div className="contenido-seccion">
        <h2>CONTACT</h2>
        <div className="fila">
            <form className="col" action="https://formsubmit.co/i.terayo@gmail.com" method="POST" target='_blank'>
                <input type="text" name='name' placeholder="Your Name" required/>
                <input type="tel" name='number' placeholder="Cellphone Number" required/>
                <input type="email" name='email' placeholder="Email Addres" required/>
                <input type="text" name='subject' placeholder="subject" required/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                <button type='submit'>
                    Send Message
                    <span className="overlay"></span>
                </button>
            </form>
        </div>
    </div>
</section>
  )
}

export default Contact

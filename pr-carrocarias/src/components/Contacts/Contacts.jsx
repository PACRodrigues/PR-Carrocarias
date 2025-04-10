import React from 'react'
import './Contacts.css'
import msg_icon from '../../assets/msg-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contacts = () => {

    //copied code from Web3Forms -> Docs -> JS Framworks -> React JS -> Simple React Contact Form
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("A enviar....");
        const formData = new FormData(event.target);

        //here i pasted my access key sent to my email
        formData.append("access_key", "f0910367-cd79-4f1b-bbe3-79e4d43683cc");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        console.log("Form Submitted Successfully", data);
        setResult(data.message);
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envie-me uma mensagem <img src={msg_icon} alt="" /></h3>
        <p>Sinta-se à vontade para me contactar através do Formulário ou através dos contactos indicados abaixo.</p>
        <ul>
            <li> <img src={location_icon} alt="" />Rua Padre Francisco Marques, nº56, 2ºDto, Ferreiros 4700-120</li>
            <li><img src={mail_icon} alt="" />joaopmrodrigues@gmail.com</li>
            <li><img src={phone_icon} alt="" />+351 966 611 966</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Nome</label>
            <input type="text" name='name' placeholder='Insere o teu nome' required/>
            <label >Email</label>
            <input type="email" name='email' placeholder='Insere o teu Email' required/>
            <label >Mensagem</label>
            <textarea name="message" rows="6" placeholder='Insere a tua Mensagem' required></textarea>
            <button type='submit' className='btn dark-btn'>Submeter <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contacts

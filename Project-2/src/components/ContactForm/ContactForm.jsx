import Button from '../Button/Button'
import './ContactForm.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import {useState} from 'react';



const ContactForm = () => {
    const [name, setName] = useState("Default Name");
    const [email, setEmail] = useState("default@gmail.com");
    const [text, setText] = useState("Default Text");



  const onCallClick = () => {
    console.log('I clicked Call')
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className='contact-section'>
        <div className='contact-form'>
            <div className="top-btn">
                <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize={"24px"}/>}/>
                <Button 
                    onClick = {onCallClick}
                    text="CALL" 
                    icon={<IoMdCall fontSize={"24px"}/>}
                />
            </div>  
            <Button 
                isOutline = {true}
                text="VIA EMAIL FORM" 
                icon={<HiMail fontSize={"24px"}/>}
            /> 
            <form onSubmit={onSubmitClick}>
                <div className="form-controller">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className="form-controller">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email"/>
                </div>
            
                <div className="form-controller">
                    <label htmlFor="text">TEXT</label>
                    <textarea  name="text" rows={10}/>
                </div>
                <div className="submit-btn">
                    <Button 
                        text="SUBMIT" 
                    />
                </div>
            </form>

            <div>{name + "   " + email + "   " + text} </div>
        </div>
        <div className='contact-image'>
            <img src="/images/contact.svg" alt="" />
        </div>
    </section>

  )
}

export default ContactForm
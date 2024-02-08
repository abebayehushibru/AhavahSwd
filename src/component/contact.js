import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact(props) {
 const  [notify,setNotify]=useState()
//  ["Your message has sent","Your message has not sent"],colors:["green","red"]}
const  [isvisible,setisvisible]=useState(true)

 const  [colors,setColors]=useState()
    
    const [name, setName] = useState()
    const [Phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [Subject, setSubject] = useState()
    const [message, semessage] = useState()
    const [Address, setAddress] = useState()
    
  
    const resetForm = () => {
      setName("")
      setPhone("")
      setSubject("")
      setEmail("")
      semessage("")
      setAddress("")
    }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
   
    e.preventDefault();
    setisvisible(false)
    let errorm=""
   
if (e.target.user_name.value.trim()==""){
  errorm=" please enter full name "
  
}
else if (e.target.user_email.value.trim()==""){
  errorm=" please enter email "
}
else if (e.target.user_phone.value.trim()==""){
  errorm=" Please enter Phone Number "
}
else if (e.target.user_address.value.trim()==""){
  errorm=" please enter Address"
}
else if (e.target.user_subject.value.trim()==""){
  errorm=" please enter Subject"
}
else if (e.target.message.value.trim()==""){
  errorm="please enter Message"
}
if (errorm!==""){
  
  setColors("red")
  setNotify(errorm);
  setisvisible(true)
  
}
else{
  emailjs.sendForm('service_0me9iwe', 'template_0quvy89', form.current, 'mPsq8IDI9mxFMS_Uu')
  .then((result) => {
    setColors("green")
    setNotify("Your message has sent");

    resetForm()
    setisvisible(true)  
  }, (error) => {
      console.log(error.text);
      setColors("red")
      setNotify("Your message has not sent");
      setisvisible(true)
  });
}


  };

  const clearMsg =()=>{
    setNotify("")
  }
 
  return (
    <>
      <div
        className="mainContaire"
        data-aos="fade-up"
        id="contact"
        style={{ marginTop: "80px" }}
        onMouseEnter={props.onMouseEnter("contact")}
      >
        <div className="container">
          <div className="Title">
            <h1>Contact</h1>
            <h3>Contact me</h3>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="formcomponent">
              <div>
                <input type="text" placeholder="Your Name" name="user_name" value={name} onFocus={clearMsg}></input>
                <input type="email" placeholder="Your Email" name="user_email" value={email} onFocus={clearMsg}></input>
                <input type="text" placeholder="Your Phone" name="user_phone" value={Phone} onFocus={clearMsg}></input>
                <input type="text" placeholder="Your Address" name="user_address" value={Address}onFocus={clearMsg} ></input>
              </div>
              <div>
              <input type="text" placeholder="Subject" name="user_subject" value={Subject} onFocus={clearMsg}></input>
                <textarea name="message" placeholder="Your messsage" value={message} onFocus={clearMsg}>

                </textarea>
              </div>
              {
                
              }
              <p style={{color:colors}}>
                {
notify
                }
              </p>
       
              <button type="submit" className="contactme" style={{visibility:isvisible?"visible":"hidden"}}> Send message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;

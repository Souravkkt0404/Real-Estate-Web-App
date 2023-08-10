import React,{useRef} from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8kgtm8', 
    'template_nrsn0wr', 
    form.current, 
    '-K2Bg2sxUPJHRXjPn')
      .then((result) => {
          console.log(result.text);
          console.log("message sent successfully");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div class="grid grid-cols-6 gap-4 p-4 mt-4 bg-gray-100">
  
    <div class="col-span-6 md:col-span-3 bg-white rounded p-4 shadow-md">
    <div className="ml-9">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl font-bold mb-2">Email:</p>
        <p className="text-2sm mb-4">theglobalenterprises@gmail.com.</p>
        <p  className="text-xl font-bold mb-2">Phone: </p>
        <p className="text-2sm mb-4">9844222500, 9844202908</p>
        <p className="text-xl font-bold mb-2">Address: </p>
        <p> Aashiyana, No.16, 5th Main, <br></br>Near Gowri Shankar Temple,<br></br> Suncity Layout, J P Nagar 7th Phase, <br></br>Off Kothanur Main Road,Bangalore - 560076, </p>
        </div>
    </div>


    <div class="col-span-6 md:col-span-3 bg-white rounded shadow-md ">
    
        <form   ref={form} onSubmit={sendEmail} className="mt-0 p-3 ml-9 bg-transparent">
        
            <div class="mb-2">
            
                <input type="text" id="name" name="user_name" placeholder=" Name*" required class="w-full p-2 border rounded"/>
            </div>
            <div class="mb-2">
                <input type="tel" id="mobile" name="mobile" placeholder=" Mobile*" required class="w-full p-2 border rounded"/>
            </div>
            <div class="mb-2">
                <input type="email" id="email" name="email" placeholder=" Email*" required class="w-full p-2 border rounded"/>
            </div>
            <div class="mb-2">
                <input type="text" id="department" name="department" placeholder=" Department*" required class="w-full p-2 border rounded"/>
            </div>
            <div class="mb-2">
                <textarea id="message" name="message" placeholder="Your Message" rows="2" required class="w-full p-2 border rounded"></textarea>
            </div>
            <div class="flex justify-center">
            <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 justify-center ">Send</button>
            </div>
        </form>
    </div>
      
    </div>





  
  )
}

export default Contact

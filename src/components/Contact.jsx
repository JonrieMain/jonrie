//framer motion
import { motion } from 'framer-motion';
// css
import '../css/contact.css';
// react icons
import { MdEmail } from "react-icons/md";


const Contact = () =>{



    return(
        <div className="letsTalk" id="letsTalk">


        <motion.div className="letTalkIn" initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} viewport={{margin: "-200px", once: true}} transition={{duration: 1.1}}>
        <h2 id="letsTalk"><MdEmail/> Contact</h2>
        <p>I'm looking forward to working with you and I hope my portfolio satisfied you. If you're not yet satisfied, you can contact me to learn more about me, and if you are, I'd appreciate it if you did. The following details are how you can get in touch with me. I'll respond as quickly as I can. Thank you </p>
       
        <span>
        <i className="fa-solid fa-phone"> <span> +639561801192</span></i>
        
        <i className="fa-regular fa-envelope"> <span><a href="mailto:jonriemain@gmail.com">jonriemain@gmail.com</a></span></i>

        <i className="fa-solid fa-file cv"><a target="_blank" href="./assets/jonrieCV.pdf"> View & Download CV</a></i>

        <div>
            <a href="https://facebook.com/JonrieMain"><i className="fa-brands fa-square-facebook"></i></a>

        <a href="https://github.com/JonrieMain"><i className="fa-brands fa-square-github"></i></a>

        <a href="https://www.linkedin.com/in/jonrie-badiang-06b60a241/"><i className="fa-brands fa-linkedin"></i></a>

        </div>
    </span>

</motion.div>





        {/* <!-- contact form --> */}
        <motion.form  className="contactForm" action="https://formsubmit.co/ad4e0ff231edc13df9d5c9beef1e68b3" method="POST" initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} viewport={{margin: "-200px", once: true}} transition={{duration: 1.1}}>

            <h1>LET'S HAVE A TALK</h1> 
            <div> 
                <input minLength={3} maxLength={40} placeholder="Full name" name="fullName" type="text" id="fullName" aria-describedby="emailHelp" required={true} /> 
            </div>

            <div> 
               <input minLength={10} maxLength={40} placeholder="Email address" name="email" type="email" id="emailAddress" aria-describedby="emailHelp" required /> 
               </div>
            
            <div> 
                 <input minLength={3} maxLength={40} placeholder="Subject" name="subject" type="text" id="subject" aria-describedby="emailHelp" required /> </div>
            
            <div> 
                <textarea minLength={6} maxLength={50} placeholder="Message" name="message" id="messege" className="form-control" rows={9} required></textarea> 
                </div>
             
             <button id="button" type="submit">Submit</button>
        </motion.form>





    </div>
    )

}
export default Contact;
//framer motion
import { motion } from 'framer-motion';
// framer reusable aos animation
import AOS from './animations/AOS';

// css
import '../css/about.css';

//react icons
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";



import { useEffect } from 'react';
import AboutTestimonials from './AboutTestimonials';


    


const About = ()=>{

useEffect(()=>{

        let myImage = document.querySelector('.myImage');
        myImage.addEventListener('mouseover',()=>myImage.src = '/assets/Jonrie2.jpg')
        myImage.addEventListener('mouseout',()=>myImage.src = '/assets/Jonrie.jpg')
        myImage.addEventListener('click',()=>myImage.src = '/assets/favicon/web-app-manifest-512x512.png')

    },[])







    return(<>

         <div className='allAboutContainer'>


      
    
          {/* // <!-- about --> */}
        <motion.div className="about" {...AOS}>

            <div className="leftAbout">
            <h2 id="about"><FaUser /> Who am i?</h2>
            <p>My name is Jonrie Badiang, and I am a full-stack web developer driven by the challenge of transforming complex conceptual designs into seamless, functional web applications. My expertise lies in building robust websites and evolving them into intuitive, mobile-friendly experiences. Currently, I’m deep-diving into the React.js ecosystem to create dynamic, fast-loading user interfaces.</p>
            </div>

            <div className="rightAbout">
                <img className='myImage' src="/assets/Jonrie.jpg" alt="Jonrie" />
            </div>

        </motion.div>
         {/* // <!-- about end --> */}













         {/*  technologies uses --> */}
        <motion.div className="aboutUses" {...AOS}>
            

            <h2><BsStack /> What are the technologies i use?</h2>

                <div className="frontend">
                    <h3>For frontend</h3>
                    <div>
                    <p>Javascript</p>
                    <p>JQuery</p>
                    <p>HTML 5</p>
                    <p>CSS 3</p>
                    <p>Bootstrap</p>
                    <p>SASS</p>
                    <p>React JS</p>
                    <p>Tailwind CSS</p>
                    <p>DaisyUI</p>
                    <p>Formsubmit</p>
                </div>
                </div>
                <div className="backend">
                    <h3>For backend</h3>
                    <div>
                    <p>PHP</p>
                    <p>MySQL</p>
                    <p>AJAX</p>
                    <p>Rest API</p>
                    <p>Laravel</p>
                </div>
                </div>
                <div className="others">
                    <h3>For version control and others</h3>
                    <div>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Typescript</p>
                    <p>Vercel</p>
                    <p>Bitbucket</p>
                    <p>InfinityFree</p>
                    <p>Netlify</p>
                    <p>AOS</p>
                    <p>Fontawesome</p>
                    <p>Googlefonts</p>
                    <p>GoogleIcons</p>
                    <p>EmailJS</p>
                    <p>SwiperJS</p>
                    <p>VantaJS</p>
                    <p>SweetAlert</p>
                    <p>Google Search Console</p>
                    <p>Xampp</p>
                </div>
                </div>
         </motion.div>

         {/*  technologies uses end --> */}







         {/* certifications */}
  <motion.div className="certifications" {...AOS}>

             <h3><PiCertificate className='certificateIcon'/> Recent Certifications</h3>
    
    <div className="certificates">
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer12.jpg'>
            <h2>Programming</h2>
            <p>Learn Computer Today</p>
        </a>
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer11.jpg'>
            <h2>Web Development</h2>
            <p>Learn Computer Today</p>
        </a>
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer10.jpg'>
            <h2>Git & Github</h2>
            <p>Learn Computer Today</p>
        </a>
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer9.jpg'>
            <h2>Typescript: Taking Javascript to the Next Level</h2>
            <p>PWA Pilipinas</p>
        </a>

       

         <a target='__blank' href='https://jonrie.vercel.app/assets/cer8.jpg'>
            <h2>Information System Students Seminar</h2>
            <p>IIHC Novaliches</p>
        </a>

          <a target='__blank' href='https://jonrie.vercel.app/assets/cer7.jpg'>
            <h2>Creating an Adventure Game with Python Code</h2>
            <p>ReSkills</p>
        </a>
        
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer6.jpg'>
            <h2>Javascript</h2>
            <p>Sololearn</p>
        </a>
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer5.jpg'>
            <h2>CSS</h2>
            <p>Sololearn</p>
        </a>
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer4.jpg'>
            <h2>HTML5</h2>
            <p>Sololearn</p>
        </a>

          <a target='__blank' href='https://jonrie.vercel.app/assets/cer3.jpg'>
            <h2>Const Coding Challenge</h2>
            <p>ConstWardtz Programming Community</p>
        </a>

         <a target='__blank' href='https://jonrie.vercel.app/assets/cer2.jpg'>
            <h2>Coding Game 4th Place</h2>
            <p>Programming Philippines</p>
        </a>

        <a target='__blank' href='https://jonrie.vercel.app/assets/cer1.jpg'>
            <h2>Basic Computer</h2>
            <p>Aim Tech Caloocan</p>
        </a>
        </div>




        </motion.div>
         {/* certifications end */}









{/* experience */}
 <motion.div className="aboutExperience" {...AOS}>
                <h2><FaBriefcase /> How about my experience?</h2>

                    
                <div className="expLevel">
    

                    <div>
                        <small>2018</small>
                        <h3>Junior High School</h3>
                        <h4>Hello World! 👋🏻</h4>
                        <p>Wrote my first line of code.</p>
                    </div>
                    
    
                    <div>
                        <small>June 2020-July 2022</small>
                        <h3>Information Communcation Technology(ICT)</h3>
                        <h4>Trinity Polytechnic College</h4>
                        <p><br /> <a target='_blank' className={"coc"} href="./assets/shsDiploma.jpg">Certificate Of Completion</a></p>
                    </div>
    
                    <div>
                    <small>July 2022-Oct. 2024</small>
                        <h3>BS Information System</h3>
                        <h4>Integrated Innovation and Hospitality College</h4>
                        <p>I finished the first year of the Bachelor of Science in Information Systems (BSIS) program and enrolled in the second year, but I had to quit during the first semester because of financial issues. You can check my <a target='_blank' className={"grades"} href="/assets/1stSem.jpg">1st</a> and <a target='_blank' className={"grades"} href="/assets/2ndSem.jpg">2nd</a> semester grades</p>

                    </div>
                   
                   


                    <span id="current">
                    {/* move this current(span) container to the latest experience. Reverse order */}

                      {/* <div>
                    <small>Oct. 2025-Present</small>
                        <h3>Machine Operator</h3>
                        <h4>Platinum Printing</h4>
                        <p>Operated large-format printing machines to produce high-quality sticker prints. Layouted sticker designs from the computer, ensuring accurate alignment and clean output on sticker paper, and operated cutting plotters to cut sticker designs.</p>
                    </div> */}



                     <div>
                    <small>June 2022-Present</small>
                    <h3>Freelance Full-Stack Web Developer</h3>
                    <h4></h4>
                    <p>Building functional, and user-friendly websites from the ground up. I bridge the gap between complex backend logic and intuitive frontend design to deliver complete digital solutions.</p>
                    </div>


                    </span>
                    {/* move this current(span) container to the latest experience. Reverse order */}
                   
    
                </div>
    









             </motion.div>
             {/* experience end */}











    {/* saysAboutMe */}
 <motion.div className="saysAboutMe" {...AOS}>


                <h2 id="testimonials"><BsFillPeopleFill/> Testimonials & Recommendations</h2>
                
    
                <div id="scroll">

                  
    
                    
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    <AboutTestimonials/>
                    

                

        

    
                </div>
    
             </motion.div>
             {/* saysAboutMe end */}




    
        



    
            
    
    
        </div>

        </>
    );

}
export default About;
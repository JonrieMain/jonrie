// css
import '../css/about.css';

//react icons
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";







// swiper
// swiper module
import { EffectCards, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



// swiper css
import 'swiper/css/effect-cards';
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination.css';
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
        <div className="about"  data-aos="fade-up" data-aos-duration="3000">

            <div className="leftAbout">
            <h2 id="about"><FaUser /> Who am i?</h2>
            <p>My name is Jonrie Badiang, and I am a 
                frontend developer. I enjoy building 
                websites as well as transforming them into
                 mobile and user-friendly applications. 
                Turning conceptual designs into actual 
                web applications is something I enjoy 
                doing. Although my interest is front-end 
                development, I also have back-end 
                development experience.</p>
            </div>

            <div className="rightAbout">
                <img className='myImage' src="/assets/Jonrie.jpg" alt="Jonrie" />
            </div>

        </div>
         {/* // <!-- about end --> */}













         {/*  technologies uses --> */}
        <div className="aboutUses" data-aos="fade-up" data-aos-duration="3000">
            

            <h2 data-aos="fade-right"><BsStack /> What are the technologies i use?</h2>

                <div className="frontend" data-aos="fade-up"
                data-aos-duration="500">
                    <h3>For frontend</h3>
                    <div>
                    <p>Javascript</p>
                    <p>JQuery</p>
                    <p>HTML 5</p>
                    <p>CSS 3</p>
                    <p>Bootstrap</p>
                    <p>SASS</p>
                    <p>React JS</p>
                </div>
                </div>
                <div className="backend" data-aos="fade-up"
                data-aos-duration="500" data-aos-delay="300">
                    <h3>For backend</h3>
                    <div>
                    <p>PHP</p>
                    <p>MySQL</p>
                    <p>AJAX</p>
                </div>
                </div>
                <div className="others" data-aos="fade-up"
                data-aos-duration="500" data-aos-delay="500">
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
                    <p>Formsubmit</p>
                    <p>EmailJS</p>
                    <p>SwiperJS</p>
                    <p>VantaJS</p>
                    <p>SweetAlert</p>
                </div>
                </div>
         </div>

         {/*  technologies uses end --> */}








         {/* certifications */}
  <div className="certifications">

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
         <a target='__blank' href='https://jonrie.vercel.app/assets/cer1.jpg'>
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




        </div>
         {/* certifications end */}









{/* experience */}
 <div className="aboutExperience">
                <h2 data-aos="fade-right"><FaBriefcase /> How about my experience?</h2>

                    
                <div className="expLevel">
    
                    
    
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                        <small>June 2020-July 2022</small>
                        <h3>Senior High School</h3>
                        <h4>Trinity Polytechnic College</h4>
                        <p>Taking and graduating from senior high school with a TVL - Information Communication Technology (ICT) strand <br /><br /> <a target='_blank' className={"coc"} href="./assets/shsDiploma.jpg">Certificate Of Completion</a></p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="300">
                    <small>July 2022-Oct. 2024</small>
                        <h3>College</h3>
                        <h4>Integrated Innovation and Hospitality College</h4>
                        <p>I finished the first year of the Bachelor of Science in Information Systems (BSIS) program and enrolled in the second year, but I had to quit during the first semester because of financial issues. You can check my <a target='_blank' className={"grades"} href="/assets/1stSem.jpg">1st</a> and <a target='_blank' className={"grades"} href="/assets/2ndSem.jpg">2nd</a> semester grades</p>

                    </div>
                   
                    <div data-aos="fade-up" data-aos-duration="300">
                    <small>Dec. 2020-Oct. 2024</small>
                    <h3>STAFF</h3>
                    <h4>DHEELUXE SKIN</h4>
                    <p>Working as a Staff at the DHEELUXE SKIN <br/><br /><em>Working student from 2020 to 2024, senior high school and college.</em></p>
                    </div>

                     <div data-aos="fade-up" data-aos-duration="300">
                    <small>Oct. 2024-Oct. 2025</small>
                    <h3>Sales and Marketing</h3>
                    <h4>D’LUXXE SKINLAB COSMETICS MANUFACTURING CORP.</h4>
                    <p>Working as a Sales and Marketing at the D’LUXXE SKINLAB COSMETICS MANUFACTURING CORP.</p>
                    </div>

                



                      <div data-aos="fade-up" data-aos-duration="300">
                    <small>Oct. 2025-Present</small>
                        <h3>Machine Operator</h3>
                        <h4>Platinum Printing</h4>
                        <p id="current">Operated large-format printing machines to produce high-quality sticker prints. Layouted sticker designs from the computer, ensuring accurate alignment and clean output on sticker paper, and operated cutting plotters to cut sticker designs.</p>
                    </div>

                   
    
                </div>
    









             </div>
             {/* experience end */}











    {/* saysAboutMe */}
 <div className="saysAboutMe">


                <h2 id="testimonials" data-aos="fade-right"><BsFillPeopleFill/> Testimonials & Recommendations</h2>
                
    
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
    
             </div>
             {/* saysAboutMe end */}




    
        



    
            
    
    
        </div>

        </>
    );

}
export default About;
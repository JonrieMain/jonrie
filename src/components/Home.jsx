import { useEffect, useState } from "react";


// css
import "../css/home.css";


// jquery
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js";



// particle config
import ParticlesJSON from "./ParticlesJSON";

// modules and loadFull
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// init
const particleInit = async (main)=>{
    await loadFull(main);
}





const Home = ()=>{

    // bars remove/add class
    const [navClassName, setClassName] = useState('fa-bars');
    
    const setClass = ()=> {
    setClassName(navClassName==='fa-bars'?'fa-close':'fa-bars');
  }
// 
  useEffect(()=>{

    // for links only works if viewport width is less than 875
    if(window.outerWidth <= 875){

        const links = document.querySelectorAll('.links');
        links.forEach(function(link){
        link.addEventListener('click',()=>{
            setClassName('fa-bars');
        });
    });

    }
    
    // for up button it show if scrollY > 0
    window.addEventListener('scroll',()=>window.scrollY>0?document.querySelector('.up').style.left="2%":document.querySelector('.up').style.left="-50rem");


  }, []);
        // check if document is fully loaded before loader disappear
                $(document).ready(()=>{
         
                    
                          setTimeout(()=>{
                            // document.querySelector('.preloader').style.height="110px";
                            // document.querySelector('.preloader').style.width="110px";
                            document.querySelector('.preloader').style.opacity="0";
                
                        document.querySelector('.preloader').style.animation="diamond-out-hesitate 2.5s ease-in-out";


                            // hide
                            setTimeout(()=>{
                                document.querySelector('.preloader').style.left="-100rem";


                                document.body.style.overflow="unset";
                                
                                document.querySelector('.main').style.opacity="1";

                
                                setTimeout(()=>{
                                    document.querySelector('.preloader').style.display="none";
                                },50);
                
                
                
                            },1050);
                
                
                          },1200);
                          
                        
                      

                        //   on scroll ts particle display none

                        $(window).on('scroll',()=>{

                            let homeHeight = $('#home').height();

                            window.scrollY > homeHeight?$('#tsParticles').css('display','none'):$('#tsParticles').css('display','block');

                        });



                      
            })






    return(


       
    <div className="home" id="home">



<Particles id="tsParticles" init={particleInit} options={ParticlesJSON}></Particles>


        {/* <!-- up --> */}
       <a href="#home"><div className="up"></div></a>

    {/* <!-- contact btn --> */}
       <a href="#letsTalk"><i id='contact' className="fa-solid fa-phone"></i></a>


    {/* header */}
        <header id="home">

<i onClick={setClass} id="bars" className={`fa-solid ${navClassName}`}></i>

            <a href="https://jonrie.vercel.app/"><img className="logo" src="/assets/logo.png" alt="logo"/></a>

            <span className={`linksCon ${navClassName}`} id="linksCon">
                <span className="left">
                    <a className="links" href="#about">About me</a>
                    <a className="links" href="#testimonials">Testimonials</a>
                </span>

                <span className="right">
                    <a className="links" href="#myWorks">My works</a>
                    <a className="links" href="#services">Services</a>
                </span>
            </span>

        </header>

        {/* home text  */}
      
        <div className="homeTextCon">
            <div className="subTextCon">
                <span className="iAm">I AM</span>
                <span className="jonrieText">JONRIE</span>
                <span className="aWebDeveloper">A WEB DEVELOPER</span>
            </div>
            <h4>Who specialize in developing websites that are visually appealing and meet the highest standards of accessibility, ensuring inclusivity for all users.</h4>
        </div>


        {/* social links */}
        <div className="socialLinks">
           <a href="https://facebook.com/JonrieMain"><i className="fa-brands fa-square-facebook"></i></a>

            <a href="https://www.instagram.com/jonrieeee/"><i className="fa-brands fa-square-instagram"></i></a>

            <a href="https://github.com/JonrieMain"><i className="fa-brands fa-square-github"></i></a>

            <a href="https://www.linkedin.com/in/jonrie-badiang-06b60a241/"><i className="fa-brands fa-linkedin"></i></a>
            
            <a href="https://www.tiktok.com/@jonrieee"><i className="fa-brands fa-tiktok"></i></a>
        </div>
        


    
        
    </div>
   
    );

}
export default Home;
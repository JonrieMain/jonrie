// css
import '../css/about.css';


// swiper
// swiper module
import { EffectCards, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



// swiper css
import 'swiper/css/effect-cards';
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination.css';







const About = ()=>{

    return(<>

        {/* // <!-- about --> */}
        <div className="about">
            <div className="leftAbout">
            <h2 data-aos="fade-right" id="about">Who am i?</h2>
            <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="500">My name is Jonrie Badiang, and I am a 
                frontend developer. I enjoy building 
                websites as well as transforming them into
                 mobile and user-friendly applications. 
                Turning conceptual designs into actual 
                web applications is something I enjoy 
                doing. Although my interest is front-end 
                development, I also have back-end 
                development experience.</p>
            </div>
            <div className="rightAbout" data-aos="flip-right" data-aos-duration="1000">
                <img src="/assets/jonrie.png" alt="Jonrie" />
            </div>
        </div>
    
    
    
        {/* <!-- services --> */}
        <div className="services">
            <h2 id="services" data-aos="fade-right">What i will do for you?</h2>
            
            <span>
            <div data-aos="fade-up" data-aos-duration="500">
                <i className="fa-solid fa-laptop"></i>
                <h3>Website Designing</h3>
                <p>For the website to have a distinctive style, I do UX/UI design. I can arrange and create it how you like.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                <i className="fa-solid fa-mobile"></i>
                <h3>Mobile friendly/Responsive</h3>
                <p>For compatibility across all platforms, I may create a website that is mobile-friendly.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                <i className="fa-solid fa-server"></i>
                <h3>Backend</h3>
                <p>I can do work server-side using PHP. I can do C.R.U.D. and wild search operations with the MySQL database and other functionalities to make a full-stack application.</p>
            </div>
        </span>
    
        </div>
    
    
    
    
        {/*  technologies uses --> */}
        <div className="aboutUses">
            <h2 data-aos="fade-right">What are the technologies i use?</h2>
            <div className="aboutUsesSub">
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
    
    
             <div className="aboutExperience">
                <h2 data-aos="fade-right">How about my experience?</h2>
                <p data-aos="fade-up"
                data-aos-anchor-plnt="top-bottom" data-aos-duration="500">I started to learn programming when I was in grade 10, way back in 2018. My first languages and technologies that I use are HTML, CSS, and Javascript, and after a few years, I began learning PHP, MySQL/MariaDB, JQuery, and Ajax. The first website that I developed was my personal portfolio website.</p>
    
    
                    


                    
                <div className="expLevel">


                         {/* <!-- certifications --> */}
                    <div data-aos="fade-up" data-aos-duration="100" class="certiCon">
                       
                       <small>Certifications</small>
                 
               
   <Swiper className="certi" pagination={true}  effect={'cards'} grabCursor={true} modules={[EffectCards,Pagination]}>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer1.jpg" alt="certificate1" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer2.jpg" alt="certificate2" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer3.jpg" alt="certificate3" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer4.jpg" alt="certificate4" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer5.jpg" alt="certificate5" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer6.jpg" alt="certificate6" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer7.jpg" alt="certificate7" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer8.jpg" alt="certificate8" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer9.jpg" alt="certificate9" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer10.jpg" alt="certificate10" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer11.jpg" alt="certificate11" /></SwiperSlide>
               <SwiperSlide className='SwiperSlide'><img src="/assets/cer12.jpg" alt="certificate12" /></SwiperSlide>
               
               </Swiper>


   
   
                   </div>


    
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                        <small>2020-2024</small>
                        <h3>Staff</h3>
                        <h4>dheeluxe SKIN</h4>
                        <p>Working student as staff on the dheeluxe SKIN</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                        <small>2020-2022</small>
                        <h3>Senior High School</h3>
                        <h4>Trinity Polytechnic College</h4>
                        <p>Taking and graduating from senior high school with a TVL - Information Communication Technology (ICT) strand <br /><br /> <a target='_blank' className={"coc"} href="./assets/shsDiploma.jpg">Certificate Of Completion</a></p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="300">
                    <small>2022-2024</small>
                        <h3>College</h3>
                        <h4>Integrated Innovation and Hospitality College</h4>
                        <p>I finished the first year of the Bachelor of Science in Information Systems (BSIS) program and enrolled in the second year, but I had to quit during the first semester because of financial issues. You can check my <a target='_blank' className={"grades"} href="/assets/1stSem.jpg">1st</a> and <a target='_blank' className={"grades"} href="/assets/2ndSem.jpg">2nd</a> semester grades</p>

                    </div>
                   
                    <div data-aos="fade-up" data-aos-duration="300">
                    <small>2024-Present</small>
                    <h3>Sales Associate</h3>
                    <h4>D’LUXXE SKINLAB</h4>
                    <p id="current">Working as Sales Associate on the D’LUXXE SKINLAB</p>
                            <br /><br /><br />
                            <h3>Content Creator</h3>
                    <h4>Patreon Inc.</h4>
                    <p id="current">Creating AI-generated adult content involves leveraging advanced machine learning algorithms to produce material intended for mature audiences on Patreon</p>
                    </div>

                   


    
    
    
                </div>
    
             </div>



    
             <div className="saysAboutMe">


                <h2 id="testimonials" data-aos="fade-right">What Client/I help says about me?</h2>
                
                <p data-aos="fade-left">Here is a list of testimonials from students from various colleges and universities about what I do or help them with in their activities and capstones.</p>
    
                <div id="scroll">

                  
    
                    {/* for 1st batch */}
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">5/24/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/stevefrancis.galo.1"><i className="fa-brands fa-facebook"></i></a> Steve Francis Samaco <small>(ICT Student)</small></h3>
                        <p>Jonrie is a very good person and very helpful; there's a lot he's done to help me, like those projects, quizzes, and modules about programming; if I don't understand, Jonrie is there to teach me; Jonrie is very nice; I am speechless; I hope he becomes successful someday.</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">5/28/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/rainier.barredo24"><i className="fa-brands fa-facebook"></i></a> Rainier Barredo <small>(ICT Student)</small></h3>
                        <p>Jonrie Morales is very good in terms of programming. He helped me before to build a web-based resume, and I recommend that you ask him for help because he is reliable and he is such a nice person.</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">6/1/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/profile.php?id=100078333846946"><i className="fa-brands fa-facebook"></i></a> Lheymar Catapang <small>(ICT Student)</small></h3>
                        <p>Jonrie is one of my friends. We are not really close, but I feel good about him helping me with other schoolwork, especially in computer programming, about which I have no knowledge. When I chatted with him, he immediately helped me build the blog site about my school. For me jonrie is very nice person at realible.</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">12/13/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/brecio.charlesfrancis"><i className="fa-brands fa-facebook"></i></a> Charles Francis <br /><small>(BSIT Student)</small></h3>
                        <p>Jonrie taught me programming since we were in Junior High School. Now that we are in college, he still teaches me new knowledge he gain. He is knowledgeable in web development-- he can do both front end and back end. As far as I know him, his skills includes: HTML, CSS, JavaScript, phpMyAdmin, MySQL and C++. He is very enthusiast, passionate, and hardworking person. I wish him the best and have the success he deserves.</p>
                    </div> 


                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">1/11/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/jeromee.dev.22"><i className="fa-brands fa-facebook"></i></a> Jerome Bulosan <br /><small>(BSIT Student)</small></h3>
                        <p>For me, the amount of help that Jonrie did for us was so great that we could present something in defense; you did a great job. Your skill defines how good you are in your field. I hope you can improve and do more projects. I will highly recommend you to others who are looking to build their systems. The work is beautiful, and the system is smooth and well organized. Thank you</p>
                    </div> 

    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">4/9/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/profile.php?id=100078759327384"><i className="fa-brands fa-facebook"></i></a> Melissa Ayala <br /> <small>(BSIT Student)</small></h3>
                        <p>All I can say is that Jonrie's help with part of my project is a big help to me because I'm a bit weak in making codes. So thank you for helping me with my project; the amount of work I have to do has been reduced at least a little bit. I can say that you are nice to talk to, and you also responded right away, which was nice, and the help I got from you followed the layout of my project. Thank you.</p>
                    </div> 
    
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">5/25/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/kristine.Dingle.04"><i className="fa-brands fa-facebook"></i></a> Kristine Ocan Dingle <br /><small>(BSIT Student)</small></h3>
                        <p>Im glad that I saw your content and all I can say is you're so kind that you help me to do my codes/activity you help me to learn more about coding and you're so informative and explaining all the details also you are easy to approach because you don't hesitate to message me back. Once again Thank you for you help I appreciate it.
                        </p>
                    </div> 

                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">9/1/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://www.facebook.com/profile.php?id=100081368501361"><i className="fa-brands fa-facebook"></i></a>Nathaniel Bianito <br /> <small>(BSIT Student)</small></h3>
                        <p>I recently commissioned from jonrie and I am absolutely thrilled with the results. From start to finish, the experience was exceptional.</p>
                    </div> 


                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">9/14/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/claryellaa"><i className="fa-brands fa-facebook"></i></a>Scarlett Soledad <br /> <small>(BSIT Student)</small></h3>
                        <p>Super accommodating and reliable! And the work is beautiful and easy to talk about. The price is very budget-friendly, which is very helpful for students.</p>
                    </div> 

                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">9/24/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/jolinaagojo.18"><i className="fa-brands fa-facebook"></i></a>Jolina Agojo <br /><small>(BSCS Student)</small></h3>
                        <p>As a student who hired a web developer to make my website, it is nice and well made, very responsive, and very nice to talk to.</p>
                    </div> 


                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="date">9/24/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/hannah.dimayuga.1"><i className="fa-brands fa-facebook"></i></a>Hannah Isabel Dimayuga <br /> <small>(BSCS Student)</small></h3>
                        <p>Jonrie is very professional, and he easily approaches and builds my webpage. Aside from that, his work is so fine.</p>
                    </div> 



                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="date">02/11/2024</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/shielaamaaee"><i className="fa-brands fa-facebook"></i></a>Shiela Mae Saavedra <br /> <small>(BSIT Student)</small></h3>
                        <p>Working with Mr. Jonrie has been an absolute pleasure. His dedication to quality, attention to detail, and swift problem-solving skills have truly elevated our project. He consistently goes above and beyond to ensure our satisfaction and deliver results that exceed expectations. I highly recommend his services to anyone seeking a reliable and talented developer.</p>
                    </div> 

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="date">02/11/2024</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/unit.39601.w41k3r"><i className="fa-brands fa-facebook"></i></a>Mariel F. Catubay <br /> <small>(BSIT Student)</small></h3>
                        <p>Jonrie is good. We don't need to explain every single detail at first, and he has immediately built our capstone system, and the result is so good, especially since we demand specific functions that we need for our system, and he is budget-friendly for a developer. That's why we're really grateful since we're just mere students, and he doesn't pressure us, and the cooperation is so good that we meet the ends because of Jonrie, who is a very talented and kind developer.</p>
                    </div> 




                    {/* For 2nd batch */}

                    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">5/24/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/stevefrancis.galo.1"><i className="fa-brands fa-facebook"></i></a> Steve Francis Samaco <small>(ICT Student)</small></h3>
                        <p>Jonrie is a very good person and very helpful; there's a lot he's done to help me, like those projects, quizzes, and modules about programming; if I don't understand, Jonrie is there to teach me; Jonrie is very nice; I am speechless; I hope he becomes successful someday.</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">5/28/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/rainier.barredo24"><i className="fa-brands fa-facebook"></i></a> Rainier Barredo <small>(ICT Student)</small></h3>
                        <p>Jonrie Morales is very good in terms of programming. He helped me before to build a web-based resume, and I recommend that you ask him for help because he is reliable and he is such a nice person.</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">6/1/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/profile.php?id=100078333846946"><i className="fa-brands fa-facebook"></i></a> Lheymar Catapang <small>(ICT Student)</small></h3>
                        <p>Jonrie is one of my friends. We are not really close, but I feel good about him helping me with other schoolwork, especially in computer programming, about which I have no knowledge. When I chatted with him, he immediately helped me build the blog site about my school. For me jonrie is very nice person at realible.</p>
                    </div>
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">12/13/2022</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/brecio.charlesfrancis"><i className="fa-brands fa-facebook"></i></a> Charles Francis <br /><small>(BSIT Student)</small></h3>
                        <p>Jonrie taught me programming since we were in Junior High School. Now that we are in college, he still teaches me new knowledge he gain. He is knowledgeable in web development-- he can do both front end and back end. As far as I know him, his skills includes: HTML, CSS, JavaScript, phpMyAdmin, MySQL and C++. He is very enthusiast, passionate, and hardworking person. I wish him the best and have the success he deserves.</p>
                    </div> 


                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">1/11/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/jeromee.dev.22"><i className="fa-brands fa-facebook"></i></a> Jerome Bulosan <br /><small>(BSIT Student)</small></h3>
                        <p>For me, the amount of help that Jonrie did for us was so great that we could present something in defense; you did a great job. Your skill defines how good you are in your field. I hope you can improve and do more projects. I will highly recommend you to others who are looking to build their systems. The work is beautiful, and the system is smooth and well organized. Thank you</p>
                    </div> 

    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">4/9/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/profile.php?id=100078759327384"><i className="fa-brands fa-facebook"></i></a> Melissa Ayala <br /> <small>(BSIT Student)</small></h3>
                        <p>All I can say is that Jonrie's help with part of my project is a big help to me because I'm a bit weak in making codes. So thank you for helping me with my project; the amount of work I have to do has been reduced at least a little bit. I can say that you are nice to talk to, and you also responded right away, which was nice, and the help I got from you followed the layout of my project. Thank you.</p>
                    </div> 
    
    
                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">5/25/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/kristine.Dingle.04"><i className="fa-brands fa-facebook"></i></a> Kristine Ocan Dingle <br /><small>(BSIT Student)</small></h3>
                        <p>Im glad that I saw your content and all I can say is you're so kind that you help me to do my codes/activity you help me to learn more about coding and you're so informative and explaining all the details also you are easy to approach because you don't hesitate to message me back. Once again Thank you for you help I appreciate it.
                        </p>
                    </div> 

                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">9/1/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://www.facebook.com/profile.php?id=100081368501361"><i className="fa-brands fa-facebook"></i></a>Nathaniel Bianito <br /> <small>(BSIT Student)</small></h3>
                        <p>I recently commissioned from jonrie and I am absolutely thrilled with the results. From start to finish, the experience was exceptional.</p>
                    </div> 


                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">9/14/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/claryellaa"><i className="fa-brands fa-facebook"></i></a>Scarlett Soledad <br /> <small>(BSIT Student)</small></h3>
                        <p>Super accommodating and reliable! And the work is beautiful and easy to talk about. The price is very budget-friendly, which is very helpful for students.</p>
                    </div> 

                    <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="date">9/24/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/jolinaagojo.18"><i className="fa-brands fa-facebook"></i></a>Jolina Agojo <br /><small>(BSCS Student)</small></h3>
                        <p>As a student who hired a web developer to make my website, it is nice and well made, very responsive, and very nice to talk to.</p>
                    </div> 


                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="date">9/24/2023</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/hannah.dimayuga.1"><i className="fa-brands fa-facebook"></i></a>Hannah Isabel Dimayuga <br /> <small>(BSCS Student)</small></h3>
                        <p>Jonrie is very professional, and he easily approaches and builds my webpage. Aside from that, his work is so fine.</p>
                    </div> 



                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="date">02/11/2024</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/shielaamaaee"><i className="fa-brands fa-facebook"></i></a>Shiela Mae Saavedra <br /> <small>(BSIT Student)</small></h3>
                        <p>Working with Mr. Jonrie has been an absolute pleasure. His dedication to quality, attention to detail, and swift problem-solving skills have truly elevated our project. He consistently goes above and beyond to ensure our satisfaction and deliver results that exceed expectations. I highly recommend his services to anyone seeking a reliable and talented developer.</p>
                    </div> 

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="date">02/11/2024</div>
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <h3><a target="_blank" href="https://web.facebook.com/unit.39601.w41k3r"><i className="fa-brands fa-facebook"></i></a>Mariel F. Catubay <br /> <small>(BSIT Student)</small></h3>
                        <p>Jonrie is good. We don't need to explain every single detail at first, and he has immediately built our capstone system, and the result is so good, especially since we demand specific functions that we need for our system, and he is budget-friendly for a developer. That's why we're really grateful since we're just mere students, and he doesn't pressure us, and the cooperation is so good that we meet the ends because of Jonrie, who is a very talented and kind developer.</p>
                    </div> 



                

        

    
                </div>
    
             </div>
    
    
        </div>

        </>
    );

}
export default About;
// framer motion
import { motion } from 'framer-motion';
// framer reusable aos animation
import AOS from './animations/AOS';

// css
import '../css/myWorks.css';

// react icons
import { FaChartArea } from "react-icons/fa";


// swiper module
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';


// swiper css
import '../../node_modules/swiper/swiper.css';


const MyWork = ()=>{

    return(
        <div className="myWorks">

        <motion.h2 id="myWorks" initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} viewport={{margin: "-100px", once: true}} transition={{duration: .5}}><FaChartArea/> My works and Projects</motion.h2>
      
        {/* <!-- laptop --> */}
        <img className="laptop" src="/assets/laptop.png" alt="laptop" />


    <Swiper className="carou" grabCursor={"true"} 
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

<SwiperSlide className='swiper-slide'><img src="/assets/works/uiux.jpg" alt="UI/UX For User Learning" /></SwiperSlide> 
<SwiperSlide className='swiper-slide'><img src="/assets/works/canossa.jpg" alt="Health Care Management System" /></SwiperSlide>    
      <SwiperSlide className='swiper-slide'><img src="/assets/works/urlShortener.JPG" alt="URL shortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/coffeeTime.png" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/apiPic.png" alt="API" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/researchGenerator.png" alt="Research/Capstone Title Generator" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/musicShow.png" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/hikingConcept.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop.png" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite.png" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand.png" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood.png" alt="always Choose Good" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/dheeluxe.png" alt="Dheeluxe" /></SwiperSlide>
    </Swiper>





    <motion.p initial={{opacity: 0, y: 80}} whileInView={{opacity: 1, y: 0}} viewport={{margin: "-100px", once: true}} transition={{duration: .5}}>I already receive many projects from a student from a different school. Here are some of my full-stack apps and a PSD application that has been turned into a web page.</motion.p>



        <motion.div className="worksCon" {...AOS}>






            {/* <!-- dheeluxe --> */}
            <div>




                <h2>Dheeluxe</h2>
                <p>HTML,CSS,BOOTSTRAP,JAVASCRIPT</p>


                <div className="sub">
                    {/* sub con start */}




            {/* sub 1st child */}
                    <div>



         {/* carou */}
         <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/dheeluxe.png" alt="Dheeluxe" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/dheeluxe2.jpg" alt="Dheeluxe" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/dheeluxe3.jpg" alt="Dheeluxe" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/dheeluxe4.jpg" alt="Dheeluxe" /></SwiperSlide>

 
    </Swiper>






                        <span>
                        <a target="__blank" href="https://github.com/JonrieMain/ExampleBeautyProducts">
                            <i className="fa-brands fa-github"></i> Github</a>

                        <a target="__blank" href="https://jonriemain.github.io/ExampleBeautyProducts/"><i className="fa-solid fa-globe"></i> View site</a>
                    </span>



                    {/* sub first child end */}
                    </div>





            {/* project description */}
                    <div>
                        <p>This is the first website that i created with html,css,javascript and css frameworks which is bootstrap. I created this to enhance my skills in using HTML, CSS, and JavaScript and tried to enhance my web designing skills and this project is for portfolio purposes. <br/><br/><br/><i>-Publish in 2020</i></p>
                    </div>





                </div> {/* sub end */}






           </div> {/* project main con  */}






           {/* <!-- Always choose good --> */}
           <div>
            <h2>Always Choose Good</h2>
            <p>HTML,CSS,BOOTSTRAP,JAVASCRIPT</p>
            <div className="sub">
                <div>
             

          {/* carou */}
          <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood.png" alt="Always Choose Good" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood2.jpg" alt="Always Choose Good" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood3.jpg" alt="Always Choose Good" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood4.jpg" alt="Always Choose Good" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood5.jpg" alt="Always Choose Good" /></SwiperSlide>

 
    </Swiper>



                    <span>
                    <a target="__blank" href="https://github.com/JonrieMain/AlwaysChooseGood"><i className="fa-brands fa-github"></i> Github</a>

                    <a target="__blank" href="https://jonriemain.github.io/AlwaysChooseGood/"><i className="fa-solid fa-globe"></i> View site</a>
                </span>
                </div>
                <div>
                    <p>This is the second website I created. I found it on YouTube and tried to copy or clone it using HTML, CSS, and JavaScript for portfolio purposes only.<br/><br/><br/><i>-Publish in 2022</i></p>
                </div>
            </div>
       </div>



       {/* <!-- best mobile app --> */}
       <div>
        <h2>Phone Brand</h2>
        <p>HTML,CSS,JAVASCRIPT</p>
        <div className="sub">
            <div>
              


               {/* carou */}
               <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand.png" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand2.jpg" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand3.jpg" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand4.jpg" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand5.jpg" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand6.jpg" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand7.jpg" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand8.jpg" alt="Phone Brand" /></SwiperSlide>
 
    </Swiper>


                <span>
                <a target="__blank" href="https://github.com/JonrieMain/PhoneBrand"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/PhoneBrand/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This is the third website I've created; I found this one too on YouTube, which I tried to copy or clone to enhance my skills and for portfolio purposes.<br/><br/><br/><i>-Publish in 2022</i></p>
            </div>
        </div>
   </div>



    {/* <!-- TPC blogsite --> */}
    <div>
        <h2>TPC Blogsite</h2>
        <p>HTML,CSS,JAVASCRIPT,BOOTSTRAP</p>
        <div className="sub">
            <div>
             

                 {/* carou */}
        <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite.png" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite2.jpg" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite3.jpg" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite4.jpg" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite5.jpg" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite6.jpg" alt="TPC Blogsite" /></SwiperSlide>
 
    </Swiper>





                <span>
                <a target="__blank" href="https://github.com/JonrieMain/TrinityPolytechnicCollegeBlogsite"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/TrinityPolytechnicCollegeBlogsite/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This website I create is for school purposes when I am in senior high school in 2021. This time im a modular just i need is to answer all and pass in the school my one module have activity that need to create a blogsite represent my school and i create this using html,css,javascript and bootstrap.<br/><br/><br/><i>-Publish in 2022</i></p>
            </div>
        </div>
   </div>





    {/* <!-- Restaurant opening --> */}
    <div>
        <h2>Restaurant Opening</h2>
        <p>HTML,CSS,JAVASCRIPT</p>
        <div className="sub">
            <div>
                

         {/* carou */}
         <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop.png" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop2.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop3.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop4.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop5.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop6.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop7.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop8.jpg" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop9.jpg" alt="Restaurant Opening" /></SwiperSlide>
      
      

   
    
    </Swiper>


                <span>
                <a target="__blank" href="https://github.com/JonrieMain/RestaurantsOpening"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/RestaurantsOpening/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This is the first website I converted from Photoshop to an actual webpage. I found this on the <a href="https://www.freepik.com/psd/website-templates">Freepik</a> website. I found that website and am looking for websites that I want to convert from PSD to actual webpages. This project is for portfolio purposes.<br/><br/><br/><i>-Publish in 2022</i></p>
            </div>
        </div>
   </div>





   {/* <!-- Hiking Concept --> */}
    <div>
        <h2>Hiking Concept</h2>
        <p>HTML,CSS,JAVASCRIPT</p>
        <div className="sub">
            <div>
             

         {/* carou */}
         <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept2.jpg" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept3.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept4.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept5.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept6.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept7.jpg" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept8.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/hikingConcept9.png" alt="Hiking Concept" /></SwiperSlide>
   
    
    </Swiper>


                <span>
                <a target="__blank" href="https://github.com/JonrieMain/HikingConcept"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/HikingConcept/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This is the second website that I converted from psd to actual webpage, and this is from <a href="https://www.freepik.com/psd/website-templates">Freepik</a> and for portfolio purposes.<br/><br/><br/><i>-Publish in 2022</i></p>
            </div>
        </div>
   </div>






   {/* <!-- Music show --> */}
   <div>
    <h2>Music Show</h2>
    <p>HTML,CSS,JAVASCRIPT</p>
    <div className="sub">

        <div>
       

            {/* carou */}
         <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/musicShow.png" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/musicShow2.jpg" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/musicShow3.jpg" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/musicShow4.jpg" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/musicShow5.jpg" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/musicShow6.jpg" alt="Music Show" /></SwiperSlide>
   
    
    </Swiper>

            <span>
            <a target="__blank" href="https://github.com/JonrieMain/musicShow"><i className="fa-brands fa-github"></i> Github</a>

            <a target="__blank" href="https://jonriemain.github.io/musicShow/"><i className="fa-solid fa-globe"></i> View site</a>
        </span>
        </div>
        <div>
            <p>This is the third website that I converted from psd to actual webpage, and this is from <a href="https://www.freepik.com/psd/website-templates">Freepik</a> and for portfolio purposes.<br/><br/><br/><i>-Publish in 2022</i></p>
        </div>
    </div>
</div>



{/* <!-- Research/Capstone title generator --> */}
<div>
<h2>Research/Capstone Title Generator</h2>
<p>HTML,CSS,JAVASCRIPT</p>
<div className="sub">
    <div>


       
         {/* carou */}
         <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/researchGenerator.png" alt="Research/Capstone Title Generator" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/researchGenerator2.jpg" alt="Research/Capstone Title Generator" /></SwiperSlide>
   
    
    </Swiper>



        <span>
        <a target="__blank" href="https://github.com/JonrieMain/ResearchTitlesGenerator"><i className="fa-brands fa-github"></i> Github</a>

        <a target="__blank" href="https://jonriemain.github.io/ResearchTitlesGenerator/"><i className="fa-solid fa-globe"></i> View site</a>
    </span>
    </div>
    <div>
        <p>This website I created to make a random selection using vanilla javascript and tried to help other people choose their title for their thesis or capstone. This generated title is for computer majors only.<br/><br/><br/><i>-Publish in 2022</i></p>
    </div>
</div>
</div>



        {/* <!-- POS -->
        <div>
            <h2>Inventory with Point of Sale</h2>
            <p>HTML,CSS,JQUERY,AJAX,PHP,MYSQL/MARIADB</p>
            <div className="sub">
                <div>
                    <img src="/assets/works/pos.png" alt="POS" />

                    <span>
                    <a target="_blank" href="https://github.com/JonrieMain/inventoryWithPOS"><i className="fa-brands fa-github"></i> Github</a>

                    <a href="#"><i className="fa-solid fa-globe"></i> View site</a>
                </span>
                </div>
                <div>
                    <p>This is the first full-stack app I created, titled Inventory with Point of Sale. This app has a login and registration, allows you to add, remove, and edit products like quantity, name, and price; add sales; add products that you receive from suppliers; record sales reports; and has an employee list and details. Users who have access to this app and account settings This system is not yet finished and is for portfolio purposes only.</p>
                </div>
            </div>
       </div> */}



       {/* <!-- apiCalling --> */}
       <div>
        <h2>Dog & Cat Photo Generator</h2>
        <p>HTML,CSS,JQUERY,AJAX</p>
        <div className="sub">
            <div>
                

         {/* carou */}
         <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/apiPic.png" alt="apiPic" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/apiPic2.jpg" alt="apiPic" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/apiPic3.jpg" alt="apiPic" /></SwiperSlide>
    
    </Swiper>


                <span>
                <a target="_blank" href="https://github.com/JonrieMain/APICalling"><i className="fa-brands fa-github"></i> Github</a>

                <a target="_blank" href="https://jonriemain.github.io/APICalling/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This application I built is a simple image generator with cats, dogs, and random advice API.<br/><br/><br/><i>-Publish in 2023</i></p>
            </div>
        </div>
   </div>


    {/* <!-- Coffee Time --> */}
    <div>
        <h2>Coffee Time</h2>
        <p>HTML,SASS,JAVASCRIPT</p>
        <div className="sub">
            <div>
                
                   {/* carou */}
        <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/coffeeTime.png" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/coffeeTime2.jpg" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/coffeeTime3.jpg" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/coffeeTime4.jpg" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/coffeeTime5.jpg" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/coffeeTime6.jpg" alt="coffeeTime" /></SwiperSlide>
    
    </Swiper>



                <span>
                <a target="_blank" href="https://github.com/JonrieMain/coffeeTime"><i className="fa-brands fa-github"></i> Github</a>

                <a target="_blank" href="https://jonriemain.github.io/coffeeTime/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This design is one I found on <a href="https://www.freepik.com/"> Freepik</a> and tried to clone using HTML, SASS, and Javascript. I built this to enhance my skills in using the SASS pre-processor and for portfolio purposes only.<br/><br/><br/><i>-Publish in 2023</i></p>
            </div>
        </div>
   </div>




   {/* <!-- kcl hardware --> */}
   <div>
    <h2>KCL Hardware Store</h2>
    <p>HTML,CSS,Jquery,Ajax,PHP,MySQL,FormSubmit</p>
    <div className="sub">

        <div>
            
                 {/* carou */}
        <Swiper className='projectListSwiper' grabCursor={true}  
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl2.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/kcl3.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl4.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl5.jpg" alt="Research/Capstone Title Generator" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/kcl6.jpg" alt="kcl " /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/kcl7.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl8.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl9.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl10.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl11.jpg" alt="kcl" /></SwiperSlide>
    </Swiper>




            <span>
            <a target="_blank" href="https://github.com/JonrieMain/kclShop"><i className="fa-brands fa-github"></i> Github</a>

            <a target="_blank" href="#"><i className="fa-solid fa-globe"></i> View site</a>
        </span>
        </div>


        <div>
            <p>This is the first big full stack I've handled. This system is from a student who has a capstone project. I handled their system to make some changes, fix some components, and add some components from the frontend to the backend. Like the login and registration forms for the user and admin sections, make some logic for stocks of a product and sessions, and design the dashboard and make it functional, including searching for products, filtering, settings, and themes. creating a receive order section for delivery, etc.<br/><br/><br/><i>-Publish in 2023</i></p>
        </div>


    </div>
</div>








  {/* <!-- url shortener --> */}
  <div>
    <h2>Simple URL Shortener</h2>
    <p>HTML,CSS,Jquery,Ajax,PHP,MySQL</p>

    <div className="sub">

        <div>
            

        {/* carou */}
        <Swiper className='projectListSwiper' grabCursor={true} 
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      <SwiperSlide className='swiper-slide'><img src="/assets/works/urlShortener.JPG" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/urlShortener2.jpg" alt="urlShortener" /></SwiperSlide>

    </Swiper>




            <span>
            <a target="_blank" href="https://github.com/JonrieMain/urlShortener"><i className="fa-brands fa-github"></i> Github</a>

            <a target="_blank" href="http://urlshortener.free.nf/"><i className="fa-solid fa-globe"></i> View site</a>
        </span>

        
        </div>

        <div>
            <p>This is my sample self-project that intends to make a link or URL shorter with another alternative extension name. It focuses on making your long URL or link shorter and easier to memorize. This is a sample project that uses a free domain. You can check the source code and demo website below the image.<br/><br/><br/><i>-Publish in 2023</i></p>
        </div>

    </div>


</div>






{/* <!-- Health Care Management System --> */}
<div>
    <h2>Health Care Management System</h2>
    <p>HTML,CSS,Jquery,Ajax,PHP,MySQL,GoogleIcons,GoogleFonts,EmailJS,Bootstrap,SweetAlert</p>

    <div className="sub">

        <div>
            

        {/* carou */}
        <Swiper className='projectListSwiper' grabCursor={true} 
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa2.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa3.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa4.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa5.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa6.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa7.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa8.jpg" alt="urlShortener" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/canossa9.jpg" alt="urlShortener" /></SwiperSlide>

    </Swiper>




            <span>
            <a target="_blank" href="https://github.com/JonrieMain/CanossaHealthCareManagementSystem"><i className="fa-brands fa-github"></i> Github</a>

            <a target="_blank" href="#"><i className="fa-solid fa-globe"></i> View site</a>
        </span>

        
        </div>

        <div>
            <p>This is my second capstone, and I'll handle a health care management system from a student. This system can make an appointment for a patient who already has an account on the application, then have an admin that can assign the appointment to a doctor. The doctor also has an account to accept the appointment and has the ability to discharge the patient.<br/><br/><br/><i>-Publish in 2024</i></p>
        </div>

    </div>


</div>






{/* <!-- UI/UX For User Learning --> */}
<div>
    <h2 className="linesFrom">UI/UX For User Learning</h2>
    <p>HTML,CSS,Jquery,Ajax,PHP,MySQL,GoogleIcons,GoogleFonts,VideoJS,EmailJS,Bootstrap,SweetAlert</p>

    <div className="sub">

        <div>
            

        {/* carou */}
        <Swiper className='projectListSwiper' grabCursor={true} 
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

          
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux.jpg" alt="UI/UX 1" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux2.jpg" alt="UI/UX 2" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux3.jpg" alt="UI/UX 3" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux4.jpg" alt="UI/UX 4" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux5.jpg" alt="UI/UX 5" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux6.jpg" alt="UI/UX 6" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux7.jpg" alt="UI/UX 7" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux8.jpg" alt="UI/UX 8" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux9.jpg" alt="UI/UX 9" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux10.jpg" alt="UI/UX 10" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux11.jpg" alt="UI/UX 11" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux12.jpg" alt="UI/UX 12" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux13.jpg" alt="UI/UX 13" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux14.jpg" alt="UI/UX 14" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux15.jpg" alt="UI/UX 15" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux16.jpg" alt="UI/UX 16" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux17.jpg" alt="UI/UX 17" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux18.jpg" alt="UI/UX 18" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/uiux19.jpg" alt="UI/UX 19" /></SwiperSlide>
    

    </Swiper>




            <span>
            <a target="_blank" href="https://github.com/JonrieMain/UI-UX"><i className="fa-brands fa-github"></i> Github</a>

            <a target="_blank" href="#"><i className="fa-solid fa-globe"></i> View site</a>
        </span>

        
        </div>

        <div>
            <p>This is the third capstone I've handled for a student. About UI/UX Design teaches users to enhance their skills in UI/UX design using the video posted by the admin. Admin can add video, quiz,delete, edit, and track quiz results for every user, and admin can also approve selected users only for their website and see the user account list. On the user side, the user can choose the video they want and play it. After the video, he or she is allowed to answer the question to test what they learned from the video they watched. The user can also comment on the video. Selected users who only have a specific email can register on a website.<br/><br/><br/><i>-Publish in 2024</i></p>
        </div>

    </div>


</div>



























        </motion.div>





    </div>

    )

}
export default MyWork;
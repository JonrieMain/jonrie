
// css
import '../css/myWorks.css';

// swiper module
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';





// swiper css
import '../../node_modules/swiper/swiper.css';



const MyWork = ()=>{


    return(
        <div className="myWorks">

        <h2 data-aos="fade-right" data-duration="1500" id="myWorks">My works and Projects</h2>
      
        {/* <!-- laptop --> */}
        <img className="laptop" src="/assets/laptop.png" alt="laptop" />


    <Swiper className="carou" 
     spaceBetween={30} centeredSlides={true}  modules={[Autoplay, Pagination]}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
       }} speed={3500}>

         


      <SwiperSlide className='swiper-slide'><img src="/assets/works/urlShortener.JPG" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/kcl.jpg" alt="kcl" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/coffeeTime.png" alt="coffeeTime" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/apiPic.png" alt="POS" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/pos.png" alt="POS" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/researchGenerator.png" alt="Research/Capstone Title Generator" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/musicShow.png" alt="Music Show" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'> <img src="/assets/works/hikingConcept.png" alt="Hiking Concept" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/restauOpeningDestop.png" alt="Restaurant Opening" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/trinityBlogsite.png" alt="TPC Blogsite" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/phoneBrand.png" alt="Phone Brand" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/alwaysChooseGood.png" alt="always Choose Good" /></SwiperSlide>
      <SwiperSlide className='swiper-slide'><img src="/assets/works/dheeluxe.png" alt="Dheeluxe" /></SwiperSlide>
    </Swiper>





    <p data-aos="zoom-in" data-aos-duration="1000">I haven't yet received any projects from company clients, but I already receive many projects from a student from a different school. Here are some of my full-stack apps and a PSD application that has been turned into a web page.</p>
        <div className="worksCon">


            {/* <!-- dheeluxe --> */}
            <div>
                <h2>Dheeluxe</h2>
                <p>HTML,CSS,BOOTSTRAP,JAVASCRIPT</p>
                <div className="sub">
                    <div>
                        <img src="/assets/works/dheeluxe.png" alt="Dheeluxe" />

                        <span>
                        <a target="__blank" href="https://github.com/JonrieMain/ExampleBeautyProducts">
                            <i className="fa-brands fa-github"></i> Github</a>

                        <a target="__blank" href="https://jonriemain.github.io/ExampleBeautyProducts/"><i className="fa-solid fa-globe"></i> View site</a>
                    </span>



                    
                    </div>
                    <div>
                        <p>This is the first website that i created with html,css,javascript and css frameworks which is bootstrap. I created this to enhance my skills in using HTML, CSS, and JavaScript and tried to enhance my web designing skills and this project is for portfolio purposes.</p>
                    </div>
                </div>
           </div>






           {/* <!-- Always choose good --> */}
           <div>
            <h2>Always Choose Good</h2>
            <p>HTML,CSS,BOOTSTRAP,JAVASCRIPT</p>
            <div className="sub">
                <div>
                    <img src="/assets/works/alwaysChooseGood.png" alt="always Choose Good" />

                    <span>
                    <a target="__blank" href="https://github.com/JonrieMain/AlwaysChooseGood"><i className="fa-brands fa-github"></i> Github</a>

                    <a target="__blank" href="https://jonriemain.github.io/AlwaysChooseGood/"><i className="fa-solid fa-globe"></i> View site</a>
                </span>
                </div>
                <div>
                    <p>This is the second website I created. I found it on YouTube and tried to copy or clone it using HTML, CSS, and JavaScript for portfolio purposes only.</p>
                </div>
            </div>
       </div>



       {/* <!-- best mobile app --> */}
       <div>
        <h2>Phone Brand</h2>
        <p>HTML,CSS,JAVASCRIPT</p>
        <div className="sub">
            <div>
                <img src="/assets/works/phoneBrand.png" alt="Phone Brand" />

                <span>
                <a target="__blank" href="https://github.com/JonrieMain/PhoneBrand"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/PhoneBrand/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This is the third website I've created; I found this one too on YouTube, which I tried to copy or clone to enhance my skills and for portfolio purposes.</p>
            </div>
        </div>
   </div>



    {/* <!-- TPC blogsite --> */}
    <div>
        <h2>TPC Blogsite</h2>
        <p>HTML,CSS,JAVASCRIPT,BOOTSTRAP</p>
        <div className="sub">
            <div>
                <img src="/assets/works/trinityBlogsite.png" alt="TPC Blogsite" />

                <span>
                <a target="__blank" href="https://github.com/JonrieMain/TrinityPolytechnicCollegeBlogsite"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/TrinityPolytechnicCollegeBlogsite/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This website I create is for school purposes when I am in senior high school in 2021. This time im a modular just i need is to answer all and pass in the school my one module have activity that need to create a blogsite represent my school and i create this using html,css,javascript and bootstrap.</p>
            </div>
        </div>
   </div>





    {/* <!-- Restaurant opening --> */}
    <div>
        <h2>Restaurant Opening</h2>
        <p>HTML,CSS,JAVASCRIPT</p>
        <div className="sub">
            <div>
                <img src="/assets/works/restauOpeningDestop.png" alt="Restaurant Opening" />

                <span>
                <a target="__blank" href="https://github.com/JonrieMain/RestaurantsOpening"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/RestaurantsOpening/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This is the first website I converted from Photoshop to an actual webpage. I found this on the <a href="https://www.freepik.com/psd/website-templates">Freepik</a> website. I found that website and am looking for websites that I want to convert from PSD to actual webpages. This project is for portfolio purposes.</p>
            </div>
        </div>
   </div>





   {/* <!-- Hiking Concept --> */}
    <div>
        <h2>Hiking Concept</h2>
        <p>HTML,CSS,JAVASCRIPT</p>
        <div className="sub">
            <div>
                <img src="/assets/works/hikingConcept.png" alt="Hiking Concept" />

                <span>
                <a target="__blank" href="https://github.com/JonrieMain/HikingConcept"><i className="fa-brands fa-github"></i> Github</a>

                <a target="__blank" href="https://jonriemain.github.io/HikingConcept/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This is the second website that I converted from psd to actual webpage, and this is from <a href="https://www.freepik.com/psd/website-templates">Freepik</a> and for portfolio purposes.</p>
            </div>
        </div>
   </div>






   {/* <!-- Music show --> */}
   <div>
    <h2>Music Show</h2>
    <p>HTML,CSS,JAVASCRIPT</p>
    <div className="sub">
        <div>
            <img src="/assets/works/musicShow.png" alt="Music Show" />

            <span>
            <a target="__blank" href="https://github.com/JonrieMain/musicShow"><i className="fa-brands fa-github"></i> Github</a>

            <a target="__blank" href="https://jonriemain.github.io/musicShow/"><i className="fa-solid fa-globe"></i> View site</a>
        </span>
        </div>
        <div>
            <p>This is the third website that I converted from psd to actual webpage, and this is from <a href="https://www.freepik.com/psd/website-templates">Freepik</a> and for portfolio purposes.</p>
        </div>
    </div>
</div>



{/* <!-- Research/Capstone title generator --> */}
<div>
<h2>Research/Capstone Title Generator</h2>
<p>HTML,CSS,JAVASCRIPT</p>
<div className="sub">
    <div>
        <img src="/assets/works/researchGenerator.png" alt="Research/Capstone Title Generator" />

        <span>
        <a target="__blank" href="https://github.com/JonrieMain/ResearchTitlesGenerator"><i className="fa-brands fa-github"></i> Github</a>

        <a target="__blank" href="https://jonriemain.github.io/ResearchTitlesGenerator/"><i className="fa-solid fa-globe"></i> View site</a>
    </span>
    </div>
    <div>
        <p>This website I created to make a random selection using vanilla javascript and tried to help other people choose their title for their thesis or capstone. This generated title is for computer majors only.</p>
    </div>
</div>
</div>



        {/* <!-- POS --> */}
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
       </div>



       {/* <!-- apiCalling --> */}
       <div>
        <h2>API Calling</h2>
        <p>HTML,CSS,JQUERY,AJAX</p>
        <div className="sub">
            <div>
                <img src="/assets/works/apiPic.png" alt="POS" />

                <span>
                <a target="_blank" href="https://github.com/JonrieMain/APICalling"><i className="fa-brands fa-github"></i> Github</a>

                <a target="_blank" href="https://jonriemain.github.io/APICalling/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This application I built is a simple image generator with cats, dogs, and random advice. I built this to enhance my skills in API integration.</p>
            </div>
        </div>
   </div>

    {/* <!-- Coffee Time --> */}
    <div>
        <h2>Coffee Time</h2>
        <p>HTML,SASS,JAVASCRIPT</p>
        <div className="sub">
            <div>
                <img src="/assets/works/coffeeTime.png" alt="coffeeTime" />

                <span>
                <a target="_blank" href="https://github.com/JonrieMain/coffeeTime"><i className="fa-brands fa-github"></i> Github</a>

                <a target="_blank" href="https://jonriemain.github.io/coffeeTime/"><i className="fa-solid fa-globe"></i> View site</a>
            </span>
            </div>
            <div>
                <p>This design is one I found on <a href="https://www.freepik.com/"> Freepik</a> and tried to clone using HTML, SASS, and Javascript. I built this to enhance my skills in using the SASS pre-processor and for portfolio purposes only. Unfortunately, this webpage is not yet finished.</p>
            </div>
        </div>
   </div>




   {/* <!-- kcl hardware --> */}
   <div>
    <h2>KCL Hardware Store</h2>
    <p>HTML,CSS,Jquery,Ajax,PHP,MySQL,FormSubmit</p>
    <div className="sub">
        <div>
            <img src="/assets/works/kcl.jpg" alt="kcl" />

            <span>
            <a target="_blank" href="https://github.com/JonrieMain/kclShop"><i className="fa-brands fa-github"></i> Github</a>

            <a target="_blank" href="#"><i className="fa-solid fa-globe"></i> View site</a>
        </span>
        </div>
        <div>
            <p>This is the second full stack I've handled. This system is from a student who has a capstone project. I handled their system to make some changes, fix some components, and add some components from the frontend to the backend. Like the login and registration forms for the user and admin sections, make some logic for stocks of a product and sessions, and design the dashboard and make it functional, including searching for products, filtering, settings, and themes. creating a receive order section for delivery, etc.</p>
        </div>
    </div>
</div>








  {/* <!-- url shortener --> */}
  <div data-aos="fade-left" data-aos-duration="800">
    <h2 className="linesFrom">Simple URL Shortener</h2>
    <p>HTML,CSS,Jquery,Ajax,PHP,MySQL</p>
    <div className="sub">
        <div>
            <img src="/assets/works/urlShortener.JPG" alt="kcl" />

            <span>
            <a target="_blank" href="https://github.com/JonrieMain/urlShortener"><i className="fa-brands fa-github"></i> Github</a>

            <a target="_blank" href="http://urlshortener.free.nf/"><i className="fa-solid fa-globe"></i> View site</a>
        </span>
        </div>
        <div>
            <p>This is my sample self-project that intends to make a link or URL shorter with another alternative extension name. It focuses on making your long URL or link shorter and easier to memorize. This is a sample project that uses a free domain. You can check the source code and demo website below the image.</p>
        </div>
    </div>
</div>









        </div>





    </div>

    )

}
export default MyWork;
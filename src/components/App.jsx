import { useEffect } from 'react';




// page components
import Home from './Home';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';
import Footer from './Footer';

// aos
import 'aos/dist/aos.css';
// install types before you import this module => npm install --save @types/aos for ts only
import Aos from 'aos';
 


const App = ()=>{

    // init
        Aos.init();
        Aos.init({
            once: true,
            easing: 'linear'
        });



    return(<>

        <Home/>
        <About/>
        <MyWork/>
        <Contact/>
        <Footer/>

        </>
    );

}
export default App;
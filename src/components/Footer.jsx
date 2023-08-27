
// css
import '../css/footer.css';


const Footer = ()=>{
    return (
        <footer>
        <p id='c'>{`Jonrie © ${new Date().getFullYear()}`}</p>
      <a href="#home"><i id="up" className="fa-solid fa-arrow-up"></i></a>  
    </footer>
    )
}
export default Footer; 
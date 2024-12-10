import React, {useState} from 'react'
import '../assets/Home.css'
import expenditureImage from '../assets/Expenditure.jpg'


function Home(){

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
         setMenuOpen(!menuOpen);
  };

  return(
  <div className='wrapper'>
    <header>
        <nav>
               <p><span>E</span>MS</p>
               <div className="menu-icon" onClick={toggleMenu}>
                   <i className="bi bi-list"></i> 
               </div>
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'><i class="bi bi-person-fill"></i>SignUp/Login</li>
                    <li className='nav-item'>
                        About
                    </li>
                    <li className='nav-item'>
                        contact Us
                    </li>
                </ul>
          
        </nav>
    </header>
    <div className='home-img'>
    <img src={expenditureImage} alt="Expenditure" />

    </div>
    <div id="about" className="about">
           <h2>About</h2>
           <p>It is Expenditure Management system used to know who purchase what.</p>
    </div>
    <div id="contact" className="contact">
           <h2>Contact Us</h2>
           <div className="social-media">
                <div className="facebook"><a href=""><i class="bi bi-facebook"></i></a></div>
                <div className="Email"><a href=""><i class="bi bi-envelope-fill"></i></a></div>
                <div className="Instagram"><a href=""><i class="bi bi-instagram"></i></a></div>
           </div>
    </div>
    <footer>
<p>&copy;All right reserved</p>
    </footer>

  </div>
  );
}

export default Home;
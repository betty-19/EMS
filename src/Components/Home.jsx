import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/Home.css'
import expenditureImage from '../assets/Expenditure.jpg'
// import Signup from './Signup.jsx';


function Home(){

  const [menuOpen, setMenuOpen] = useState(false);
  // const [signUp, setSignUp] =useState(false);
  const nav = useNavigate();


  const toggleMenu = () =>{
         setMenuOpen(!menuOpen);
  };
  const handleSignUpClick = () =>{
    nav('/sidebarTwo');
  }
  const handleCloseSignUp = () =>{
    setSignUp(false);
  }

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
                    <li className='nav-item' onClick={handleSignUpClick}><i class="bi bi-person-fill"></i>SignUp/Login</li>
                    <li className='nav-item'>
                        About
                    </li>
                    <li className='nav-item'>
                        contact Us
                    </li>
                </ul>
          
        </nav>
    </header>
    {/* {signUp && <Signup />} */}
    {/* {signUp && <Signup closeSignUp={handleCloseSignUp}/>} */}
    <div className='home-img'>
    <img src={expenditureImage} alt="Expenditure" />

    </div>
    <div id="about" className="about">
           <h2>About</h2>
           <p>EMS stands for Expenditure managment system. It's feature include create group to manage expenditure, add your expenditure, follow who purchase what, calculate the amount of money each group member expenditure.</p>
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
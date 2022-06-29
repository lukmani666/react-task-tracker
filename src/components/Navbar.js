import logo from './logo.svg'
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from 'react';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle('responsive_nav')
  }
  return ( 
    <nav className='navbar'>
      <div  className='get'>
        <img src={logo} className='App-logo' alt='logo'/>
        <h3 style={{color: '#61DAFB', fontSize: '25px', fontWeight: 'bolder'}}>React Form</h3>
      </div>
      <button className='bar' onClick={showNavbar}><FaBars /></button>
      <ul ref={navRef}>
        <li><a href='/#'>Home</a></li>
        <li><a href='/#'>Contact</a></li>
        <li><a href='/#'>About</a></li>
        <li><a href='/#'>Project</a></li>
        <button className='btn_close' onClick={showNavbar}><FaTimes /></button>
      </ul>
      
    </nav>
  );
}

export default Navbar
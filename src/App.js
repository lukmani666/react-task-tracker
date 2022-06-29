import Navbar from './components/Navbar';
import Signup from './components/Signup'
import Signin from './components/Signin'
import './components/stylenav.css'; 
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
const App = () => {
  const [disp, setlogin] = useState(false);
  function loginClick (){
    setlogin(false)
  }
  function registerClick (){
    setlogin(true)
  }
  const loginprops = useSpring({
    left: disp ? -470 : 0,
  })

  const registerprops = useSpring({
    left: disp ? 0 : 470,
  })
  
  return (
    <div className="nav">
      <Navbar />
      <div className="login-wrapper">
        <div className="login-register">
        
        <div className='btn-login'>
          <button className="loginbtn" onClick={loginClick}>Login</button>
          <button className="registerbtn" onClick={registerClick}>Register</button>
        </div>
        <div className='form-group'>
          <animated.form className="login" style={loginprops}><Signin /></animated.form>
          <animated.form className="register" style={registerprops}><Signup /></animated.form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App

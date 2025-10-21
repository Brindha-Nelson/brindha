import React from "react"
import { useState,useEffect } from "react"
import "./Signin.css"
import Signinform from "./Signinform"
import Loginform from "./Loginform"

function Signin(){

    const [activeForm, setActiveForm] = useState('signin');
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setShowButtons(true), 300);
      return () => clearTimeout(timer);
    }, []);

    return(
        <div className="container" >

            <div className="left" >
              {activeForm === 'signin' ? <Signinform /> : <Loginform />}
            </div>

           <div className="right" >
           {showButtons && (
            <>
              <button
                id="Sign" 
                className={`fade-in delay-1 ${activeForm === 'signin' ? 'active' : ''}`}
                onClick={() => setActiveForm('signin')}
              > Sign In </button>

              <button
                id="Log"
                className={`fade-in delay-2 ${activeForm === 'login' ? 'active' : ''}`}
                onClick={() => setActiveForm('login')}
              >Log In </button>
            </>
           )}
           </div>
        </div>
    )
}
export default Signin
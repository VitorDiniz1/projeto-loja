

import './Css/LoginSignUp.css'

function LoginSignUp(){

    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsiginup-agree">
                    <input type="checkbox"/>
                    <p>By continuing, i agree to the terms of use & privacy policy</p>

                </div>
            </div>
        </div>
    )
}

export default LoginSignUp
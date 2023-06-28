import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='home-container'>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <div className="board">
        <h1>Board.</h1>
      </div>
      <div className="login">
        <div className="login-container">
          <h2>Sign In</h2>
          <p>sign in in to your account</p>
          <div className="google-login">
            <button type="submit" > <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?login_hint&response_type=code&redirect_uri=https%3A%2F%2Flogin.us.auth0.com%2Flogin%2Fcallback&scope=email%20profile&state=Fe26.2**166f49138c704db4974a69628f89dc76d0a7d120a1092a5dbfaa36a653bebbbc*xsyg8GsiYdwucPNC6H_XLg*jYrpFlplxJP6qDDyEfdsiM9KvA4ZRUAlSg2gywNhAU7zVj_XD1NAR5zLDKhIi-NLk8iRo-MpFFa1qBIMYf_11MUkeInTpDpWUJKIOP4rjxTKakzOzy5LSykPrfYipvOV**2571ec606375230d40202b60802a72792852aed957fadc47ab07104c53cab938*xiO-iWCzBXJqvEG-8JOnFjl3a7qsmkHREfimpMrE99s&client_id=135034099850-p02kdnahdqi4b1rtd59babpvrgfgpb4o.apps.googleusercontent.com&service=lso&o2v=1&flowName=GeneralOAuthFlow"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" alt="glogo" style={{ height: "10px", width: "10px" }} /> Sign in with google</a> </button>
            <button type="submit"><img src="https://banner2.cleanpng.com/20171218/f41/apple-logo-png-5a37e212dfda18.3311147015136117949169.jpg" alt="glogo" style={{ height: "15px", width: "15px" }} />&nbsp;Sign in with apple</button>
          </div>
          <form action="/">
            <label htmlFor="email">Email Address</label><br />
            <input type="email" name="email" id="email" placeholder='johmdoe@gmail.com'/><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" placeholder='********'/><br />
            <a href="/">Forgot password?</a><br />
            <button type="submit">Sign In</button>
          </form>
          <p className='register'>Don't have an account? <a href="/">Register here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Home

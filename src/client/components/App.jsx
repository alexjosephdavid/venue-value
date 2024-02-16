import Login from './Login.jsx'
import MainHeader from './MainHeader/MainHeader.jsx'
import classes from './App.module.css'
import MusicReviewList from './MusicReview/MusicReviewList.jsx'
import {useState} from 'react'
import SignUp from './SignUp.jsx'

function App (){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpToggled, setIsSignUpToggled] = useState(false);

  const toggleLoginStateHandler = (result) => {
    setIsLoggedIn(result);
  }
  const toggleSignUpPageHandler = () => {
    setIsSignUpToggled(!isSignUpToggled);
  }
  return (
  <>
    {(!isLoggedIn && !isSignUpToggled) && <Login toggleLoginState={(result) => {return toggleLoginStateHandler(result)}} toggleSignUpPage={toggleSignUpPageHandler}/>}
    {(isLoggedIn && !isSignUpToggled) && <div className={classes.app}>
      <MainHeader/>
      <MusicReviewList/>
    </div>}
    {isSignUpToggled && <SignUp  toggleSignUpPage={toggleSignUpPageHandler}/>}
  </>
  );
}

export default App;
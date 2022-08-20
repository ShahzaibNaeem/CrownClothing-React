import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link,Outlet } from "react-router-dom";
import "./navigation.styles.scss"
import {ReactComponent as CrownLogo} from "../../assets/crown-logo.svg"
import { SignOutUser } from "../../utils/firebase/firebase.utils";

const Navigation =()=>{
  const {currentUser}=useContext(UserContext);
  
  const signOutHandler=async()=>{
    await SignOutUser();
  }
    return(
      <>
      <div className="navigation">
      <Link className="logo-container" to="/">
      <CrownLogo className="logo"/>
      </Link>
       
        <div className="nav-link-container">
            <Link className="nav-link" to="/shop">Shop</Link>
            {currentUser?
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>:
            <Link className="nav-link" to="/auth">Sign In</Link>}    
        </div>
      </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation;
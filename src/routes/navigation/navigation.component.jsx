import { useContext } from "react";
import { Link,NavLink,Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { SignOutUser } from "../../utils/firebase/firebase.utils";

import {ReactComponent as CrownLogo} from "../../assets/crown-logo.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss"

const Navigation =()=>{
  const {currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);

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
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
            {currentUser?
            <span className="signout-span nav-link" onClick={signOutHandler}>Sign Out</span>:
            <NavLink className="nav-link" to="/auth">Sign In</NavLink>} 
            <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation;
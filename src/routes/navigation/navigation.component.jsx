import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import {ReactComponent as CrownLogo} from "../../assets/crown-logo.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.jsx"
import { LogoContainer, NavigationContainer, NavigationLink, NavigationLinks, NavigationLinkSignOut} from "./navigation.styles.jsx";
import { signOutStart } from "../../store/user/user.action";

const Navigation =()=>{
  const dispatch=useDispatch();
  const currentUser=useSelector(selectCurrentUser);
  const isCartOpen=useSelector(selectIsCartOpen);
  
  const signOutHandler=()=>{
    dispatch(signOutStart())
  }
    return(
      <>
      <NavigationContainer>
      <LogoContainer to="/">
      <CrownLogo className="logo"/>
      </LogoContainer>
       
        <NavigationLinks>
            <NavigationLink to="/shop">Shop</NavigationLink>
            {currentUser?
            <NavigationLinkSignOut onClick={signOutHandler}>Sign Out</NavigationLinkSignOut>:
            <NavigationLink to="/auth">Sign In</NavigationLink>} 
            <CartIcon/>
         </NavigationLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>

        <Outlet/>
      </>
    )
  }

  export default Navigation;
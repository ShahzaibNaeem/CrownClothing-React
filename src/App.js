import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { GlobalStyle } from "./utils/global-styles/global-styles.styles";
import { onAuthStateChangedlistener ,createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe= onAuthStateChangedlistener((user)=>{
      if(user){
            createUserDocumentFromAuth(user); 
          }
      dispatch(setCurrentUser(user))
    }); 
    return unsubscribe;
    // eslint-disable-next-line
  },[])

  return (
    <>
    <GlobalStyle/>
    <Routes>
     <Route path="/" element={<Navigation/>}>
     <Route index element={<Home/>} />
     <Route path="shop/*" element={<Shop/>} />
     <Route path="auth" element={<Authentication/>} />
     <Route path="checkout" element={<CheckOut/>} />
    </Route>
    </Routes>
    </>
  );
}

export default App;

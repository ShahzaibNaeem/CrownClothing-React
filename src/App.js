import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { GlobalStyle } from "./utils/global-styles/global-styles.styles";


const App = () => {
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

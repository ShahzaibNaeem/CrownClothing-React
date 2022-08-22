import { createContext , useState ,useEffect} from "react"

export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>null,
    cartItems:[],
    cartCount:0
})

// ----Function to create new CartItem Array---
const addCartItem=(cartItems,productsToAdd)=>{
const exisitingCartItem=cartItems.find((cartItem)=>cartItem.id===productsToAdd.id)
if(exisitingCartItem){
  return cartItems.map((cartItem)=>
  cartItem.id===productsToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
}
return [...cartItems,{...productsToAdd,quantity:1}]
}

// ---------CartProvider Function------
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    
    useEffect(() => {
      const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
      setCartCount(newCartCount);
    }, [cartItems])
    

    const addItemToCart=(productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd));
    }
    
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,setCartCount}


  return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


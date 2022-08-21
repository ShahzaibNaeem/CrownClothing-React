import { createContext , useState } from "react"

export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>null,
    cartItems:[]
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

    const addItemToCart=(productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd));
    }
    
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems}


  return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


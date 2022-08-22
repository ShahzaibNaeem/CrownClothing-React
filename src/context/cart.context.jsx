import { createContext , useState ,useEffect} from "react"

export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    setCartItems:()=>{},
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    setCartCount:()=>{},
    cartTotal:0,
    setCartTotal:()=>{}
})

// ----Function to create new CartItem Array's---
const addCartItem=(cartItems,productsToAdd)=>{
const exisitingCartItem=cartItems.find((cartItem)=>cartItem.id===productsToAdd.id)
if(exisitingCartItem){
  return cartItems.map((cartItem)=>
  cartItem.id===productsToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
}
return [...cartItems,{...productsToAdd,quantity:1}]
}
// ----Function to remove CartItem from Array's---
const removeCartItem=(cartItems,productsToRemove)=>{
  const exisitingCartItem=cartItems.find((cartItem)=>cartItem.id===productsToRemove.id);
  if(exisitingCartItem.quantity===1){
    return cartItems.filter((cartItem)=>cartItem.id!==productsToRemove.id)
  }
   return cartItems.map((cartItem)=>{
    return cartItem.id===productsToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem}) 
}
// ----Function to clear CartItem from Array---
const clearCartItem=(cartItems,productsToClear)=>{
  const exisitingCartItem=cartItems.find((cartItem)=>cartItem.id===productsToClear.id);
  if(exisitingCartItem){
    return cartItems.filter((cartItem)=>cartItem.id!==productsToClear.id)
  }
}

// ---------CartProvider Function------
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    
    useEffect(() => {
      const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
      setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
      const newCartTotal=cartItems.reduce((total,cartItem)=>{
       return total+cartItem.quantity*cartItem.price
      },0)
      setCartTotal(newCartTotal);
    }, [cartItems])
    

    const addItemToCart=(productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemFromCart=(productToRemove)=>{
      setCartItems(removeCartItem(cartItems,productToRemove));
    }
    const clearItemFromCart=(productToClear)=>{
      setCartItems(clearCartItem(cartItems,productToClear));
    }
    
    const value={isCartOpen,setIsCartOpen,addItemToCart,removeItemFromCart,clearItemFromCart,cartItems,cartCount,setCartCount,cartTotal,setCartTotal}


  return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


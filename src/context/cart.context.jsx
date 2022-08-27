import { createContext , useReducer} from "react"
import { createAction } from "../utils/reducers/reducer.util"

export const CartContext=createContext({
    isCartOpen:false,
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    cartTotal:0
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

// ------------Cart Reducer ---------
const CART_ACTION_TYPES={
  SET_CART_ITEMS:"SET_CART_ITEMS",
  SET_IS_CART_OPEN:"SET_IS_CART_OPEN"
}

const INITIAL_STATE={
  isCartOpen:false,
  cartItems:[],
  cartCount:0,
  cartTotal:0
}

const cartReducer=(state,action)=>{
  const {type,payload}=action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return{
        ...state,...payload
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return{
        ...state,isCartOpen:payload
      }
      default:
        throw new Error(`Unhandle type of ${type} in cartReducer`)
      }
    }

// ---------CartProvider Function------
export const CartProvider = ({children}) => {
  const [{cartItems, cartCount,cartTotal,isCartOpen} ,dispatch]=useReducer(cartReducer,INITIAL_STATE);
    
    const updateCartItemsReducer=(newCartItems)=>{
    const newCartCount=newCartItems.reduce((total,cartItem)=>{
      return total+cartItem.quantity
    },0)
    const newCartTotal=newCartItems.reduce((total,cartItem)=>{
      return total+cartItem.quantity*cartItem.price
     },0)

     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
      cartItems:newCartItems,
      cartCount:newCartCount,
      cartTotal:newCartTotal
    }))
  
    }

    const addItemToCart=(productToAdd)=>{
      const newCartItems=addCartItem(cartItems,productToAdd);
      updateCartItemsReducer(newCartItems);
    }
    const removeItemFromCart=(productToRemove)=>{
      const newCartItems=removeCartItem(cartItems,productToRemove);
      updateCartItemsReducer(newCartItems);
    }
    const clearItemFromCart=(productToClear)=>{
      const newCartItems=clearCartItem(cartItems,productToClear);
      updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen=(bool)=>{
      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));
    }
    
    const value={isCartOpen,setIsCartOpen,addItemToCart,removeItemFromCart,clearItemFromCart,cartItems,cartCount,cartTotal}


  return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


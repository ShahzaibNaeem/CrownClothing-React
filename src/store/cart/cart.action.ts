import {  ActionWithPayload, createAction, withMatcher } from "../../utils/reducers/reducer.util"
import { CategoryItems } from "../categories/category.types"
import { CartItem, CART_ACTION_TYPES } from "./cart.types"


// ----Function to create new CartItem Array's---
const addCartItem = (cartItems:CartItem[], productsToAdd:CategoryItems):CartItem[] => {
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productsToAdd.id)
    if (exisitingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...productsToAdd, quantity: 1 }]
}

// ----Function to remove CartItem from Array's---
const removeCartItem = (cartItems:CartItem[], productsToRemove:CategoryItems):CartItem[] => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productsToRemove.id);
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productsToRemove.id)
    }
    return cartItems.map((cartItem) => {
        return cartItem.id === productsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    })
}

// --------Function to clear CartItem from Array----------
const clearCartItem = (cartItems:CartItem[], productsToClear:CategoryItems):CartItem[] => {
        return cartItems.filter((cartItem) => cartItem.id !== productsToClear.id)  
}


// -----------------Action Types------------------------
export type SetIsCartOpen= ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>
export type SetCartItems=ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>


// -----------------Action Creators------------------------
export const setCartItems=withMatcher((cartItems:CartItem[]):SetCartItems=>
     createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems)
)

export const addItemToCart =(cartItems:CartItem[], productToAdd:CategoryItems) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems:CartItem[], productToRemove:CartItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems:CartItem[], productToClear:CartItem) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return setCartItems(newCartItems);
}

export const setIsCartOpen = withMatcher((boolean:boolean):SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean))





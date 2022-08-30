import { createAction } from "../../utils/reducers/reducer.util"
import { CART_ACTION_TYPES } from "./cart.types"


// ----Function to create new CartItem Array's---
const addCartItem = (cartItems, productsToAdd) => {
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productsToAdd.id)
    if (exisitingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...productsToAdd, quantity: 1 }]
}

// ----Function to remove CartItem from Array's---
const removeCartItem = (cartItems, productsToRemove) => {
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productsToRemove.id);
    if (exisitingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productsToRemove.id)
    }
    return cartItems.map((cartItem) => {
        return cartItem.id === productsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    })
}

// ----Function to clear CartItem from Array---
const clearCartItem = (cartItems, productsToClear) => {
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productsToClear.id);
    if (exisitingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== productsToClear.id)
    }
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)



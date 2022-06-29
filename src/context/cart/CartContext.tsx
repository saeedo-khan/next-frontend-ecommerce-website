import React, { createContext, useContext, useEffect, useState } from 'react'

// types
import {  Products } from '../../interfaces/types';


export interface CartContextProps{
    children: React.ReactNode;
}





// after struggling with saving data inside reducer state 
// i recognize its working if i get data globally from local storage 
// and modify initial state 


// export interface IShoppingCart{
//     shoppingCart: ICartItems;
//     setShoppingCart: React.Dispatch<React.SetStateAction<ICartItems>>;
// }

export interface ICartItems{
    cartItem: Products;
    qty: number;
    id: number;
}


export interface CartContext{
    onAdd: (product: Products, quantity: number) => void;
    shoppingCart: ICartItems[];
    setShoppingCart: React.Dispatch<React.SetStateAction<ICartItems[]>>;
    quanty: number;
    incQuanty: () => void;
    decQuanty: () => void;
    totalPrice: number;
    totalQuantites: number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    setTotalQuantites: React.Dispatch<React.SetStateAction<number>>;
    onRemove: (product: ICartItems) => void;
    toggleCartItemQuanitity: (id:number, value: string) => void;
}



const CartContext = createContext({} as CartContext)




export const CartContextProvider: React.FC<CartContextProps> = ({children}) => {


    const [shoppingCart, setShoppingCart] = useState<ICartItems[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [totalQuantites, setTotalQuantites] = useState<number>(0)
    const [quanty, setQuanty] = useState<number>(1)

    // if(typeof window !== 'undefined'){
    //     if(localStorage.getItem('localCart') !== null){
    //         const data = JSON.parse(localStorage.getItem('localCart') || '')
    //         setShoppingCart(data)
    //     }
    // }
    

    useEffect(() => {
        
        // const price = JSON.parse(localStorage.getItem('totalPrice') || '')
        // const qty = JSON.parse(localStorage.getItem('totalQty') || '')
        // const data = JSON.parse(localStorage.getItem('localCart') || '')
        if(localStorage.getItem('localCart')){
            const data = JSON.parse(localStorage.getItem('localCart') || '')
            setShoppingCart(data)
        }
        if(localStorage.getItem('totalQty')){
            const qty = JSON.parse(localStorage.getItem('totalQty') || '')
            setTotalQuantites(qty)
        }
        if(localStorage.getItem('totalPrice')){
            const price = JSON.parse(localStorage.getItem('totalPrice') || '')
            setTotalPrice(price)
        }
        
    },[])

    useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(shoppingCart))
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
        localStorage.setItem('totalQty', JSON.stringify(totalQuantites))
    }, [shoppingCart])

    
    let foundProduct: any ;
    let index: number;


    const onAdd = (product: Products, quantity: number) => {
        const checkProductInCart = shoppingCart.find(item => item.id === product.data.id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.data.attributes.price * quantity)
        setTotalQuantites((prevTotalQuantites) => prevTotalQuantites + quantity)

        if(checkProductInCart){

            const updatedCartItems = shoppingCart.map((item) => item.id === product.data.id ? {...item, qty: item.qty + quantity}: item)
            
            setShoppingCart(updatedCartItems)

        }else{
            setShoppingCart([...shoppingCart, {cartItem: product, qty: quantity, id: product.data.id }])
        }

        setQuanty(1)
    }

    const onRemove = (product: ICartItems) => {
        foundProduct = shoppingCart.find((item) => item.id === product.id)
        const newCartItem = shoppingCart.filter((item) => item.id !== product.id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.cartItem.data.attributes.price * foundProduct.qty)
        setTotalQuantites(prevTotalQuantites => prevTotalQuantites - foundProduct.qty)
        setShoppingCart(newCartItem)
    }


    const toggleCartItemQuanitity = (id:number, value:string) => {
        foundProduct = shoppingCart.find((item) => item.id === id)
        index = shoppingCart.findIndex((product) => product.id === id)
        const newShoppingCart = shoppingCart.filter((item) => item.id !== id)


        if(value === 'inc'){
            setShoppingCart([...newShoppingCart, {...foundProduct, qty: foundProduct.qty + 1}].reverse())
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.cartItem.data.attributes.price)
            setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + 1)
        }else if(value === 'dec') {
            if(foundProduct.qty > 1){
                setShoppingCart([...newShoppingCart, { ...foundProduct, qty: foundProduct.qty - 1}].reverse())
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.cartItem.data.attributes.price)
                setTotalQuantites((prevTotalQuantites) => prevTotalQuantites - 1)
            }
        }
    }



    const incQuanty = () => {
        setQuanty(prevQty => prevQty + 1)
    }

    const decQuanty = () => {
        setQuanty((prevQty) => {
            if(prevQty -1 < 1) return 1

            return prevQty -1
        })
    }

    return(
        <CartContext.Provider 
        value={{ 
            onAdd,
            shoppingCart,
            setShoppingCart,
            quanty,
            incQuanty,
            decQuanty,
            totalPrice,
            totalQuantites,
            setTotalQuantites,
            setTotalPrice,
            onRemove,
            toggleCartItemQuanitity
            }}>
            {children}
        </CartContext.Provider>
    )
}


export default function useCart(){
    return useContext(CartContext)
}
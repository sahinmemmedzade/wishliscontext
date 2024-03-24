import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wish, setWish] = useState([]);

    useEffect(() => {
        const wishlist = localStorage.getItem("wishlist");
        if (wishlist) {
            setWish(JSON.parse(wishlist));
        }
    }, []);

    const addToWishlist = (product) => {
        setWish((currentWishlist) => {
            const existingProductIndex = currentWishlist.findIndex((item) => item.id === product.id);
            if (existingProductIndex > -1) {
                return currentWishlist.filter((item) => item.id !== product.id);
            } else {
                const updatedWishlist = [...currentWishlist, product];
                return updatedWishlist;
            }
        });
    };
    const deleteProduct=(product)=>{
        setWish((currentWishlist)=>{
            return currentWishlist.filter((item)=>item.id!==product.id)
        })
    }
    const deleteAllWish=()=>{
        setWish([])
    }
    const addToBasketWish=(product)=>{
        setWish((currentWishlist)=>{
            return currentWishlist.filter((item)=>item.id!==product.id)
        })
        return product
    }
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wish));
    }, [wish]);

    return (
        <WishlistContext.Provider value={{ addToWishlist,wish,deleteProduct,deleteAllWish,addToBasketWish}}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;

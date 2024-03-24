import { createContext, useEffect, useState } from "react";


const BasketContex=createContext()

export const BasketProvider=({children})=>{
    const [basket,setBasket]=useState([])
    useEffect(() => {
        const savedBasket = localStorage.getItem("basket");
        if (savedBasket) {
            setBasket(JSON.parse(savedBasket));
        }
    }, []);
      
    function addBasket(product) {
        setBasket((currentBasket) => {
            const existingProductIndex = currentBasket.findIndex((item) => item.id === product.id)
            if (existingProductIndex > -1) {
              const updatedBasket = [...currentBasket]
              updatedBasket[existingProductIndex].count += 1
              return updatedBasket
            } else {
         
              return [...currentBasket, { ...product}]
            }
          });
        }
    
        const increaseCount=(product)=>{
          setBasket((currentBasket)=>{
            const existingProductIndex = currentBasket.findIndex((item) => item.id === product.id)
            const updatedBasket = [...currentBasket]
            updatedBasket[existingProductIndex].count+=1
            return updatedBasket
          })
        }
        const decreaseCount=(product)=>{
          setBasket((currentBasket)=>{
            const existingProductIndex = currentBasket.findIndex((item) => item.id === product.id)
            let updatedBasket = [...currentBasket]
            if (updatedBasket[existingProductIndex].count>1) {
            updatedBasket[existingProductIndex].count-=1
            return updatedBasket
            }
           else{
              return updatedBasket.filter((item)=>item.id!==product.id)
           }
          })
        }
        const deleteItem=(product)=>{
          setBasket((currentBasket)=>{
            const updatedBasket = currentBasket.filter((item) => item.id !== product.id);
            return updatedBasket
          })
        }
        const deleteAll=()=>{
          setBasket((currentBasket)=>{
            const updatedBasket=[]
            return updatedBasket
          })
        }
        const showProductWish=(product)=>{
          setBasket((currentBasket) => {
            const existingProductIndex = currentBasket.findIndex((item) => item.id === product.id)
            if (existingProductIndex > -1) {
              const updatedBasket = [...currentBasket]
              updatedBasket[existingProductIndex].count += 1
              return updatedBasket
            } else {
         
              return [...currentBasket, { ...product}]
            }
          });
        }
        useEffect(() => {
          localStorage.setItem("basket", JSON.stringify(basket));
        }, [basket]);

    return(
        <BasketContex.Provider value={{addBasket,basket,increaseCount,decreaseCount,deleteItem,deleteAll,showProductWish}}>
            {children}
        </BasketContex.Provider>
    )
}


export default BasketContex
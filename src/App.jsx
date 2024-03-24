import { useContext } from 'react';
import './App.css';
import BasketContex from './contexts/BasketContex';
import WishlistContex from './contexts/WishlistContex';

const products=[
  {id:1,price:15,name:"qoz",image:"https://strgimgr.umico.az/sized/840/544408-0923976bfd8111502c27bbf7661e6c4c.jpg",count:1},
  {id:2,price:10,name:"findiq",image:"https://lezizcerez.az/168/findiq.jpg",count:1},
  {id:3,price:3,name:"shekerbura",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeOvfdzLxzpv9ugDzNiK5miiwFJIWalKlIg&usqp=CAU",count:1},
  {id:4,price:7,name:"paxlava",image:"https://upload.wikimedia.org/wikipedia/commons/b/bf/Az%C9%99rbaycan_paxlavas%C4%B1_02.jpg",count:1}
]

function App() {
  const {addBasket,basket,increaseCount,decreaseCount,deleteItem,deleteAll,showProductWish}=useContext(BasketContex)
  const {wish,addToWishlist,deleteProduct,deleteAllWish,addToBasketWish}=useContext(WishlistContex)
  const addFunction=(item)=>{
    showProductWish(item)
    addToBasketWish(item)
  }
  return (
    <>
    <div className='basket'>
      <h1>Basket</h1>
      {basket && basket.map((item)=>(
        <div key={item.id}>
           <img src={item.image} alt="" />
           <h3>{item.name}</h3>
           <p>{item.price}</p>
           <button onClick={()=>decreaseCount(item)}>-</button><p>{item.count}</p><button onClick={()=>increaseCount(item)}>+</button>
           <button onClick={()=>deleteItem(item)}>Delete Item</button>
        </div>
      ))}
      <button onClick={()=>deleteAll()}>Delete All</button>
    </div>
    <div className='wishlist'>
      <h1>Wishlist</h1>
      {wish && wish.map((item)=>(
        <div key={item.id}>
          <img src={item.image} alt="" />
           <h3>{item.name}</h3>
           <p>{item.price}</p>
           <button onClick={()=>addFunction(item)}>Add to Basket</button>
           <button onClick={()=>deleteProduct(item)}>Delete Item</button>
        </div>
      ))}
      <button onClick={()=>deleteAllWish()}>Delete All</button>
    </div>
    <div className='productsDiv'>
      {products && products.map((product)=>(
        <div key={product.id}>
           <img src={product.image} alt="" />
           <h3>{product.name}</h3>
           <p>{product.price}</p>
           <button onClick={() => addBasket(product)}>Add to Basket</button>
           <button onClick={()=>addToWishlist(product)}>Add to Wishlist</button>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;


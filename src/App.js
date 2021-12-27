import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {


  constructor(){
    super();
    this.state={
        products:[
            {
                title:'Macbook-air',
                price:9999,
                qty:0,
                img:'https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                id:1
            },
            {
                title:"Apple-Watch",
                price:50000,
                qty:0,
                img:'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
                id:2

            },

            {
             title:'Airpods',
             price:21000,
             img:'https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2836&q=80',
             qty:0,
             id:3   
            },
            {
                title:"Iphone",
                price:72000,
                img:'https://images.unsplash.com/photo-1634618774328-613d0f997911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                qty:0,
                id:4
            }
        ]
    }


  

}

handleIncreaseQuantity=(product)=>{
  const {products}=this.state;
  const index=products.indexOf(product);
  products[index].qty+=1
  this.setState(
      products
  )
}
handleDecreaseQuantity=(product)=>{
const {products}=this.state;
if(product.qty==0){
    return
}
const index=products.indexOf(product)
products[index].qty-=1;
this.setState(
    products
)
}
handleDeleteQuantity=(id)=>{
const {products}=this.state
const items=products.filter((item)=>item.id !== id);
this.setState(
    {
        products:items
    }
)

}
getCartTotal=()=>{
  const {products}=this.state;
  let totalPrice=0;
  products.map((product)=>{
    totalPrice=totalPrice+product.qty*product.price;
  })
  return totalPrice;
}
getCartCount=()=>{
  const {products}=this.state;

  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
}


  render(){
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar

      count={this.getCartCount()}
      />
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      deleteItem={this.handleDeleteQuantity}
      
      />
       <div style={{fontSize:18,padding:'20px 10px'}}>Total :{this.getCartTotal()}</div>
      
    </div>
  );
  }
}

export default App;

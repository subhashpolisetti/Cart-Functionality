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
                img:'',
                id:1
            },
            {
                title:"Apple-Watch",
                price:50000,
                qty:0,
                img:'',
                id:2

            },

            {
             title:'Airpods',
             price:21000,
             img:'',
             qty:0,
             id:3   
            },
            {
                title:"Iphone",
                price:72000,
                img:'',
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
      
    </div>
  );
  }
}

export default App;

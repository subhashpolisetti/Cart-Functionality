import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();

        this.state={
            product:{
                title:'Macbook air',
                price:9999,
                qty:0
            }
        }
    }
    
    increaseQuantity=()=>{
        const{product}=this.state;
        // product.qty+=1;
       

        this.setState(

            {product:{
                ...product,
                qty: product.qty+1
            }}
            
        )

    }

    render(){

        const {title,price,qty}=this.state.product;
        return(
            <div>

            <div className="cart-item">
            <div className="left-block">
                <img
                style={styles.image}
                />
            </div>
            <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'#777',marginTop:10}}>Rs{price}</div>
            <div style={{color:'#777',marginTop:10}}>Qty:{qty}</div>
            <div className="cart-item-actions">
            <img alt="increase"
             src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
             className="action-icons"
             onClick={this.increaseQuantity}
             
             />
            <img alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
            
            />

            <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            
            />
            
            </div>


            </div>



            </div>


            </div>
        );


    }



}
const styles={
    image:{
        height:125,
        width:125,
        background:'#ccc',
        borderRadious:4
    }
}
export default CartItem;
import React from "react";




const CartItem=(props)=>{ 
    
    

       const {title,price,qty}=props.product;

       const {onIncreaseQuantity,product,onDecreaseQuantity,deleteItem}=props;
        
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
             onClick={()=>{onIncreaseQuantity(product)}}
             
             />
            <img alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/56/56889.png"
            onClick={()=>{onDecreaseQuantity(product)}}
            />

            <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={()=>{deleteItem(product.id)}}
            />
            
            </div>


            </div>



            </div>


            </div>
        );


    



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
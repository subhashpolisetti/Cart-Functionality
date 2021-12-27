import React from "react";


const Navbar=(props )=>{
    
        return(

            <div style={styles.nav}>
                
               <div>
                   <img
                   style={styles.mycartIcon}

                   src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"

                   
                   ></img>
                   <span style={styles.carttext}>My Cart</span>
               </div>
                 <div>
                     <img
                     style={styles.cartIcon}
                     src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1640619961~hmac=5f932d3b0091f93dcf9d020cf91af853"
                     />
                     <span style={styles.cartcount}>{props.count}</span>
                 </div>
                



            </div>


        )
    




}

const styles={
nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
},
carticoncontainer:{
    position:'relative'
},

cartcount:{
    background:'red',
    borderRadius:'50%',
    padding:'4px 6px',
    position:'absolute',
    right:0,
    top:6
},
cartIcon:{
    
    height:32,
    marginRight:10
    
},
mycartIcon:{
    height:40,
    marginRight:"0px"
},
carttext:{
    fontSize:25,
    color:'red',
    marginLeft:10,
    textshadow: '5px 5px #ff0000'
}
}

export default Navbar;
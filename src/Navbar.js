import React from "react";


const Navbar=(props )=>{
    
        return(

            <div style={styles.nav}>

                <div >
                <img
                src="https://cdn-icons-png.flaticon.com/512/1124/1124199.png"
                style={styles.carticon}
                />
                <span style={styles.cartcount}>
                {props.count}
                </span>
                </div>



            </div>


        )
    




}

const styles={
carticon:{
    height:32,
    marginRight:20
},
nav:{
    height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
},
carticoncontainer:{
    position:'relative'
},
cartcount:{
    background:'yellow',
    borderRadius:'50%',
    padding:'4px 6px',
    position:'absolute',
    right:0,
    top:6
}

}

export default Navbar;
import {useState, useEffect} from "react";
import {UserID} from './user';

function CartIcon(){

const [cartItem, setCartItem] = useState([]);
const [userId, setUser] = useState(0);
const user_id = UserID();

useEffect(()=>{
    getCartItems();
    const intervalId = setInterval(() => {
        getCartItems(); 
    }, 3000);

    return () => clearInterval(intervalId);
},[user_id]);

const getCartItems = async()=>{
    
    try {
        const response = await fetch(`/api/getCartItems?user=${user_id}`);
        
        if(!response.ok){
            console.log("error");
        }
        const data = await response.json();
        setCartItem(data);
        
    } catch (error) {
        console.log(error);
    }
    
}
    return(
        <div>
            <a href="/cart" className="position-relative me-4 my-auto">
            <i className="fa fa-shopping-bag fa-2x"></i>
            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"  
            style={{top:"0px",left:"15px",height:"20px",minWidth:"20px"}}>{cartItem.length}</span>
            </a>
        </div>
    );
}

export {CartIcon};
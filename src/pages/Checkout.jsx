import { useAppStore } from "../store/AppStore";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Checkout(){
    const{
        notify,
        cartTotal,
        placeOrder
    } = useAppStore();
    const Navigate = useNavigate()
    const [shipping, setShipping] = useState({name:'', address:'', phone:''})
    function submit(e){
        e.preventDefault()
        if(!user){
            notify('please login to the account')
            Navigate('/login')
        }
        const ok = placeOrder(shipping)
        if (ok) Navigate('/orders')
         
    }
return (
    <div className="container">
            <h2>Shipping Details</h2>
                <label>
                    name
                </label>
                <input type="text" placeholder="Name" value={shipping.name} onChange={e=>setShipping({...shipping, name:e.target.value})} />
                <label>
                    address
                </label>
                <input type="text" placeholder="Address" value={shipping.address} onChange={e=>setShipping({...shipping, address:e.target.value})} />
                <label>
                    phone
                </label>
                <input type="text" placeholder="Phone" value={shipping.phone} onChange={e=>setShipping({...shipping, phone:e.target.value})} />
                <h3>Total: ${cartTotal.toFixed(2)}</h3>

                <button onClick={submit}> Place Order </button>
                
    </div>
)    
}
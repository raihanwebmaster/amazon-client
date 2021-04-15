import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const uid = user?.uid
   
     const [orders, setOrders] = useState([]);
    useEffect(()=>{
        //http://localhost:5000/
        //https://amazon-server-it.herokuapp.com/
        fetch('http://localhost:5000/userOrdered?uid='+uid,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data.reverse());
        })
    },[uid])
    console.log(orders);
    return (
        <div className='orders'>
        <h1>{!user ? "don't find the order" :" Your Orders"}</h1><br/>
        <h4 >Hello {!user ? 'Guest &&  please signIn / signUp ' : user.email.substring(0, user.email.indexOf("@"))}</h4>
        

        <div className='orders__order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    </div>
    )
}

export default Orders

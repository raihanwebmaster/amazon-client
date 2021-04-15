import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const uid = user.uid
   
     const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://amazon-server-it.herokuapp.com/userOrdered?uid='+uid,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrders(data.reverse());
        })
    },[uid])
    console.log(orders);
    // useEffect(() => {
    //     if(user) {
    //         db
    //         .collection('users')
    //         .doc(user?.uid)
    //         .collection('orders')
    //         .orderBy('created', 'desc')
    //         .onSnapshot(snapshot => (
    //             setOrders(snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 data: doc.data()
    //             })))
    //         ))
    //     } else {
    //         setOrders([])
    //     }
    // },[user])
    return (
        <div className='orders'>
        <h1>Your Orders</h1><br/>
        <h4 >Hello {!user ? 'Guest' : user.email.substring(0, user.email.indexOf("@"))}</h4>
        

        <div className='orders__order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    </div>
    )
}

export default Orders

import React from 'react';
import Customer from './Customer';
import '../../style.css';

const CustomerList = (props) => {
  const customers = props.customers.map((customer, index) => {
    return (
      <li key={index} className="user-object">
        <Customer customer={customer}/>
      </li>
    )
  })

  return (
    <div className="list-container">
    <h1 className="page-title">Registered Customers</h1>
      <ul>
        {customers}
      </ul>
    </div>
  )
}

export default CustomerList;

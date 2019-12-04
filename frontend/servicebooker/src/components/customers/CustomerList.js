import React from 'react';
import Customer from './Customer';

const CustomerList = (props) => {
  const customers = props.customers.map((customer, index) => {
    return (
      <li className="user-object" key={index}>
        <Customer customer={customer}/>
      </li>
    )
  })

  return (
    <ul>
      {customers}
    </ul>
  )
}

export default CustomerList;

import React from 'react';

const CustomerEditForm = (props) => {
  if(!props.customer){
    return "Loading...."
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const customer = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      tellNo: event.target.tellNo.value,
      location: event.target.location.value,
      password: event.target.password.value
    }
    props.handleUpdate(customer);
  }

  return(
    <div>
      <h1 className="page-title">Edit your details</h1>
      <div  className="form">
        <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={props.customer.name} name="name"/>
        <input type="text" defaultValue={props.customer.address} name="address"/>
        <input type="text" defaultValue={props.customer.email} name="email"/>
        <input type="text" defaultValue={props.customer.tellNo} name="tellNo"/>
        <input type="text" defaultValue={props.customer.location} name="location"/>
        <input type="text" defaultValue="Password" name="password"/>
        <button type="submit">Edit {props.customer.name}</button>
        </form>
      </div>
    </div>
  )

}

export default CustomerEditForm;

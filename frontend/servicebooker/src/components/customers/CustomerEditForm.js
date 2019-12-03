import React from 'react';

const CustomerEditForm = (props) => {
  if(!props.customer){
    return "Loading...."
  }

  return(
    <div>
      <form>
      <input type="text" defaultValue={props.customer.name} name="name"/>
      <input type="text" defaultValue={props.customer.address} name="address"/>
      <input type="text" defaultValue={props.customer.email} name="email"/>
      <input type="text" defaultValue={props.customer.tellNo} name="tellNo"/>
      <input type="text" defaultValue={props.customer.location} name="location"/>
      <input type="text" defaultValue="Password" name="password"/>
      <button type="submit">Edit {props.customer.name}</button>
      </form>
    </div>
  )

}

export default CustomerEditForm;

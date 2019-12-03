import React from 'react';

const FreelancerEditForm = (props) => {
  if (!props.freelancer){
    return "Loading...."
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const freelancer = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      tellNo: event.target.tellNo.value,
      location: event.target.location.value,
      password: event.target.password.value
    }
    props.handleUpdate(freelancer);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={props.freelancer.name} name="name"/>
        <input type="text" defaultValue={props.freelancer.address} name="address"/>
        <input type="text" defaultValue={props.freelancer.email} name="email"/>
        <input type="text" defaultValue={props.freelancer.tellNo} name="tellNo"/>
        <input type="text" defaultValue={props.freelancer.location} name="location"/>
        <input type="text" defaultValue="Password" name="password"/>
        <button type="submit">Edit {props.freelancer.name}</button>
      </form>
    </div>
  )

}

export default FreelancerEditForm;

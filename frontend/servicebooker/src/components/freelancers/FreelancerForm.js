import React from 'react';

const FreelancerForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const freelancer = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      tellNo: event.target.tellNo.value,
      location: event.target.location.value,
      password: event.target.password.value,
      userType: "freelancer"
    }
    props.handlePost(freelancer);
  }

  return(
    <div>
      <h1 className="page-title">Register Your Details</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="Address" name="address"/>
          <input type="text" placeholder="Email" name="email"/>
          <input type="text" placeholder="Telephone Number" name="tellNo"/>
          <input type="text" placeholder="Location" name="location"/>
          <input type="text" placeholder="Password" name="password"/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )

}

export default FreelancerForm;

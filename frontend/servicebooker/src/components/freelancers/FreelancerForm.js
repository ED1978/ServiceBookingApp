import React from 'react';

const FreelancerForm = (props) => {
  console.log(props)

  function handleSubmit(event){
    event.preventDefault();
    const freelancer = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      telNo: event.target.telNo.value,
      location: event.target.location.value,
      category: event.target.category.value
    }
    props.handlePost(freelancer);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name"/>
        <input type="text" placholder="Address" name="address"/>
        <input type="text" placeholder="Email" name="email"/>
        <input type="text" placeholder="Telephone Number" name="telNo"/>
        <input type="text" placeholder="Location" name="location"/>
        <input type="text" placeholder="Category" name="category"/>
        <button type="submit">Save</button>
      </form>
    </div>
  )

}

export default FreelancerForm;

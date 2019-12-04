import React from 'react';

const JobApplication = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const application = {
      "name": event.target.name.value,
      "address": event.target.address.value,
      "phone": event.target.phone.value,
      "email": event.target.email.value,
      "location": event.target.location.value,
      "job": props.job_url
    }
    props.handleAppPost(application);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name"/>
        <input type="text" placeholder="Address" name="address"/>
        <input type="number" placeholder="07400..." name="phone"/>
        <input type="email" placeholder="sample@gmail.com" name="email"/>
        <input type="text" placeholder="Location" name="location"/>
        <button type="submit">Apply</button>
      </form>
    </div>
  )
}

export default JobApplication;

import React from 'react';

const CustomerForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const job = {
      "title": event.target.title.value,
      "location": event.target.location.value,
      "description": event.target.description.value,
      "price": event.target.price.value,
      "duration": event.target.duration.value,
      "customer": props.url
    }
    props.handleCustomerPost(job);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title"/>
        <input type="text" placeholder="Location" name="location"/>
        <input type="text" placeholder="Description" name="description"/>
        <input type="number" step="0.1" placeholder="Price" name="price"/>
        <input type="duration" placeholder="Duration" name="duration"/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default CustomerForm;

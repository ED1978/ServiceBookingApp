import React from 'react';

const CustomerReviewForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const rating = {
      "rating": event.target.rating.value,
      "date": event.target.date.value,
      "customer": props.url
    }
    props.handleCustomerPost(rating);
  }

  return(
    <div>
      <h1 className="page-title">Leave A Review</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="number" min="1" max="10" placeholder="1-10" step="0.1" name="rating"/>
          <input type="date" placeholder="Date" name="date"/>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default CustomerReviewForm;

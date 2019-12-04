import React from 'react';

const TestApp = (props) => {
  const options = props.freelancers.map((freelancer, index) => {
    return <option key={index} value={freelancer._links.self.href}>{freelancer.name}</option>
  })

  const handleSubmit = (event) => {
    event.prevenDefault();
    const application = {
      "freelancer": event.target.freelancer.value
    }
    props.handleAppPost(application)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="freelancer">
          {options}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default TestApp;

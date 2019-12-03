import React from 'react';

const JobApplyForm = (props) => {
  if(!props.job){
    return "Loading...."
  }

  const freelancerOptions = props.freelancers.map((freelancer, index) => {
    return <option key={index} value={freelancer._links.self.href}>{freelancer.name}</option>
  })

  return(
    <div>
      <form>
      <select name="ship">
        {freelancerOptions}
      </select>
      <button type="submit">Apply</button>
      </form>
    </div>
  )
}

export default JobApplyForm;

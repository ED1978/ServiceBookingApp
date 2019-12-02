import React from 'react';
import {Link} from 'react-router-dom';

const Job = (props) => {
  const url = "/jobs/" + props.job.id;

  return(
    <React.Fragment>
      <Link to={url} className="name">
        {props.job.title}
      </Link>
    </React.Fragment>
  )
}

export default Job;

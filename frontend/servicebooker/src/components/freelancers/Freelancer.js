import React from 'react';
import {Link} from "react-router-dom";

const Freelancer = (props) => {

  const url = "/freelancers/" + props.freelancer.id;

  return(
    <React.Fragment>
      <Link to={url} className="name">
        {props.freelancer.name}
      </Link>
    </React.Fragment>
  )

}

export default Freelancer;

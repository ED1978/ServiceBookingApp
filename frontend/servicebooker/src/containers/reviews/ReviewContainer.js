import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReviewList from '../../components/reviews/ReviewList';
import ReviewDetail from '../../components/reviews/ReviewDetail';

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.findReviewById = this.findReviewById.bind(this);
  }

  findReviewById(id) {
    const review = this.props.reviews.find((review) => {
      return review.id === parseInt(id);
    });
    return review;
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>

          <Route exact path="/reviews" render={(props) => {
            return <ReviewList reviews={this.props.reviews} />
          }} />

          <Route exact path="/reviews/:id" render={(props) => {
            const id = props.match.params.id;
            const review = this.findReviewById(id);
            return <ReviewDetail review={review}/>
          }} />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default ReviewContainer;

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  getReview = reviewsData => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsData[
      activeReviewIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <button
          data-testid="leftArrow"
          className="btn"
          onClick={this.onClickLeftArrow}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="review-container">
          <img
            src={reviewsData[activeReviewIndex].imgUrl}
            alt={reviewsData[activeReviewIndex].username}
          />
          <p className="username">{reviewsData[activeReviewIndex].username}</p>
          <p>{reviewsData[activeReviewIndex].companyName}</p>
          <p>{reviewsData[activeReviewIndex].description}</p>
        </div>
        <button
          data-testid="rightArrow"
          className="btn"
          onClick={this.onClickRightArrow}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel

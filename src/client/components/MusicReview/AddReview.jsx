import { useState } from 'react'
import ReviewContainer from './ReviewContainer.jsx'
import styling from './AddReview.module.css'
export default function AddReview({ addReview }) {

  const [reviewData, setReviewData] = useState({venue: '', artist: '', review: '', image: '', id: 0 })

  const onChangeHandler = (evt) => {
    evt.preventDefault();
    setReviewData((previousData) => {
      return { ...reviewData, [evt.target.name]: evt.target.value }
    })
  }

  //create a doc in the mongodb and store the data with its unique ID

  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    addReview(reviewData);
    setReviewData({ username: '', venue: '', artist: '', review: '', id: 0 })
  }

  // const onSubmitHandler = async (evt) => {
  //   evt.preventDefault();
  //   console.log('SUBMIT handler hit')
  //   const response = await fetch('/addReview', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(reviewData),
  //   })
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  //   // if (responseJson.valid) {
  //   //   setSuccessfulSignUp(true)
  //   // } else {
  //   //   setInvalidSignUp(true);
  //   // }
  //   addReview(responseJson);
  //   setReviewData({ venue: '', artist: '', review: '', image: '' })
  // }

  return (
    <ReviewContainer>
      <form className={styling.form} onSubmit={onSubmitHandler}>
        {/* <label className={styling.label} htmlFor='username' >Username</label>
    change username to the user logged in if we have more time
    <input
    className={styling.input}
    type='text'
    placeholder='Username'
    value={reviewData.username}
    onChange={onChangeHandler}
    id='username'
    name='username'
    /> */}
        <label className={styling.label} htmlFor='venue'>Venue</label>
        <input
          className={styling.input}
          type='text'
          placeholder='venue'
          value={reviewData.venue}
          onChange={onChangeHandler}
          id='venue'
          name='venue'
        />
        <label className={styling.label} htmlFor='artist'>Artist</label>
        <input
          className={styling.input}
          type='text'
          placeholder='artist'
          value={reviewData.artist}
          onChange={onChangeHandler}
          id='artist'
          name='artist'
        />
        <label className={styling.label} htmlFor='review'>Review</label>
        <input
          className={styling.input}
          type='text'
          placeholder='review'
          value={reviewData.review}
          onChange={onChangeHandler}
          id='review'
          name='review'
        />
        <label className={styling.label} htmlFor='review'>Add Image</label>
        <button className={styling.button} type='submit'>Add Review</button>
      </form>
    </ReviewContainer>
  )
}
import styling from './MusicReviewList.module.css'
import { useState, useEffect } from 'react'
import AddReview from './AddReview.jsx'
import MusicReview from './MusicReview.jsx'
import ReviewContainer from './ReviewContainer.jsx'
export default function MusicReviewList() {
  const [musicReviewList, setMusicReviewList] = useState([]);
  const urlImageArray = ["https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2023/10/16/202430_1365891.jpg.1500x1125_q95_crop-smart_upscale.jpg", "https://cdn.choosechicago.com/uploads/2019/06/chicago-concert-venues.jpg", "https://images.foxtv.com/static.foxla.com/www.foxla.com/content/uploads/2019/08/764/432/B684ED893D6F47FB900DADCFF496D77E.jpg?ve=1&tl=1", "https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2022/04/MERa1bdff6764a198b6429b6f937c7c4_outsidelands10xx-scaled.jpg"]


  // useEffect(() => {
  //   const fetchInitialReviewList = async () => {
  //     const response = await fetch('/reviewList', {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //     const responseJson = response.json();
  //     console.log(responseJson)
  //     setMusicReviewList([])
  //   }

  //   fetchInitialReviewList();
  // }, [])

  const addReviewHandler = (reviewData) => {
    setMusicReviewList((currData) => {
      return [...musicReviewList, reviewData]
    })
  }

  const deleteHandlerFunction = (id) => {
    console.log('Helloooooo')
    setMusicReviewList((currReviewList) => {
      // const result = currReviewList.filter((el, index) => {
      //   if (index !== id) {
      //     return el;
      //   }
      // })
      // return result;
      const result = currReviewList.slice(0, currReviewList.length-1)
      return result;
    })
  }

  return (<div >
    <ul className={styling.users}>
      <AddReview className={styling.addReview} addReview={(reviewData) => {
        return addReviewHandler(reviewData)
      }} />
      {musicReviewList.map((el, ind) => {
        return <div key={ind}><img className={styling.image} src={urlImageArray[ind]} />
          <ReviewContainer>
            <MusicReview key={ind} username={el.username} venue={el.venue} artist={el.artist} review={el.review} id={ind} deleteHandler={(id) => deleteHandlerFunction(id)} />
          </ReviewContainer>
        </div>
      })}
    </ul>
  </div>)
}
import styling from './MusicReview.module.css'

export default function MusicReview({ username, venue, artist, review, deleteHandler, id }) {

  return (
    <div>
      <ul>
        {/* <li className={styling.li}><h3>{username}</h3></li> */}
        <li className={styling.li}><h4>{venue}</h4></li>
        <li className={styling.li}><h4>{artist}</h4></li>
        <li className={styling.li}><h5>{review}</h5></li>
      </ul>
      <button className={styling.button} onClick={(id) => deleteHandler(id)}>Delete</button>
    </div>
  )
}


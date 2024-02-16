import styling from './ReviewContainer.module.css'

export default function ReviewContainer ({children}) {

  return <div className={styling.reviewContainer}>{children}</div>
}
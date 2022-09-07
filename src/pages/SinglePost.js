import { Link, useLocation } from 'react-router-dom'

const SinglePost = () => {
  const location = useLocation()

  const { title, date, blogPost, rating, img } = location.state
  
  return (
    <div className='single-post'>
      <div className='single-review'>
        <img src={img} alt='' />
        <h1 className='game-title'>{title} </h1>
        <br/>
        <p><b className='bold'>Review Summary: </b>{blogPost} </p>
        <br/>
        <p><b className='bold'>Rating: </b>{rating}</p>
        <br/>
        <p><b className='bold'>Date Posted: </b>{date}</p>
      </div>

        <div className='buttons'>
          <button className='admin-btn'>
            <Link state={location.state} to='/admin'>Edit Post</Link>
          </button>
      </div>
    </div>
  )
}

export default SinglePost

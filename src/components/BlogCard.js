import { Link } from 'react-router-dom'

const BlogCard = ({ entry }) => {
  return (
    <Link state={entry} to='/single-post'>
      <div className='blog-card-container'>
        <img src={entry.img} alt='' />
        <h1 className='game-title'>{entry.title}</h1>
        <br/>
        <p><b className='bold'>Review Summary: </b>{entry.blogPost}</p>
        <br/>
        <p> <b className='bold'>Date Posted: </b>{entry.date}</p>
        <br/>
        <p> <b className='bold'>Rating: </b>{entry.rating}</p>
      </div>
    </Link>
  )
}

export default BlogCard

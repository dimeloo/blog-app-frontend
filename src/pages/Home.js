import { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'

const Home = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error(err))
  }, [])

  const allEntries = entries.map((entry, index) => {
    return <BlogCard key={index} entry={entry} index={index} />
  })

  return (
    <div className='container'>
      <h1 className='blog-title'>Game Reviews Blog</h1>
      <div className='blog-entries'>{allEntries} </div>
    </div>
  )
}

export default Home

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminChanges = () => {
  const [form, setForm] = useState({})
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { title, date, blogPost, rating, img } = location.state

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
/***************************************************************************/
// FUNCTION TO DELETE BLOG ENTRY BY NAME USING THE HTTP DELETE METHOD
const handleDelete = (event) => {
  event.preventDefault()

  fetch(`${process.env.REACT_APP_API_ENDPOINT}?title=${title}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => navigate('/'))
    .catch((err) => console.error(err))

}
/***************************************************************************/
// FUNCTION TO UPDATE A BLOG ENTRY BY ID NUMBER USING THE HTTP PUT METHOD
const handleUpdate = (event) => {
  event.preventDefault()
  fetch(`${process.env.REACT_APP_API_ENDPOINT}?title=${title}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then((response) => response.json())
    .then((data) => setForm(data))
    .catch((err) => console.error(err))
}


return(
  <div className='admin-container'>
    <div className='single-review'>
    <img className='admin-img' src={img} alt='' />
      <h1 className='game-title'>{title}</h1>
      <p><b className='bold'>Review: </b> {blogPost}</p>
      <p><b className='bold'>Rating: </b> {rating}</p>
      <p><b className='bold'>Date: </b> {date}</p>
      {showForm && (
        <form className='add-review'>
          <label htmlFor=''>Review Title: </label>
          <input
            onChange={(event) => handleForm(event)}
            type='text'
            placeholder='ex. review title'
            name='title'
            id='title'
            defaultValue={title}
          />
          <br/>

          <label htmlFor=''>Review Summary: </label>
          <input
            onChange={(event) => handleForm(event)}
            type='text'
            placeholder='ex. what did you think?'
            name='blogPost'
            id='blogPost'
            defaultValue={blogPost}
          />
          <br/>

          <label htmlFor=''>Game Rating: </label>
          <input
            onChange={(event) => handleForm(event)}
            type='text'
            placeholder='ex. 5, 7.5, 10'
            name='rating'
            id='rating'
            defaultValue={rating}
          />
          <br/>

          <button className='update-btn' onClick={handleUpdate}> Update Post</button>
        </form>
      )}

      <div className='buttons'>
        <button className='delete-btn' onClick={handleDelete}>Delete Review</button>
        <button className='edit-btn' onClick={() => setShowForm(!showForm)}>Toggle Edit</button>
      </div>
    </div>
  </div>
)}

export default AdminChanges

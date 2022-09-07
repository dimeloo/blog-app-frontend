import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddReview = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  /***************************************************************************/
  // FUNCTION TO ADD BLOG ENTRY BY ID NUMBER USING HTTP POST METHOD
  const sendReview = (event) => {
    event.preventDefault()

    fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then(() => navigate('/'))
      .catch((err) => console.error(err))

      //TODO: add popup for review added
    console.log('Review added check')
    console.log(process.env.REACT_APP_API_ENDPOINT)
  }
  /***************************************************************************/

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className='add-container'>
      <h1 className='add-title'>Add Review Post</h1>
      <br />
      <form className='add-form'>
        <label htmlFor=''>Review Title: </label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. name of game'
          name='title'
          id='title'
        />
        <br />
        <br />
        <label htmlFor=''>Review Summary: </label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='what did you think?'
          name='blogPost'
          id='blogPost'
        />
        <br />
        <br />
        <label htmlFor=''>Game Rating: </label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          min={0}
          max={10}
          placeholder='ex. 7, 8.5, 10'
          name='rating'
          id='rating'
        />
        <br />
        <br />
        <label htmlFor=''>Date: </label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder="ex. today's date"
          name='date'
          id='date'
        />
        <br />
        <br />
        <label htmlFor=''>Game Cover: </label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='enter image link'
          name='img'
          id='img'
        />
        <br />
        <br />
        <button className='add-btn' onClick={(event) => sendReview(event)}>Add Review</button>
      </form>
    </div>
  )
}

export default AddReview

import { useState } from 'react'
import PostContent from '../posts/post-detail/post-content'
import classes from './contact-form.module.css'
const ContactForm = () => {
  const [enteredEmail, setEnteredEmail]= useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const sendMessageHandler = (event) => {
    event.preventDefault()
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows={5}
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm

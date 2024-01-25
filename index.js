import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Notification = props => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.img}`} alt='images' />
      <p>{props.message}</p>
    </li>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1>Notifications</h1>

    <ul>
      <Notification
        className='box1'
        img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Notification Message'
      />
      <Notification
        className='box2'
        img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Notification Message'
      />
      <Notification
        className='box3'
        img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Notification Message'
      />
      <Notification
        className='box4'
        img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Notification Message'
      />
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

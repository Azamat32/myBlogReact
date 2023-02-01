import React from 'react'
import './intro.scss'
import  smile from '../assets/smileman.avif'
import cv from '../assets/cv.pdf'
function Intro() {
  return (
    <div className='intro'>
       <div className="intro_banner">
       {/* <img src={smile} alt="" /> */}
       <div className="intro_content">
            <h3>Привет, меня зовут </h3> 
            <h1>Тастемиров Азамат</h1> 
            <h2>Я талантливый веб-разработчик</h2>
            <a href={cv}>Загрузить резюме</a>
       </div>
       </div>
      
    </div>
  )
}

export default Intro
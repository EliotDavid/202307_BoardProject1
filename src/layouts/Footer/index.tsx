import React from 'react'
import './style.css';

export default function Footer() {
  return (
    <div id='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <div className='footer-logo-icon'></div>
          <div className='footer-logo-text'>Hoons Board</div>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email'>email@email.com</div>
          <div className='footer-icon-button'>
            <div className='footer-insta-icon'></div>
          </div>
          <div className='footer-icon-button'>
            <div className='footer-blog-icon'></div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>Copyright ⓒ 2023 Seojihoon. All Rights Reserved.</div>
    </div>
  )
}

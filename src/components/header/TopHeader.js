import React from 'react';
import './topHeader.css'

const TopHeader = () => {
  return (
    <header className='top_heade' id='top_heade'>
      <div className='top_header_container bg-white d-flex align-items-center justify-content-between'>
        <div className='headerLeftSide'>
          <img width="50" height="50" src="/logo.png" alt='Tuscot logo' />
          Tuscot
        </div>
        <div className='headerMiddleSide'>headerLeftSide</div>
        <div className='headerRightSide'>headerLeftSide</div>
      </div>
    </header>
  )
}

export default TopHeader
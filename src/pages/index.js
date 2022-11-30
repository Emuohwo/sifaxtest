import React from 'react'
import TopHeader from '../components/header/TopHeader';
import SideMenu from '../components/side-menu/SideMenu';
import './index.css'
import Projects from './projects/Projects';

function Home() {
  return (
    <div >
      <TopHeader />
      <div className='d-flex' >
        <div className='leftMenu'>
          <SideMenu />
        </div>
        <div className='mainContent'>
          <Projects />
        </div>
      </div>

    </div>
  )
}

export default Home
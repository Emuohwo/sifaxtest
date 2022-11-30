import React from 'react'
import './sideMenu.css';

const SIDE_MENU_LINKS = [
  {
    id: 'Dashboard',
    page: 'Dashboard',
    icon: 'fa fa-th-list',
    path: '/'
  },
  {
    id: 'Projects',
    page: 'Projects',
    icon: 'fa fa-th-list',
    path: '/'
  },
  {
    id: 'My-Tasks',
    page: 'My Tasks',
    icon: 'fa fa-th-list',
    path: '/'
  },
  {
    id: 'Messages',
    page: 'Messages',
    icon: 'fa fa-th-list',
    path: '/'
  },
  {
    id: 'Analytics',
    page: 'Analytics',
    icon: 'fa fa-th-list',
    path: '/'
  },
]

function SideMenu() {
  return (
    <div className='pt-4 pl-2 mt-4'>
      <ul>
        {SIDE_MENU_LINKS.map((item) => (
          <li key={item.id} className='d-flex side_menu_li my-2'> 
          <i className={` fa ${item.icon}`}></i>
          <a href={item.path}>{item.page}</a>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default SideMenu
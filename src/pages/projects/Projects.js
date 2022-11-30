import React from 'react';
import './projects.css'

const PROJECTS_LIST = [
  {
    id: 'slasjks',
    title: 'Slack',
    desc: 'This is a dummy description',
    tags: [
      {
        id: 'iso',
        name: 'iOS App',
      },
      {
        id: 'android',
        name: 'ANDROID',
      },
    ]
  },
  {
    id: 'GOOOS',
    title: 'Google',
    desc: 'This is a dummy description',
    tags: [
      {
        id: 'branding',
        name: 'Branding',
      },
    ]
  },
  {
    id: 'Twitter',
    title: 'Twitter',
    desc: 'This is a dummy description',
    tags: [
      {
        id: 'web',
        name: 'Website',
      },
    ]
  }
]

function Projects() {
  return (
    <div className='p-3 project_Page_container'>
      <h2> Working</h2>
      {PROJECTS_LIST.map((item) => (
        
      <div key={item.id} className='project_list_container bg-white p-3 mt-2'>
        <h4> {item.title}</h4>

        <div>
          
          <p className='main-color fw-bold'>
            {item.desc}
          </p>

          <div className='my-1'>
            {item.tags.map((tag) => (
            <button key={tag.id} className='btn success_btn mr-4'> {tag.name}</button>
            ))}
          </div>

          <div className='d-flex justify-content-betwwen'>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Projects
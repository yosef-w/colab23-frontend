import React from 'react'

export default function ProjectCard() {
  return (
    <div className='ml-6'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src="https://picsum.photos/400/200" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 text-center">Project Name</h5>
        </a>
        <div className="mb-3 flex flex-wrap">
          <div className="rounded-lg pr-4 pl-4 pt-2 pb-2 text-center border border-gray-300 bg-white mr-2 mb-2">
            Education
          </div>
          <div className="rounded-lg pr-4 pl-4 pt-2 pb-2 text-center border border-gray-300 bg-white mr-2 mb-2">
            Healthcare
          </div>
          <div className="rounded-lg pr-4 pl-4 pt-2 pb-2 text-center border border-gray-300 bg-white mb-2">
            Finance
          </div>
        </div>
        <p>Project Admin: Name</p>
        <div className="flex mb-4 mt-4"> 
          <div className="mr-14"> 
            <p>Team Size</p>
            <p>4</p>
          </div>
          <div> 
            <p>Roles Needed:</p>
            <p>Developer, Designer</p>
          </div>
        </div>
        <div className="flex mb-2"> 
          <div className="mr-14"> 
            <p>Timezone</p>
            <p>UTC 8</p>
          </div>
          <div>
            <p>Duration</p>
            <p># of weeks</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
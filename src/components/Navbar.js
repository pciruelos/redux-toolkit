import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#79aef8] text-black">
        <div>
            <h1>Redux Toolkit Application Example</h1>
        </div>
        <div className='hidden md:flex'>
       <ul className="hidden md:flex font-medium">
            <li><a href="https://github.com/pciruelos/redux-toolkit">Repo & Info</a></li>
                   </ul>
        </div>

    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import cs from './style.module.css';
import logo from './images/logo.png'
import pin from './images/pin.png';
import people from './images/people.svg';
import cart from './images/cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Link } from 'react-router-dom';
const Header = () => {
const [isTopOn, setIsTopOn] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const [isOpen1, setIsOpen1] = useState(false);
const [navBar, setNavBar] = useState(false);


const hidetop = ()=>{
    setIsTopOn(true);
}

const handleEnter = ()=>{
  setIsOpen(true);
}
const handleLeave = ()=>{
  setIsOpen(false);
}
const handleEnter1 = ()=>{
  setIsOpen1(true);
}
const handleLeave1 = ()=>{
  setIsOpen1(false);
}

const handleNavbar = ()=>{
  setNavBar(!navBar);
}
   return (
    <div className='w-full h-auto'>
      
      <div className={`flex justify-center items-center h-10 ${cs.topbg} relative ${isTopOn === false ? "block" : 'hidden'}`}>
        <p className='md:text-sm text-[11px] font-bold text-center text-black'>QUICK BUY! Get up to 25% off on All Stones</p>
         <button onClick={hidetop} className='top-[12px] md:right-20 right-3 absolute text-sm font-bold'><FontAwesomeIcon icon={faCircleXmark} /></button>
      </div>
      <div className='w-full bg-white flex justify-center items-center py-6'>
          <div className='w-[80%] h-auto bg-white flex md:justify-between justify-center items-center flex-wrap'>
            <div className='md:w-[30%] w-full h-auto flex justify-center items-center'>
              <Link to={'/'}><img src={logo} className='w-178 h-auto' alt="Pink Flamingo" /></Link>
            </div>
            <div className='md:w-[70%] w-full h-auto md:mt-0 mt-5 flex justify-between items-center flex-wrap gap-3'>
              <div className='md:w-[70%] w-full h-auto flex justify-center items-center flex-wrap'>
                <div className='w-full bg-white border-[1px] border-[#dc8064] rounded h-[50px] flex justify-between items-center'>
                  <div className='w-[95px] h-full bg-[#fa5c98] p-1 flex justify-center items-center gap-1'>
                    <img src={pin} className='md:w-[22px] w-4 h-auto' alt="" />
                    <p className='text-white text-[10px] text-left'>Deliver to<br />110054</p>
                  </div>
                  <div className='w-[85%] h-auto flex justify-center items-center gap-1 py-4 md:px-4 px-2'>
                     <input type="text" className='w-full h-auto pl-1 border-none outline-none text-[12px] font-poppins' placeholder='Search for medication & Wellness products..' />
                     <FontAwesomeIcon className='text-gray-300 w-4 h-auto' icon={faSearch} />
                  </div>
                </div>
              </div>
              <div className='md:w-[25%] w-full h-auto flex md:justify-center justify-end items-end'>
                    <div className='md:w-full w-[80%] h-auto flex justify-between items-center'>
                      <a href="#"><img src={cart} className='w-[31px] h-auto' alt="Pink Flamingo" /></a>
                      <a href="#"><img src={people} className='w-[31px] h-auto' alt="Pink Flamingo" /></a>
                      <a href="#"><p className='text-[12px] font-semibold text-gray-800'>SIGN IN / SIGN UP</p></a>
                      <FontAwesomeIcon icon={faBars} onClick={handleNavbar} className='w-6 h-auto md:hidden block cursor-pointer' />
                    </div>
              </div>
            </div>
          </div>
      </div>
      <div className={`w-full h-auto bg-white py-6 border-y-[1px] border-gray-300 md:block ${navBar == true ? 'block' : 'hidden'}`}>
        <ul className={`flex justify-center items-center md:flex-row flex-col gap-8 text-[16px] font-semibold ${cs.poppins}`}>
          <li className='text-[#fa5c98] hover:text-black' onClick={()=>setNavBar(false)}><Link to={'/'}>Home</Link></li>
          <li onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={()=>setNavBar(false)} className='hover:text-[#fa5c98] relative'><Link to={`/Products`}>Products <FontAwesomeIcon className='text-[#fa5c98]' icon={faAngleDown}/></Link>
          {isOpen && (
            <div className={`w-[200px] text-left text-[14px] h-auto p-6 z-20 absolute top-8 bg-white rounded shadow-md shadow-gray-500 text-black ${cs.shadow}`}>
              <ul>
                <li onMouseEnter={handleEnter1} onMouseLeave={handleLeave1} onClick={()=>setNavBar(false)} className='hover:text-[#fa5c98]'><Link to={`/Products/Dhoop-Cones`} className='w-full flex justify-between items-center'>Dhoop Cones <FontAwesomeIcon className='text-[#fa5c98]' icon={faAngleRight}/></Link>
                {isOpen1 && (
                    <div className={`w-[160px] text-left text-[12px] h-auto p-6 z-20 absolute top-0 left-[200px] bg-white rounded shadow-md shadow-gray-500 text-black ${cs.shadow}`}>
                      <ul>
                        <li className='hover:text-[#fa5c98]' onClick={()=>setNavBar(false)}><Link to={`/Products/Dhoop-Cones/Jar-Cones`} className='w-full flex justify-between items-center'>Jar Cones</Link></li>
                        <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Chandan Bamboo Dhoop</a></li>
                        <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Backflow Cone Dhoop</a></li>
                        <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Buddha Red Incense Cone</a></li>
                        <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">ountain Sandal Dhoop</a></li>
                        <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Cone Sandal Dhoop</a></li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Incense Holders</a></li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Yantras</a></li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Incense Sticks</a></li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Pooja Thali Sets</a></li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Shankh</a></li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Kalash</a></li>
                <li className='hover:text-[#fa5c98] mt-2' onClick={()=>setNavBar(false)}><a href="#">Book Rests</a></li>
              </ul>
            </div>
          )}
          </li>
          <li className='hover:text-[#fa5c98]' onClick={()=>setNavBar(false)}><a href="#">Servives <FontAwesomeIcon className='text-[#fa5c98]' icon={faAngleDown}/></a></li>
          <li className='hover:text-[#fa5c98]' onClick={()=>setNavBar(false)}><a href="#">Courses</a></li>
          <li className='hover:text-[#fa5c98]' onClick={()=>setNavBar(false)}><a href="#">Blogs</a></li>
          <li className='hover:text-[#fa5c98]' onClick={()=>setNavBar(false)}><a href="#">Videos</a></li>
          <li className='hover:text-[#fa5c98]' onClick={()=>setNavBar(false)}><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;

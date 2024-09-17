import React from 'react';
import mail from './images/mail.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';

const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#FA5C98]'>
      <div className='w-full h-auto border-b-2 border-white py-11 flex justify-evenly items-center flex-row flex-wrap'>
        <div className='w-[50%] min-w-[450px] h-auto flex justify-center items-center'>
            <img src={mail} className='md:w-[38px] w-6 h-auto' alt="mailbox" />
            <h1 className='text-white font-arial md:text-[24px] text-lg ml-3'>Sign Up To Shop Now</h1>
        </div>
        <div className='md:w-[50%] w-full  h-auto flex justify-center items-center'>
          <div className='w-[80%] h-12 md:mt-0 mt-5 bg-white p-2 rounded flex justify-between items-center'>
            <input type="text" className='w-full h-auto pl-1 border-none outline-none' placeholder='Enter you email' />
            <button className='text-white font-normal text-[15px] px-2 py-1 bg-[#fa5c98] border-0 outline-0 rounded'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex justify-center items-start'>
      <div className='w-[80%] h-auto border-b-2 md:pt-[66px] pt-8 pb-28 flex md:justify-center justify-evenly items-start flex-wrap'>
        <div className='md:w-[18%] w-full h-auto flex md:justify-start justify-center md:items-start items-center flex-col'>
          <h1 className='text-white font-arial text-[20px] text-left'>Contact Us</h1>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'>Demo Store</h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'>No. 1258 Utawala, Nairobi, 01010</h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'>Kenya</h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="tel:+25470101010">+25470101010</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="mailto:example@gmail.com">example@gmail.com</a></h5>
        </div>
        <div className='md:w-[18%] w-full h-auto flex md:justify-start justify-center md:items-start items-center flex-col md:mt-0 mt-5'>
          <h1 className='text-white font-arial text-[20px] text-left'><a href="#">Information</a></h1>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Privacy Policy</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Refund Policy</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Shipping Policy</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Terms Of Service</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Blogs</a></h5>
        </div>
        <div className='md:w-[18%] w-full h-auto flex md:justify-start justify-center md:items-start items-center flex-col md:mt-0 mt-5'>
          <h1 className='text-white font-arial text-[20px] text-left'><a href="#">Account</a></h1>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Search</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">About Us</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Faq</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Contact</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left  mt-2'><a href="#">Help</a></h5>
        </div>
        <div className='md:w-[18%] w-full h-auto flex md:justify-start justify-center md:items-start items-center flex-col md:mt-0 mt-5'>
          <h1 className='text-white font-arial text-[20px] text-left'><a href="#">Quick Links</a></h1>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="#">Incense Sticks</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="#">Shankh</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="#">Kalash</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="#">Incense Holders</a></h5>
          <h5 className='text-white font-arial text-[12px] text-left mt-2'><a href="#">Cone Dhoop</a></h5>
        </div>
        <div className='md:w-[18%] w-full h-auto flex md:justify-start justify-center md:items-start items-center flex-col md:mt-0 mt-5'>
          <h1 className='text-white font-arial text-[20px] text-left'><a href="#">Social Media.</a></h1>
          <h5 className='text-white font-arial text-[12px] text-left'>Follow us on social media and stay updated.</h5>
          <div className='w-full h-auto flex md:justify-start justify-center md:items-start items-center gap-3 mt-5'>
            <a href="#"><img src={twitter} className='w-[30px] h-auto' /></a>
            <a href="#"><img src={facebook} className='w-[30px] h-auto' /></a>
            <a href="#"><img src={instagram} className='w-[30px] h-auto' /></a>
            <a href="#"><img src={youtube} className='w-[30px] h-auto' /></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;

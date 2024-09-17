import { faAngleLeft, faAngleRight, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import cs from './style.module.css';
import hand from './images/Frame.png';
import bigIcon from './images/bigIcon.png';
import check from './images/check.png';
import cardImg1 from "./images/sliderCard1.png";
import cardImg2 from "./images/sliderCard2.png";
import cardImg3 from "./images/sliderCard3.png";
import thumbnail1 from "./images/lavonder.png";
import contactUs from "./images/contactUs.png";
import React, { useState } from 'react';
import data from "./LandingCard.json";
import { Link } from 'react-router-dom';

const Landing = () => {

  const [slider, setSlider] = useState(false);

  const handleSlider = () =>{
    setSlider(!slider);
    console.log(slider);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      img: cardImg1,
      title: 'The Power of Mindfulness',
      description: 'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way.',
      date: '08-05-2022',
    },
    {
      img: cardImg2,
      title: 'Connecting with the Divine',
      description: 'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.',
      date: '11-06-2022',
    },
    {
      img: cardImg3,
      title: 'The Beauty of Forgiveness',
      description: 'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding.',
      date: '11-07-2022',
    },
    // Duplicate two cards for demonstration
    {
      img: cardImg1,
      title: 'The Power of Mindfulness',
      description: 'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way.',
      date: '08-05-2022',
    },
    {
      img: cardImg2,
      title: 'Connecting with the Divine',
      description: 'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.',
      date: '11-06-2022',
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const displayedCards = () => {
    if (window.innerWidth >= 768) {
      return cards.slice(currentIndex, currentIndex + 3);
    } else {
      return [cards[currentIndex]];
    }
  };


  return (
    <div className='w-full h-auto'>
      <div className='w-full md:h-[271px] h-auto md:p-8 p-3 flex justify-between items-center bg-[#ffeef6]'>
        <div className='w-11 h-11 rounded-full bg-white flex justify-center items-center cursor-pointer'>
            <FontAwesomeIcon onClick={handleSlider} className='text-[#fa5c98] w-[18px]' icon={faAngleLeft} />
        </div>
        <div className='md:w-[80%] w-[70%] h-auto flex justify-center items-center md:flex-row flex-col gap-8'>
            <img src={hand} className={`md:w-[260px] ease-in-out duration-300 ${slider == true ? 'hidden' : 'block'} w-[200px] h-auto`} alt="" />
            <img src={thumbnail1} className={`md:h-[203px] ease-in-out duration-300 w-auto ${slider == true ? 'block' : 'hidden'} h-[200px] `} alt="" />
            <h1 className={`md:text-left text-center ease-in-out duration-300 text-black ${cs.poppins} ${slider == true ? 'hidden' : 'block'} md:text-[46px] text-[20px] md:font-extrabold font-semibold`}>Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses</h1>
            <h1 className={`md:text-left text-center ease-in-out duration-300 text-black ${cs.poppins} ${slider == true ? 'block' : 'hidden'} md:text-[46px] text-[20px] md:font-extrabold font-semibold`}>This is second slider Banner Content</h1>
        </div>
        <div className='w-11 h-11 rounded-full bg-white flex justify-center items-center cursor-pointer'>
            <FontAwesomeIcon onClick={handleSlider} className='text-[#fa5c98] w-[18px] h-4' icon={faAngleRight} />
        </div>
      </div>
      <div className='w-full h-auto bg-white md:p-10 p-5 flex justify-center items-center flex-col'>
        <div className='w-[80%] h-auto'>
            <h3 className={`text-black font-bold md:text-left text-center md:text-[20px] text-[16px] ${cs.poppins}`}>Shop Our Top Categories</h3>
            <div className='w-full h-auto flex md:justify-between justify-center items-start flex-wrap gap-5'>
                {
                    data.map((item, index) => {
                        return(
                             <div key={index} className='w-auto h-auto flex justify-center items-center flex-col mt-5'>
                                <Link to={`/CheckOut/${item.title.replaceAll(" ", "-")}/${item.id}`}><img src={item.image} className='w-[150px] h-auto shadow-sm shadow-gray-500 rounded-xl border-[1px] border-orange-300' alt="" /></Link>
                                <h4 className='text-[16px] font-bold text-center text-black mt-5'>{item.title}</h4>
                                <Link to={`/CheckOut/${item.title.replaceAll(" ", "-")}/${item.id}`}><h5 className='text-[15px] font-semibold text-center text-[#fa5c98] mt-2'><a href="#" target='blank'>Shop Now</a></h5></Link>
                             </div>
                        )
                    })
                } 
            </div>
        </div>
        <div className='w-[80%] h-auto bg-[#ffeef6] flex justify-center items-center py-8 mt-14'>
          <div className='w-[80%] h-auto flex justify-between items-center flex-col'>
            <h1 className='text-center md:text-[45px] text-[20px] text-black uppercase md:font-extrabold font-bold'>Why PINK FLAMINGO ?</h1>
            <div className='w-[80%] h-auto flex md:justify-between justify-center items-start flex-wrap mt-8 gap-8'>
              <div className='md:w-[25%] w-full h-auto flex justify-center items-center'>
                <img src={bigIcon} className='md:w-[219px] w-[150px] h-auto' alt="" />
              </div>
              <div className='md:w-[70%] w-full h-auto'>
                <table align='center' cellSpacing={0} cellPadding={0} border={0}>
                  <tbody>
                    <tr>
                      <td align='left' valign='top' className='pt-1 w-4'>
                        <img src={check} className='w-[24px] h-auto' alt="" />
                      </td>
                      <td>
                        <p className='text-[13px] text-black font-normal text-left ml-3'>Spirituality can provide them with a framework for understanding the universe and their role in it</p>
                      </td>
                    </tr>
                    <tr>
                      <td align='left' valign='top' className='pt-6 w-4'>
                        <img src={check} className='w-[24px] h-auto' alt="" />
                      </td>
                      <td valign='top' className='pt-5'>
                        <p className='text-[13px] text-black font-normal text-left ml-3'>Coping with stress and uncertainty</p>
                      </td>
                    </tr>
                    <tr>
                      <td align='left' valign='top' className='pt-6 w-4'>
                        <img src={check} className='w-[24px] h-auto' alt="" />
                      </td>
                      <td valign='top' className='pt-5'>
                        <p className='text-[13px] text-black font-normal text-left ml-3'>Spirituality can be a path to personal growth and self-discovery</p>
                      </td>
                    </tr>
                    <tr>
                      <td align='left' valign='top' className='pt-6 w-4'>
                        <img src={check} className='w-[24px] h-auto' alt="" />
                      </td>
                      <td valign='top' className='pt-5'>
                        <p className='text-[13px] text-black font-normal text-left ml-3'>Spirituality can provide people with a sense of community and connection with others</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[95%] w-full h-auto mt-8'>
          <h1 className='text-center md:text-[45px] text-[20px] text-black font-extrabold'>Our Latest Blogs</h1>
          <div className='w-full h-auto flex justify-between items-center md:gap-0 gap-3'>
          <div onClick={handlePrev} className='md:w-11 w-7 md:h-11 h-7 rounded-full bg-[#ffeef6] flex justify-center items-center cursor-pointer'>
            <FontAwesomeIcon className='text-[#fa5c98] w-[18px]' icon={faAngleLeft} />
          </div>
          <div className='md:w-[83%] w-[70%] h-auto flex gap-10 justify-center items-center flex-wrap mt-5'>
            {displayedCards().map((card, index) => (
              <div key={index} className={`w-[300px] h-auto bg-white ${cs.shadow2} flex justify-center items-start flex-col rounded-md`}>
                <img src={card.img} className='w-[300px] h-auto' alt="" />
                <div className='w-full h-auto flex justify-center items-center p-4 flex-col'>
                  <h4 className='text-[16px] font-bold text-center text-black'>{card.title}</h4>
                  <h5 className='text-[15px] text-center text-gray-800 mt-2'><a href="#" target='blank'>{card.description}</a></h5>
                  <button className={`w-[126px] py-3 rounded text-[14px] mt-5 text-white ${cs.readMore}`}>Read More</button>
                  <p className='text-[13px] w-full text-left text-gray-500 mt-5'>{card.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div onClick={handleNext} className='md:w-11 w-7 md:h-11 h-7 rounded-full bg-[#ffeef6] flex justify-center items-center cursor-pointer'>
            <FontAwesomeIcon className='text-[#fa5c98] w-[18px]' icon={faAngleRight} />
          </div>
        </div>
        </div>
        <div className='md:w-[80%] w-[90%] h-auto flex justify-center items-center flex-col mt-11'>
           <h1 className='text-center md:text-[45px] text[20px] text-black md:font-extrabold font-bold'>Let’s Connect</h1>
           <div className='w-full h-auto flex justify-between items-start flex-wrap mt-5'>
              <div className='md:w-[47%] w-full h-auto flex justify-center flex-col items-start'>
                <div className='w-full h-auto flex justify-between items-center flex-wrap'>
                  <div className={`md:w-[47%] w-full h-auto rounded-md bg-white ${cs.shadow2} flex justify-start items-center gap-2 p-2 py-4`}>
                    <FontAwesomeIcon icon={faUser} className='w-5 h-auto text-[#fa5c98]' />
                    <input type="text" className='w-[98%] text-[14px] text-gray-600 border-0 outline-none border-l-[1px] pl-2 border-gray-400' placeholder='Name' name="" id="" />
                  </div>
                  <div className={`md:w-[47%] w-full md:mt-0 mt-5 h-auto rounded-md bg-white ${cs.shadow2} flex justify-start items-center gap-2 p-2 py-4`}>
                    <FontAwesomeIcon icon={faPhone} className='w-5 h-auto text-[#fa5c98]' />
                    <input type="text" pattern='0-9' className='w-[98%] text-[14px] text-gray-600 border-0 outline-none border-l-[1px] pl-2 border-gray-400' placeholder='Phone Number' name="" id="" />
                  </div>
                </div>
                <div className={`w-full h-auto bg-white ${cs.shadow2} flex justify-start items-center gap-2 px-2 py-4 rounded-md mt-6`}>
                    <FontAwesomeIcon icon={faEnvelope} className='w-5 h-auto text-[#fa5c98]' />
                    <input type="text" pattern='0-9' className='w-[98%] text-[14px] text-gray-600 border-0 outline-none border-l-[1px] pl-2 border-gray-400' placeholder='Email Address' name="" id="" />
                  </div>
                <div className={`w-full h-auto bg-white ${cs.shadow2} flex justify-start items-center gap-2 px-2 py-4 rounded-md mt-6`}>
                    <textarea type="text" pattern='0-9' className='w-[98%] h-auto text-[14px] text-gray-600 border-0 outline-none pl-2 ' placeholder='Write your message here..' name="" id="" />
                </div>
                <button className={`w-full h-auto bg-white hover:bg-[#ff5c98] mt-5 text-[14px] text-gray-600 hover:text-white border-0 outline-none py-3 ${cs.shadow2}`}>SUBMIT</button>
              </div>
              <div className='md:w-[47%] w-full md:mt-0 mt-5 h-auto flex justify-center items-start'>
                <img src={contactUs} className='w-[530px] h-auto' alt="" />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
export default Landing;

import React, { useState } from 'react';
import thumbnail1 from "./images/lavonder.png";
import rating from "./images/rating.png";
import cs from './style.module.css';
import { faAngleLeft, faAngleRight, faHeart, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import latest1 from "./images/latest1.png";
import latest2 from "./images/latest2.png";
import latest3 from "./images/latest3.png";
import latest4 from "./images/latest4.png";
import data from "./ProductData.json"; 
import cards from "./LandingCard.json";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Checkout = () => {
  
  let uselocation = useLocation();
  let locationID = uselocation.pathname.split('/')[3];
  let locationTitle = uselocation.pathname.split('/')[2];
  let currentData = data.filter((v) => v.id == locationID && v.title == locationTitle.replaceAll("-", " ")).concat(cards.filter((v) => v.id == locationID && v.title == locationTitle.replaceAll("-", " ")));
  const img = currentData[0].image;
  const price = currentData[0].price;
  const title = currentData[0].title;
  const [img1, setImg1] = useState(img);
  const [count, setCount] = useState(1);
  const [pro, setPro] = useState(false);
  const [des, setDes] = useState(true);
  const [rev, setRev] = useState(false);
  const plusBTN = ()=>{
    setCount(count + 1);
  }
  const minBTN = ()=>{
    if(count > 1){
      setCount(count - 1);
    }
  }
  const descrip = () =>{
    setDes(true);
    setPro(false);
    setRev(false);
  }
  const product = () =>{
    setPro(true);
    setRev(false);
    setDes(false);
  }
  const review = () =>{
    setRev(true);
    setDes(false);
    setPro(false);
  }
  return (
    <div className='w-full h-auto'>
      <Header />
       <div className='w-full h-auto bg-white flex justify-center items-center flex-col p-8'>
      <div className='w-[80%] h-auto'>
        <p className='text-gray-400 font-medium text-[14px] text-left'>Product &gt; Dhoop Cones &gt; Jar Cones</p>
        <div className='w-full h-auto mt-5 flex md:justify-between justify-center flex-wrap items-start gap-5'>
            <div className='md:w-[10%] w-full h-full flex justify-center items-start flex-wrap flex-row gap-2'>
                <div className='w-[100px] h-[100px] flex justify-center items-center border-[1px] p-2 cursor-pointer rounded border-orange-800 bg-white'>
                   <img src={img} onClick={()=>setImg1(img)} className='w-[50px] h-auto' alt="" />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center border-[1px] p-2 cursor-pointer rounded border-orange-800 bg-white'>
                   <img src={thumbnail1} onClick={()=>setImg1(thumbnail1)} className='w-[50px] h-auto' alt="" />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center border-[1px] p-2 cursor-pointer rounded border-orange-800 bg-white'>
                   <img src={img} onClick={()=>setImg1(img)} className='w-[50px] h-auto' alt="" />
                </div>
                <div className='w-[100px] h-[100px] flex justify-center items-center border-[1px] p-2 cursor-pointer rounded border-orange-800 bg-white'>
                   <img src={thumbnail1} onClick={()=>setImg1(thumbnail1)} className='w-[50px] h-auto' alt="" />
                </div>
            </div>
            <div className='md:w-[40%] w-full h-full flex justify-center items-start bg-[#FFF2F8] p-4'>
               <img src={img1} className='w-[260px] h-auto rounded' alt="" />
            </div>
            <div className='md:w-[45%] w-full h-full flex justify-start items-start'>
                <div className='w-auto h-auto flex justify-center items-start flex-col '>
                    <div className='w-full h-auto flex justify-center items-start flex-col'>
                        <p className='text-[12px] text-black font-normal text-left'>Brand: Rashmi Divine Solutions</p>
                        <p className='text-[12px] text-black font-normal text-left mt-1'>Scent: Floral</p>
                        <p className='text-[12px] text-black font-normal text-left mt-1'>Availability: Only 2 in Stock</p>
                        <h5 className='text-[14px] text-black font-medium text-left mt-3'>{title}</h5>
                        <img src={rating} className='w-[60px] mt-3' alt="rating" />
                        <ul className='list-disc text-[12px] text-left text-black mt-3 ml-4'>
                            <li>
                               Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.
                            </li>
                            <li className='mt-2'>
                               Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.
                            </li>
                            <li className='mt-2'>
                               Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.
                            </li>
                        </ul>
                        <div className='w-full h-auto border-t-[1px] border-gray-400 pb-2 mt-6'>
                                <p className='text-[12px] text-black font-normal text-left mt-2'>USD(incl. of all taxes)</p>
                                <h4 className='text-[15px] text-black text-left font-bold mt-1'>{price} &nbsp; <span className='text[13px] font-normal text-gray-500'>$8.00</span></h4>
                                <div className='w-full h-auto flex justify-start items-center flex-wrap gap-3'>
                                    <div className='w-[100px] h-[30px] flex justify-start items-center'>
                                        <button onClick={minBTN} className='w-3 h-3 border-[1px] border-gray-400 p-3 text-[16px] text-black flex justify-center items-center'>-</button>
                                        <span className='w-3 h-3 border-[1px] border-gray-400 p-3 text-[16px] text-black flex justify-center items-center'>{count}</span>
                                        <button onClick={plusBTN} className='w-3 h-3 border-[1px] border-gray-400 p-3 text-[16px] text-black flex justify-center items-center'>+</button>
                                    </div>
                                    <button className={`w-auto h-3 py-3 px-4 border-[1px] border-[#fff2f8] text-[11px] ${cs.readMore} text-white rounded flex justify-center items-center`}>Buy now</button>
                                    <button className='w-auto h-3 border-[1px] border-orange-600 p-3 text-[11px] text-black flex justify-center items-center'>Add to cart</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-auto flex justify-center items-center flex-col mt-5 '>
            <div className='w-full h-auto flex justify-center items-center flex-wrap gap-4 border-b-[1px] border-gray-300'>
                <p onClick={descrip} className={`text-black text-center text-[16px]  ${des == true ? 'border-b-[1px]' : 'border-0'} border-orange-500 font-medium pb-2 cursor-pointer`}>Description</p>
                <p onClick={product} className={`text-black text-center text-[16px]  ${pro == true ? 'border-b-[1px]' : 'border-0'} border-orange-500 font-medium pb-2 cursor-pointer`}>Product Information</p>
                <p onClick={review}  className={`text-black text-center text-[16px]  ${rev == true ? 'border-b-[1px]' : 'border-0'} border-orange-500 font-medium pb-2 cursor-pointer`}>Reviews</p>
            </div>
            <div className='md:w-[60%] w-full h-auto mt-5'>
              <p className={`text-black text-left text-[12px] font-normal ${des == true ? 'block' : 'hidden'}`}>Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.</p>
              <p className={`text-black text-left text-[12px] font-normal ${pro == true ? 'block' : 'hidden'}`}>Products Information - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sunt at iste doloribus, nemo officiis. Est dolores illum ipsam voluptatibus? In natus minus earum voluptas blanditiis quis laboriosam dignissimos rem laudantium nisi, fugiat laborum eveniet, reprehenderit neque excepturi labore cupiditate doloribus. Unde voluptas debitis magni consequuntur ea perspiciatis cum dolor.</p>
              <p className={`text-black text-left text-[12px] font-normal ${rev == true ? 'block' : 'hidden'}`}>Customer Review - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas odit ratione repellendus possimus, magni asperiores ipsam error dolore nostrum?</p>
            </div>
        </div>
      </div>
      <div className='w-[95%] h-auto mt-8'>
          <h1 className='text-center text-[21px] text-black font-semibold'>Related Products</h1>
          <div className='w-full h-auto flex justify-between items-center'>
            <div className='w-11 h-11 rounded-full bg-[#ffeef6] flex justify-center items-center cursor-pointer'>
              <FontAwesomeIcon className='text-[#fa5c98] w-[18px]' icon={faAngleLeft} />
            </div>
            <div className='w-[83%] h-auto flex md:justify-between justify-center items-center flex-wrap mt-5'>
              <div className={`w-[230px] h-full bg-white flex justify-center items-start flex-col rounded-md`}>
                <div className='w-full h-[319px] flex justify-between items-center flex-col p-4 border-[2px] border-orange-600 rounded-lg'>
                    <div className='w-full h-auto flex justify-between items-center'>
                        <span className='w-auto h-auto px-4 py-2 bg-green-600 rounded-full text-[11px] font-normal text-black'>NEW</span>
                        <div className='w-11 h-11 rounded-full bg-[#ffeef6] flex justify-center items-center cursor-pointer'>
                          <FontAwesomeIcon className='text-[#fa5c98] w-[18px]' icon={faHeart} />
                        </div>
                    </div>
                    <img src={latest1} className='w-[160px] h-auto' alt="" />
                    <button className={`w-auto py-2 px-3 rounded text-[12px] mt-5 text-white ${cs.readMore}`}><FontAwesomeIcon className='text-white text-[12px]' icon={faShoppingCart} /> Add to card</button>
                </div>
                <div className='w-full h-auto flex justify-center items-center p-4 flex-col'>
                  <h3 className='text-[14px] font-bold text-center text-[#ff5c98]'>The Power of Mindfulness</h3>
                  <h4 className='text-[13px] text-orange-800 text-left font-bold mt-1'>$4.05 &nbsp; <span className='text[13px] font-normal text-gray-500'>$8.00</span></h4>
                </div>
              </div>
              <div className={`w-[230px] h-full bg-white flex justify-center items-start flex-col rounded-md`}>
                <div className='w-full h-[319px] p-4 flex justify-between items-center flex-col border-[2px] border-orange-600 rounded-lg'>
                    <div className='w-full h-auto flex justify-between items-center'>
                        <span className='w-auto h-auto px-4 py-2 bg-red-600 rounded-full text-[11px] font-normal text-black'>-10%</span>
                        <div className='w-9 h-9 rounded-full bg-white hover:bg-[#ffeef6] border-[1px] border-gray-400 flex justify-center items-center cursor-pointer'>
                          <FontAwesomeIcon className='text-gray-400 hover:text-[#ff5c98] w-[18px]' icon={faHeart} />
                        </div>
                    </div>
                    <img src={latest2} className='w-[160px] h-auto' alt="" />
                    <button className={`w-auto py-2 px-3 rounded text-[12px] mt-5 text-white ${cs.readMore}`}><FontAwesomeIcon className='text-white text-[12px]' icon={faShoppingCart} /> Add to card</button>
                </div>
                <div className='w-full h-auto flex justify-center items-center p-4 flex-col'>
                  <h3 className='text-[14px] font-bold text-center text-[#ff5c98]'>The Power of Mindfulness</h3>
                  <h4 className='text-[13px] text-orange-800 text-left font-bold mt-1'>$7.05</h4>
                </div>
              </div>
              <div className={`w-[230px] h-full bg-white flex justify-center items-start flex-col rounded-md`}>
                <div className='w-full h-[319px] p-4 flex justify-between items-center flex-col border-[2px] border-orange-600 rounded-lg'>
                    <div className='w-full h-auto flex justify-between items-center'>
                        <span className='w-auto h-auto px-4 py-2 bg-yellow-600 rounded-full text-[11px] font-normal text-black'>HOT</span>
                        <div className='w-9 h-9 rounded-full bg-white hover:bg-[#ffeef6] border-[1px] border-gray-400 flex justify-center items-center cursor-pointer'>
                          <FontAwesomeIcon className='text-gray-400 hover:text-[#ff5c98] w-[18px]' icon={faHeart} />
                        </div>
                    </div>
                    <img src={latest3} className='w-[160px] h-auto' alt="" />
                    <button className={`w-auto py-2 px-3 rounded text-[12px] mt-5 text-white ${cs.readMore}`}><FontAwesomeIcon className='text-white text-[12px]' icon={faShoppingCart} /> Add to card</button>
                </div>
                <div className='w-full h-auto flex justify-center items-center p-4 flex-col'>
                  <h3 className='text-[14px] font-bold text-center text-[#ff5c98]'>The Power of Mindfulness</h3>
                  <h4 className='text-[13px] text-orange-800 text-left font-bold mt-1'>$4.05</h4>
                </div>
              </div>
              <div className={`w-[230px] h-full bg-white flex justify-center items-start flex-col rounded-md`}>
                <div className='w-full h-[319px] p-4 border-[2px] flex justify-between items-center flex-col border-orange-600 rounded-lg'>
                    <div className='w-full h-auto flex justify-between items-center'>
                        <span className='w-auto h-auto px-4 py-2 bg-green-600 rounded-full text-[11px] font-normal text-black'>NEW</span>
                        <div className='w-9 h-9 rounded-full bg-white hover:bg-[#ffeef6] border-[1px] border-gray-400 flex justify-center items-center cursor-pointer'>
                          <FontAwesomeIcon className='text-gray-400 hover:text-[#ff5c98] w-[18px]' icon={faHeart} />
                        </div>
                    </div>
                    <img src={latest4} className='w-[160px] h-auto' alt="" />
                    <button className={`w-auto py-2 px-3 rounded text-[12px] mt-5 text-white bg-gray-500`}><FontAwesomeIcon className='text-white text-[12px]' icon={faShoppingCart} /> Out of stock</button>
                </div>
                <div className='w-full h-auto flex justify-center items-center p-4 flex-col'>
                  <h3 className='text-[14px] font-bold text-center text-[#ff5c98]'>The Power of Mindfulness</h3>
                  <h4 className='text-[13px] text-orange-800 text-left font-bold mt-1'>$4.05</h4>
                </div>
              </div>
            </div>
            <div className='w-11 h-11 rounded-full bg-[#ffeef6] flex justify-center items-center cursor-pointer'>
              <FontAwesomeIcon className='text-[#fa5c98] w-[18px]' icon={faAngleRight} />
            </div>
          </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Checkout;

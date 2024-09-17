import rating from "./images/rating.png";
import React, { useState } from 'react';
import data from "./ProductData.json"; 
import cs from './style.module.css';
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Products = () => {
  const category = ['Men', 'Women', 'Kids', 'Boys', 'Girls', 'Natural', 'Purity', 'Quality'];

  const [isOn, setIsOn]= useState(true);
  const [isOn1, setIsOn1]= useState(false);
  const [isOn2, setIsOn2]= useState(false);
  const [iD, setID]= useState();

  const handleNext = () =>{
    if(isOn){
      setIsOn1(true);
      setIsOn(false);
    }else if(isOn1){
      setIsOn2(true);
      setIsOn1(false);
    }
  }
  const handlePrev = () =>{
    if(isOn1){
      setIsOn1(false);
      setIsOn(true);
    }else if(isOn2){
      setIsOn2(false);
      setIsOn1(true);
    }
  }
  return (
    <div className="w-full h-auto">
      <Header />
      <div className='w-full h-auto bg-white flex justify-center items-center p-8'>
      <div className='w-[80%] h-auto my-5 '>
        <p className='text-gray-400 font-medium text-[14px] text-left'>Product &gt; Dhoop Cones &gt; Jar Cones</p>
        <div className='w-full h-auto mt-5 flex md:justify-start justify-center items-center gap-5'>
          <div className='relative'>
            <select name="" id="" className='w-auto h-auto py-2 px-3 rounded-full text-[14px] bg-white text-gray-400 font-medium border-gray-400 border-[1px]'>
              <option value="" disabled selected>Price ($)</option>
              <option value="0-1">0$ - 1$</option>
              <option value="1-2">1$ - 2$</option>
              <option value="2-5">2$ - 5$</option>
              <option value="5-10">5$ - 10$</option>
              <option value="10-100">10$ - 100$</option>
            </select>
          </div>
          <div className='relative'>
            <select name="" id="" className='w-auto h-auto py-2 px-3 rounded-full text-[14px] bg-white text-gray-400 font-medium border-gray-400 border-[1px]'>
              <option value="" disabled selected>Category</option>
              {category.map((cat, index)=>{
                return <option key={index} value={cat}>{cat}</option>
              })}
            </select>
            {/* <FontAwesomeIcon className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[14px]' icon={faAngleDown} /> */}
          </div>
        </div>
        <div className='w-full h-auto flex md:justify-between justify-center items-start flex-wrap mt-8'>
          {
            data.map((item, index) => (
              <div key={index} className='w-[230px] h-auto flex justify-center items-center flex-col bg-white'>
               <Link to={`/CheckOut/${item.title.replaceAll(" ", "-")}/${item.id}`}><img src={item.image} className='w-[230px] h-auto cursor-pointer' alt={item.title} /></Link>
                <div className='w-full h-auto flex justify-center md:items-start items-center flex-col py-5'>
                  <h5 className='text-[14px] text-[#ff5c98] font-medium text-left'>{item.title}</h5>
                  <p className='text-[13px] text-black font-normal md:text-left text-center mt-1'>{item.description}</p>
                  <img src={rating} className='w-[60px] mt-1' alt="rating" />
                  <h4 className='text-[15px] text-orange-700 text-left font-bold mt-1'>${item.price}</h4>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-full h-auto flex justify-center items-center'>
          <div className='w-[250px] h-auto mt-5 flex justify-center items-center flex-wrap gap-3'>
            <button onClick={handlePrev} className={`text-[14px] font-normal text-[#DC8064] ${isOn1 == true || isOn2 == true ? 'block' : 'hidden'}`}>Previous</button>
            <button onClick={()=>{ setIsOn(true); setIsOn2(false); setIsOn1(false)}} className={`text-black text-[12px] font-normal ${isOn == true ? cs.readMore : ''} p-1 rounded-full h-6 w-6 flex justify-center items-center`}>1</button>
            <button onClick={()=>{ setIsOn(false); setIsOn2(false); setIsOn1(true)}} className={`text-black text-[12px] ${isOn1 == true ? cs.readMore : ''} font-normal  p-1 rounded-full h-6 w-6 flex justify-center items-center`}>2</button>
            <button onClick={()=>{ setIsOn(false); setIsOn2(true); setIsOn1(false)}} className={`text-black text-[12px] ${isOn2 == true ? cs.readMore : ''} font-normal p-1 rounded-full h-6 w-6 flex justify-center items-center`}>3</button>
            <button onClick={handleNext} className={`text-[14px] font-normal text-[#DC8064] ${isOn1 == true || isOn == true ? 'block' : 'hidden'}`}>Next</button>
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Products;
import React from 'react';
import welcome from './assets/img/welcome.jpg'
import logo from './assets/img/logo.png'

const Welcome = () => {
  return (
<div className="relative w-screen h-[568px] relative bg-white">
  <div className='absolute inset-0 bg-black opocity-50'>
    <img src={welcome} alt="" className='absolute w-full h-[180px] shadow-md' />
  </div>
  <img src={logo} className='absolute w-28 top-3 left-[115px]'  alt="" />
  
</div>
    

  )
}

export default Welcome;


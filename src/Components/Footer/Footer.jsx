import React from 'react'
import './Footer.css'
import { PiWalletFill } from "react-icons/pi";
import { BsFillBellFill } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { IoMdCompass } from "react-icons/io";
const Footer = () => {
  return (
    <div className='janta'>
      <footer>
        <PiWalletFill className='icon selected'/>
        <IoMdCompass className='icon'/>
        <BsFillBellFill className='icon'/>
        <TbSettings className='icon'/>
      </footer>
    </div>
  )
}

export default Footer
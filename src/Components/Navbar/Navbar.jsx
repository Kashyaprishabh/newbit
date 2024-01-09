import React from 'react'
import './Navbar.css'
import { IoChevronBack } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { CgEditFlipH } from "react-icons/cg";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { LiaUploadSolid } from "react-icons/lia";
import { IoRemoveCircleOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='back'>
        <h2><IoChevronBack color='#4c5968'/></h2>
      </div>
      <div>  
        <h1 className='bit'>Bitcoin Wallet</h1>
      </div>
      <div className="dropdown">
          <h4><BsThreeDots color='#4c5968' className="logo" onclick="myFunction()"/></h4>
          <ul id="myDropdown" className="dropdown-content">
            <li onclick="performAction('Edit')">Edit<CgEditFlipH className='i'/></li>
            <li onclick="performAction('Courier Info')">Courier Info<HiOutlineRectangleStack className='i'/></li>
            <li onclick="performAction('Share')">Share<LiaUploadSolid className='i'/></li>
            <li onclick="performAction('Remove')">Remove<IoRemoveCircleOutline className='i' color='red'/></li>
          </ul>
      </div>
      <div class="overlay" onclick="closeDropdown()"></div> 
    </div>

  )
}

export default Navbar

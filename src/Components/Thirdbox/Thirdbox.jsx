import React from 'react'
import './Thirdbox.css'
import { PiCurrencyCircleDollarFill } from "react-icons/pi";


const Thirdbox = () => {
  return (
    <div className='Week'>
      <div className='bitcoinBox3'>
        <div className='bitcoinBox3_first'>
          <PiCurrencyCircleDollarFill className='Dollar' size={150} color='#1aa1f7'/><div className='Buy'>Buy BTC</div>
          
        </div>
      </div>
      <div className='bitcoinBox4'>
        <div className='bitcoinBox4_first'>
          <PiCurrencyCircleDollarFill className='Dollar' size={150} color='#fe5587'/><div className='Buy'>Buy BTC</div>
          
        </div>
      </div>
    </div>  
   
  )
}

export default Thirdbox
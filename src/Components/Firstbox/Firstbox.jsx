import React from 'react'
import "./Firstbox.css"
import { SiBitcoinsv } from "react-icons/si";
import { BsChevronCompactDown } from "react-icons/bs";


const Firstbox = () => {
  return (
    <div className='bitcoinBox'>
      <div className='bitcoinBox_first'>
          <div className='logo1'>
          <SiBitcoinsv size={70}/>
          </div>
          <div className='bitcoin'>
           Biticoin
          </div>
          <div className='BTC'>
            BTC
          </div>
          <div className='R'>3.529020 BTC</div>
          <div className='D'>$19.153 USD</div>
          <button className='red'>- 2.32%</button>          
          <div className='toggle'>
            <h4><BsChevronCompactDown color='#4c5968'size={100} className="logo" onclick="togglemenu()"/></h4>
              <div className='menu-options'> 
                <button onclick="toggle('days')">Days</button>
                <button onclick="toggle('weeks')">Weeks</button>
                <button onclick="toggle('months')">Months</button>
                <button onclick="toggle('years')">Years</button>
              </div>
            </div>
          </div>
        </div>
     
    
  )
}

export default Firstbox
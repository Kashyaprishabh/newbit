

import React from 'react'
import './Secondbox.css'
import { LuDot } from "react-icons/lu";
import { ResponsiveContainer, Area, AreaChart} from 'recharts';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 3400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 3398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 3800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const Secondbox = () => {
  return (
    <div className='bitcoinBox'>
      <div className='bitcoinBox_first1'>
        <div className='charts'>
          <ResponsiveContainer width={900}>
            
            <AreaChart width={500} height={400} data={data} margin={{ top: 50, right: 90, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  {/* <stop offset="5%" stopColor="8884d8" stopOpacity={0.8}/> */}
                  {/* <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/> */}
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f99121" stopOpacity={0.1}/>
                  {/* <stop offset="95%" stopColor="orange" stopOpacity={0.1}/> */}
                </linearGradient>
              </defs> 
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis />
              <CartesianGrid strokeDasharray="3 3" /> */}
              
              {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
              <Area type="monotone" dataKey="pv" stroke="#f99121" fillOpacity={1} fill="url(#colorPv)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div>
         <LuDot size={80} className='reddot1' color='red'/><div className='Lower'>Lower: $4.895</div>
        </div>
        <div>
         <LuDot size={80} className='reddot2' color='#1ec070'/><div className='Higher'>Higher: $6.857</div>
        </div>
        <div>
         <LuDot size={80} className='reddot3' color='orange'/><div className='Lowest'>1BTC: $5.483</div>
        </div>
        
      </div>
    </div>
  )
}

export default Secondbox
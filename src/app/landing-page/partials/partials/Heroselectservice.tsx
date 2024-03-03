import React from 'react'


export default function Heroselectservice() {
  return (
    
    <div className='flex items-center'>
          <select className='border border-blue-200 rounded-md p-2 text-sm'>
          <option value="">Online payment </option>
          <option value="">File Resolution </option>
          <option value="">Commence Business  </option>
          <option value="">Change in particulars</option> 
          <option value="">Entity Registration</option> 
          <option value="">Entity Registration With Tin</option> 
        </select>
        <button className="inline-flex p-2 rounded-md py-2.5 px-5 bg-blue-600 text-sm text-white">
          Arrow Forward Icon
        </button>
    </div>
  )
}

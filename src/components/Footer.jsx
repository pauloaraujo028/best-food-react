import React from "react";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className='max-w-[1640px] mx-auto items-center p-4'>
      <div className="flex items-center justify-center">
        <p>Copyright {year} developed by
          Paulo Araújo. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
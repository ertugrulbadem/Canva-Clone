import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='p-2 px-5 flex justify-between items-center shadow-sm'>
        <Image src={'/canva-logo.png'} alt='logo' width={100} height={100} className='w-[120px] h-[60px]'/>
    </div>
  )
}

export default WorkspaceHeader
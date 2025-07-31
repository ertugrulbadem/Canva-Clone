"use client"
import { Workspacemenu } from '@/services/Options'
import { CirclePlus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import CustomCanvasDialog from './CustomCanvasDialog'

function Sidebar() {

    const path = usePathname()

  return (
    <div className='h-screen shadow-sm p-2 bg-purple-50'>
        <CustomCanvasDialog>
        <div className='p-2 flex items-center flex-col hover:cursor-pointer mb-5'>
            <CirclePlus className='bg-purple-600 text-white rounded-full h-8 w-8'/>
            <h2 className='text-sm text-purple-600'>Create</h2>
        </div>
        </CustomCanvasDialog>
        {Workspacemenu.map((menu, index) =>(
            <div key={index} className={`p-2 flex items-center flex-col mb-4 group hover:bg-purple-100 rounded-xl cursor-pointer ${path == menu.path && 'bg-purple-100'}`}>
                <menu.icon className={`group-hover:text-purple-800 ${path == menu.path && 'bg-purple-100'}`}/>
                <h2 className={`text-sm group-hover:text-purple-800 ${path == menu.path && 'bg-purple-100'}`}>{menu.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default Sidebar
'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const UserRoutes = () => {
    const path = usePathname()
  return (
    <div>
      <div className='flex gap-3 text-gray-500'>
      <ChevronLeft />
      <ChevronRight />
      <h1 className='text-white'>{path}</h1>
      </div>

    </div>
  )
}

export default UserRoutes

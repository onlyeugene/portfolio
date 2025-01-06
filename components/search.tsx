import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

const Search = () => {
  return (
    <div className='relative w-60'>
        <SearchIcon size={15} className='absolute top-1.5 left-1' style={{color:' gray'}}/>
      <Input type="search" placeholder='Search' className='border border-gray-700 h-7 px-2 pl-6 caret-whited text-white'/>
    </div>
  )
}

export default Search

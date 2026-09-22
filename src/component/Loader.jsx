import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='border-blue-500 border-t-blue-500 rounded-full animate-spin w-12 h-12 border-4' />
      </div>
    </Html>
  )
}

export default Loader
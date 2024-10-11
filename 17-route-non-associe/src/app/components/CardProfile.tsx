import React from 'react'

export default function CardProfile({children}: {children : React.ReactNode}) {
  return (
    <div className='flex justify-center items-center text-orange-950'>
        {children}
    </div>
  )
}

import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex justify-center items-center p-4 bg-backImg text-xs sm:text-base'>
      <p>
        copyright &copy; 2023 Mohamed-24-03-2022 
      </p>
      <a href='https://github.com/Mohamed-24-03-2022' rel='author' target='_blank' className='mx-1'>
      <AiFillGithub />
      </a>
    </div>
  )
}

export default Footer
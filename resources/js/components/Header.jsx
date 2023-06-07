import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import GroupIndex from './Home/GroupIndex';
import Nav from './Nav';

const Header = () => {

  // const [user, setuser] = useState('')

  // useEffect(() => {
  //   usercheck()
  // },[])

  // const usercheck = () => {
  //   axios.get('api/user').then((response) => {
  //       setuser(response.data)
  //   })
  // }

  // let headerdata = (
  //   <div className="text-white top-0 z-10 bg-green-bg grid-cols-1">
  //   <div className='container mx-auto py-3 flex items-center md:flex-row'>
  //     <span>
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  //       </svg>
  //     </span>
  //     <span className='text-xl font-bold'>
  //         <Link to='/'>ストチャレ！</Link>
  //     </span>
  //     <Nav/>
  //   </div>
  // </div>
  // )

  // if (!user) {
    let headerdata = (
      <div className="text-white top-0 z-10 bg-green-bg ">
      <div className='mx-auto py-3 w-max flex items-center md:flex-row'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
        </span>
        <span className='text-3xl font-bold'>
        <Link to='/'>ストチャレ！</Link>
        </span>
      </div>
    </div>
    )
  // }


  return (
    <>
    {headerdata}
    </>
  )
}

export default Header

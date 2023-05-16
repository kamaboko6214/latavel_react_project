import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../RouterMain';
import Rank from './Rank'
import Userarea from './Userarea'

const GroupIndex = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const [user, setuser] = useState('')
  useEffect(() => {
    handleUserClick()
  },[])

  const handleUserClick = () => {
    console.log(isAuth)
  }
  return (
    
    <div className='mx-auto bg-bg-content'>
      <div className=" text-center flex pb-20">
        <div id='body' className='w-1/4 mt-20 text-center'>
          <Userarea user={user}/>
          <Rank />
        </div>
        <div className='w-3/4'>
          <h1 className='text-gray-50 font-bold text-3xl mt-4'>
            グループ一覧
            <button onClick={handleUserClick}>osite</button>
          </h1>
          <div className=''>
            <ul className>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='pb-10'>
          <ul className='flex justify-center items-center'>
            <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
            <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
            <li className='bg-white rounded-full h-20 w-20 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
            <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
            <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
          </ul>
        </div>
    </div>
  )
}

export default GroupIndex

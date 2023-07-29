import React, { useContext, useState } from 'react'
import { AuthContext } from '../RouterMain';
import Rank from './Rank'
import Userarea from './Userarea'
import { Link } from 'react-router-dom'

const GroupIndex = () => {
  const { user, setUser } = useState('')
  const { group, setGroup } = useState('');

  const nothingMessage = (
    <>
      <img src="img/Website-Builder-color-800px.png" className='mt-10 mx-auto h-96 w-96 opacity-80' alt="" />
      <h1 className='text-6xl font-bold text-gray-400 '>投稿がありません。</h1>
      <Link to='/create'>
        <div class="shadow-lg hover:bg-green-700 duration-300 fixed z-50 bottom-20 right-8 py-10 h-28 w-28 justify-center border-2 bg-green-600 rounded-full cursor-pointer">
          <h1 class="font-bold text-2xl text-white">投稿</h1>
        </div>
      </Link>
    </>
  )
  return (
    <div className='mx-auto bg-white-bg'>
      <div className=" text-center flex pb-20">
        <div id='body' className='w-1/4 mt-20 text-center'>
          <Userarea user={user} />
          <Rank />
        </div>
        <div className='w-3/4'>
          <h1 className='text-gray-600 font-bold text-3xl mt-6'>
            投稿一覧
          </h1>
          <div>
            <ul>
              {group ? group : nothingMessage}
              {/* <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li> */}
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
